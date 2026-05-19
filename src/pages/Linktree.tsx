import logoWhite from "@/assets/logo-white.png";

const links = [
  { label: "YouTube", href: "https://www.youtube.com/@cloudsurge" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/cloud-surge" },
  { label: "Instagram", href: "https://www.instagram.com/cloudsurgeuk/" },
  { label: "Visit Our Website", href: "https://www.cloudsurge.uk" },
  { label: "Book a Consultation Call", href:"https://bookings.cloud.microsoft/book/FreeScaleUp@cloudsurge.uk" },
  { label: "Contact Us", href: "/contact" },
];

export const Linktree: React.FC = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Logo */}
        <div style={styles.logoWrapper}>
          <img
            src={logoWhite}
            alt="Cloud Surge Logo"
            style={styles.logo}
          />
        </div>

        {/* Heading */}
        <h1 style={styles.heading}>Cloud Surge</h1>

        {/* Subtitle */}
        <p style={styles.subtitle}>
          Cloud Surge provides pre-formed teams of IT professionals that
          integrate with your existing setup in 48 hours.
        </p>

        {/* Link Buttons */}
        <div style={styles.linksContainer}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={styles.linkButton}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "scale(0.98)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "scale(1)";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={styles.divider} />

        {/* Footer Links */}
        <div style={styles.footerLinks}>
          {[
            { label: "Privacy Policy", href: "/privacy-notice" },
            { label: "Terms of Service", href: "/terms-of-service" },
            { label: "Cookies Settings", href: "/privacy-notice#cookies" },
          ].map((item) => (
            <a key={item.label} href={item.href} style={styles.footerLink}>
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* Responsive: desktop button width */
        @media (min-width: 640px) {
          .link-btn {
            width: 384px !important;
          }
        }
      `}</style>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#EC3F24",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 16px",
    fontFamily: "'Bahnschrift', 'Franklin Gothic Medium', sans-serif",
  },

  container: {
    width: "100%",
    maxWidth: "1280px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 0,
  },

  logoWrapper: {
    marginBottom: "16px",
  },

  logo: {
    // Desktop: ~137x184px, Mobile: ~96x129px
    width: "clamp(72px, 10vw, 137px)",
    height: "auto",
    objectFit: "contain",
  },

  heading: {
    fontFamily: "'Bahnschrift', 'Franklin Gothic Medium', sans-serif",
    fontWeight: 700,
    // Desktop: 80px, Mobile: 40px
    fontSize: "clamp(40px, 6vw, 80px)",
    lineHeight: 1.2,
    textAlign: "center",
    color: "#FFFFFF",
    marginBottom: "8px",
  },

  subtitle: {
    fontFamily: "'Bahnschrift', 'Franklin Gothic Medium', sans-serif",
    fontWeight: 300,
    // Desktop: 20px, Mobile: 12px
    fontSize: "clamp(13px, 1.5vw, 20px)",
    lineHeight: "1.4",
    textAlign: "center",
    color: "#FFFFFF",
    // Desktop max: 558px, Mobile: 241px
    maxWidth: "clamp(241px, 40vw, 558px)",
    marginBottom: "32px",
  },

  linksContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    width: "100%",
    maxWidth: "384px",
    margin: "65px 0px 80px",
  },

  linkButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 16px",
    width: "100%",
    maxWidth: "384px",
    minWidth: "230px",
    height: "46px",
    backgroundColor: "#FFFFFF",
    color: "#EC3F24",
    fontFamily: "'Bahnschrift', 'Franklin Gothic Medium', sans-serif",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "22px",
    textDecoration: "none",
    textAlign: "center",
    transition: "opacity 0.15s ease, transform 0.15s ease",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },

  divider: {
    width: "100%",
    maxWidth: "1200px",
    borderTop: "1px solid #FFFFFF",
    marginBottom: "24px",
  },

  footerLinks: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    justifyContent: "center",
    // Desktop: gap 40px, Mobile: gap ~17px
    gap: "clamp(16px, 3vw, 40px)",
  },

  footerLink: {
    fontWeight: 300,
    // Desktop: ~21.5px, Mobile: ~11.3px
    fontSize: "clamp(11px, 1.5vw, 16px)",
    lineHeight: "150%",
    // textDecoration: "underline",
    color: "#FFFFFF",
    whiteSpace: "nowrap",
  },
};