import { useRef, useState } from 'react';
import type { FC } from 'react';
import logo from '@/assets/CS_red.svg';
import play from '@/assets/play1.png';
import { Link } from '@tanstack/react-router';

const FONT = "'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif";

const NAV_LINKS = [
  { label: 'ABOUT', to: '/about' },
  { label: 'FUSION PODS', to: '/fusion-pods' },
  { label: 'SURGE CARE', to: '/surge-care' },
  { label: 'SUCCESS STORIES', to: '/success-stories' },
  { label: 'CAREERS', to: '/careers' },
  { label: 'CONTACT US', to: '/contact' },
];

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cloudsurgeuk/',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="#EC3F24" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" stroke="#EC3F24" strokeWidth="2"/>
        <circle cx="17.5" cy="6.5" r="1.5" fill="#EC3F24"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/cloud-surge',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#EC3F24" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.29h4.56V23H.22zM8.35 8.29h4.37v2.01h.06c.61-1.16 2.11-2.38 4.34-2.38 4.64 0 5.5 3.05 5.5 7.01V23h-4.75v-6.53c0-1.56-.03-3.57-2.17-3.57-2.17 0-2.5 1.69-2.5 3.44V23H8.35z"/>
      </svg>
    ),
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/@cloudsurge',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#EC3F24" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
      </svg>
    ),
  },
];

export const FooterSection: FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <footer
      style={{
        width: '100%',
        background: '#D9D9D9',
        fontFamily: FONT,
        boxSizing: 'border-box',
      }}
    >
      <style>{`
        .footer-inner {
          // max-width: 1280px;
          margin: 0 auto;
          padding: 60px 64px 0;
          box-sizing: border-box;
        }

        /* ── Top content row ── */
        .footer-content {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 80px;
        }

        /* ── Left: logo + tagline + newsletter ── */
        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 54px;
          width: 500px;
          flex-shrink: 0;
        }

        .footer-logo-block {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .footer-logo {
          height: 84px;
          width: auto;
          object-fit: contain;
          object-position: left;
        }

        .footer-tagline {
          font-family: ${FONT};
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          color: #5D5D5D;
          margin: 0;
        }

        /* Newsletter */
        .footer-newsletter {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-newsletter-heading {
          font-family: ${FONT};
          font-weight: 600;
          font-size: 32px;
          line-height: 150%;
          color: #5D5D5D;
          margin: 0;
        }

        .footer-form {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 468px;
          height: 40px;
          border-bottom: 1.5px solid #EF4123;
          position: relative;
        }

        .footer-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-family: ${FONT};
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          color: #5D5D5D;
          padding: 8px 0;
        }
        .footer-input::placeholder {
          color: rgba(12, 8, 4, 0.6);
        }

        .footer-submit {
          width: 32px;
          height: 32px;
          // background: #EF4123;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .footer-submit:hover { background: #C0311A; }

        /* ── Right: nav links + contact + social ── */
        .footer-right {
          flex: 1;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: flex-start;
          gap: 40px;
        }

        /* Nav links column */
        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 0;
          width: 194px;
        }

        .footer-nav-link {
          display: flex;
          align-items: center;
          padding: 8px 0;
          font-family: ${FONT};
          font-weight: 600;
          font-size: 16px;
          line-height: 150%;
          color: #EC3F24;
          text-decoration: none;
          transition: opacity 0.2s;
          border-bottom: none;
          position: relative;
        }
        .footer-nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #C0311A;
          opacity: 0.5;
          transition: width 0.3s ease;
        }
        .footer-nav-link:hover::after { width: 100%; }

        /* Contact + social column */
        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 0;
          width: 178px;
        }

        .footer-contact-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;
          padding: 8px 0;
          text-decoration: none;
          color: #EC3F24;
          font-family: ${FONT};
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          transition: opacity 0.2s;
        }
        .footer-contact-row:hover { opacity: 0.75; }

        /* ── Bottom credits bar ── */
        .footer-credits {
          margin-top: 56px;
          border-top: 1px solid rgba(12, 8, 4, 0.15);
          padding: 16px 0 32px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .footer-copyright {
          font-family: ${FONT};
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          color: #EC3F24;
          margin: 0;
        }

        .footer-legal-links {
          display: flex;
          flex-direction: row;
          gap: 24px;
          flex-wrap: wrap;
        }

        .footer-legal-link {
          font-family: ${FONT};
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          color: #EC3F24;
          text-decoration: underline;
          transition: opacity 0.2s;
        }
        .footer-legal-link:hover { opacity: 0.75; }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .footer-inner { padding: 48px 40px 0; }
          .footer-content { gap: 48px; }
          .footer-left { width: 420px; }
          .footer-form { width: 100%; }
        }

        @media (max-width: 860px) {
          .footer-inner { padding: 40px 24px 0; }
          .footer-content {
            flex-direction: column;
            gap: 40px;
          }
          .footer-left { width: 100%; }
          .footer-form { width: 100%; max-width: 468px; }
          .footer-right {
            width: 100%;
            justify-content: flex-start;
            gap: 32px;
          }
        }

        @media (max-width: 560px) {
          .footer-inner { padding: 32px 20px 0; }
          // .footer-right {
          //   flex-direction: column;
          //   gap: 8px;
          // }
          .footer-nav { width: 100%; }
          .footer-contact { width: 100%; }
          .footer-newsletter-heading { font-size: 24px; }
          .footer-logo { height: 56px; }
          .footer-credits {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            padding: 16px 0 24px;
          }
          .footer-legal-links { gap: 16px; }
        }
      `}</style>

      <div className="footer-inner">

        {/* ── Top content ── */}
        <div className="footer-content">

          {/* Left column */}
          <div className="footer-left">
            <div className="footer-logo-block">
              <img src={logo} alt="Cloud Surge" className="footer-logo" />
              <p className="footer-tagline text-left">
                Cloud Surge Solutions Ltd trading as Cloud Surge is a company registered
                in England and Wales: company number 14421129.
              </p>
            </div>

            <div className="footer-newsletter">
              <p className="footer-newsletter-heading text-left">Stay Connected</p>
              {submitted ? (
                <p style={{ fontFamily: FONT, fontSize: 16, color: '#EF4123', margin: 0 }}>
                  Thanks for subscribing!
                </p>
              ) : (
                <form className="footer-form" onSubmit={handleSubmit}>
                  <input
                    className="footer-input"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email address"
                  />
                  <button className="footer-submit" type="submit" aria-label="Subscribe">
                    {/* <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                      <path d="M2 1L10 7L2 13" stroke="#D9D9D9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg> */}
                    <img src={play} alt="" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right columns */}
          <div className="footer-right">

            {/* Nav links */}
            <nav className="footer-nav" aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <Link key={link.to} to={link.to} className="footer-nav-link">
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Contact + social */}
            <div className="footer-contact">
              <a href="tel:01218161121" className="footer-contact-row">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="#EC3F24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                0121 816 1121
              </a>

              <a href="mailto:info@cloudsurge.uk" className="footer-contact-row">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#EC3F24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="#EC3F24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                info@cloudsurge.uk
              </a>

              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-row"
                  aria-label={s.label}
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>

          </div>
        </div>

        {/* ── Credits bar ── */}
        <div className="footer-credits">
          <p className="footer-copyright">© All rights reserved.</p>
          <div className="footer-legal-links">
            <Link to="/privacy-notice" className="footer-legal-link">Privacy Policy</Link>
            <Link to="/terms-of-service" className="footer-legal-link">Terms of Service</Link>
            <Link to="/" className="footer-legal-link">Cookies Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;