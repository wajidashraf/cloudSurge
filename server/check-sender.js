#!/usr/bin/env node
/**
 * Check which sender email works with Azure Communication Services.
 * Run from server/: node check-sender.js
 * Or: AZURE_COMMUNICATION_CONNECTION_STRING="endpoint=https://..." node check-sender.js
 *
 * Connection string must be: endpoint=https://cloud-surge.uk.communication.azure.com/;accesskey=...
 */

import 'dotenv/config';
import { EmailClient } from '@azure/communication-email';

const CANDIDATES = [
  'info@cloudsurge.uk',
  'DoNotReply@cloudsurge.uk',
  'Donotreply@cloudsurge.uk',
];

const RECIPIENT = 'info@cloudsurge.uk';

function normalizeConnectionString(s) {
  if (!s || typeof s !== 'string') return s;
  s = s.trim();
  if (s.startsWith('http') && !s.startsWith('endpoint=')) {
    return `endpoint=${s}`;
  }
  return s;
}

async function trySender(client, sender) {
  try {
    const poller = await client.beginSend({
      senderAddress: sender,
      recipients: { to: [{ address: RECIPIENT }] },
      content: {
        subject: '[Cloud Surge] Sender check – ignore',
        plainText: 'This is a test to verify which sender is linked. You can ignore this.',
        html: '<p>This is a test to verify which sender is linked. You can ignore this.</p>',
      },
    });
    await poller.pollUntilDone();
    const result = poller.getResult();
    if (result && result.status === 'Succeeded') {
      return { ok: true, message: 'Sent successfully' };
    }
    return { ok: false, message: result?.error?.message || result?.status || 'Unknown' };
  } catch (err) {
    const msg =
      err?.details?.error?.message ||
      err?.message ||
      (err?.code && err?.statusCode ? `${err.code} (${err.statusCode})` : null) ||
      String(err);
    return { ok: false, message: msg };
  }
}

async function main() {
  let connectionString = process.env.AZURE_COMMUNICATION_CONNECTION_STRING;
  connectionString = normalizeConnectionString(connectionString);

  if (!connectionString) {
    console.error('Missing AZURE_COMMUNICATION_CONNECTION_STRING');
    console.error('Set it in server/.env or run:');
    console.error('  AZURE_COMMUNICATION_CONNECTION_STRING="endpoint=https://cloud-surge.uk.communication.azure.com/;accesskey=YOUR_KEY" node check-sender.js');
    process.exit(1);
  }

  console.log('Using endpoint:',
    connectionString.replace(/accesskey=[^;]+/, 'accesskey=***'));
  console.log('Recipient (test):', RECIPIENT);
  console.log('');
  console.log('Testing senders:');
  console.log('---');

  let client;
  try {
    client = new EmailClient(connectionString);
  } catch (e) {
    console.error('Failed to create EmailClient:', e.message);
    process.exit(1);
  }

  for (const sender of CANDIDATES) {
    process.stdout.write(`  ${sender} ... `);
    const result = await trySender(client, sender);
    if (result.ok) {
      console.log('OK – use this one (AZURE_SENDER_EMAIL=' + sender + ')');
    } else {
      console.log('FAIL –', result.message);
    }
  }

  console.log('---');
  console.log('Done. Set AZURE_SENDER_EMAIL in server/.env to one that shows OK.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
