import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { EmailClient } from '@azure/communication-email';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: true }));
app.use(express.json());

// Use your registered sender/recipient from .env (e.g. info@cloudsurge.uk)
const SENDER = process.env.AZURE_SENDER_EMAIL || 'Donotreply@vibesurge.uk';
const RECIPIENT = process.env.CONTACT_RECIPIENT_EMAIL || 'info@cloudsurge.uk';

function normalizeConnectionString(s) {
  if (!s || typeof s !== 'string') return s;
  s = s.trim();
  if (s.startsWith('http') && !s.startsWith('endpoint=')) {
    return `endpoint=${s}`;
  }
  return s;
}

const connectionString = normalizeConnectionString(process.env.AZURE_COMMUNICATION_CONNECTION_STRING);
if (!connectionString) {
  console.warn('AZURE_COMMUNICATION_CONNECTION_STRING is not set. Contact API will return 503.');
}

let emailClient = null;
if (connectionString) {
  try {
    emailClient = new EmailClient(connectionString);
  } catch (e) {
    console.error('Failed to create EmailClient:', e.message);
  }
}

function escapeHtml(s) {
  if (typeof s !== 'string') return '';
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

app.post('/api/send-email', async (req, res) => {
  if (!emailClient) {
    return res.status(503).json({ error: 'Email service not configured' });
  }

  const { name, email, phone, company, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields: name, email, message' });
  }

  const subject = `Cloud Surge Contact: ${name}${company ? ` (${company})` : ''}`;
  const plainText = [
    'New contact form submission from Cloud Surge',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    company ? `Company: ${company}` : null,
    '',
    message,
  ]
    .filter(Boolean)
    .join('\n');

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Cloud Surge – Contact form</title></head>
<body style="margin:0;padding:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:16px;line-height:1.5;color:#333;background-color:#f5f5f5;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
        <tr><td style="padding:28px 32px;border-bottom:3px solid #ec3f24;">
          <p style="margin:0 0 4px;font-size:12px;color:#888;letter-spacing:0.05em;text-transform:uppercase;">Contact form</p>
          <h1 style="margin:0;font-size:20px;font-weight:700;color:#101010;">Cloud Surge</h1>
        </td></tr>
        <tr><td style="padding:28px 32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0;background:#f9f9f9;border-radius:8px;border:1px solid #eee;">
            <tr><td style="padding:16px 20px;"><p style="margin:0 0 8px;font-size:12px;color:#888;">Name</p><p style="margin:0;font-size:16px;font-weight:600;color:#101010;">${escapeHtml(name)}</p></td></tr>
            <tr><td style="padding:0 20px 16px;"><p style="margin:0 0 8px;font-size:12px;color:#888;">Email</p><p style="margin:0;font-size:14px;color:#555;">${escapeHtml(email)}</p></td></tr>
            ${phone ? `<tr><td style="padding:0 20px 16px;"><p style="margin:0 0 8px;font-size:12px;color:#888;">Phone</p><p style="margin:0;font-size:14px;color:#555;">${escapeHtml(phone)}</p></td></tr>` : ''}
            ${company ? `<tr><td style="padding:0 20px 16px;"><p style="margin:0 0 8px;font-size:12px;color:#888;">Company</p><p style="margin:0;font-size:14px;color:#555;">${escapeHtml(company)}</p></td></tr>` : ''}
            <tr><td style="padding:0 20px 16px;"><p style="margin:0 0 8px;font-size:12px;color:#888;">Message</p><p style="margin:0;font-size:14px;color:#555;white-space:pre-wrap;">${escapeHtml(message)}</p></td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:20px 32px 28px;text-align:center;font-size:12px;color:#999;border-top:1px solid #eee;">Cloud Surge contact form · Do not reply to this email</td></tr>
      </table>
    </td></tr></table>
</body></html>
`.trim();

  try {
    const poller = await emailClient.beginSend({
      senderAddress: SENDER,
      recipients: {
        to: [{ address: RECIPIENT, displayName: 'Cloud Surge Info' }],
        replyTo: [{ address: email, displayName: name }],
      },
      content: {
        subject,
        plainText,
        html,
      },
    });
    await poller.pollUntilDone();
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Send email error:', err);
    const message =
      err?.details?.error?.message ||
      err?.message ||
      (typeof err?.error === 'string' ? err.error : null) ||
      'Failed to send email';
    return res.status(500).json({ error: message });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true, emailConfigured: !!emailClient });
});

app.listen(PORT, () => {
  console.log(`Contact API listening on port ${PORT}`);
});
