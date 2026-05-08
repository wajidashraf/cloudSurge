import React, { useState, useEffect, useRef } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import redIcon from '@/assets/redicon.svg';
import ceoFawriiImg from '@/assets/man.png';
import triageLogo from '@/assets/triage.svg';
import zapticaLogo from '@/assets/zaptica.webp';
import { Link } from '@tanstack/react-router';

const FONT = "'Bahnschrift', 'DIN Alternate', sans-serif";

// ── StatCounter ──────────────────────────────────────────────────────────────
interface StatCounterProps {
  target: number;
  label: string;
  duration?: number;
}

const StatCounter: React.FC<StatCounterProps> = ({ target, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (timerRef.current !== null) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (timerRef.current !== null) clearInterval(timerRef.current);
    if (isVisible && target > 0) {
      let current = 0;
      const step = Math.max(1, Math.floor(duration / target));
      timerRef.current = window.setInterval(() => {
        current += 1;
        setCount(current);
        if (current >= target && timerRef.current !== null) clearInterval(timerRef.current);
      }, step);
    } else {
      setCount(0);
    }
    return () => {
      if (timerRef.current !== null) clearInterval(timerRef.current);
    };
  }, [isVisible, target, duration]);

  return (
    <div ref={ref} style={{ textAlign: 'left', flex: 1 }}>
      <p style={{
        fontFamily: FONT,
        fontSize: 'clamp(28px, 2.8vw, 40px)',
        fontWeight: 400,
        color: '#EF4123',
        textDecoration: 'underline',
        textUnderlineOffset: 4,
        margin: 0,
        lineHeight: 1,
        textAlign: 'left',
      }}>
        {count}%
      </p>
      <p style={{
        fontFamily: FONT,
        fontWeight: 700,
        fontSize: 'clamp(11px, 1vw, 14px)',
        color: '#EF4123',
        marginTop: 8,
        lineHeight: 1.3,
        margin: '8px 0 0',
      }}>
        {label}
      </p>
    </div>
  );
};

// ── Stars row ────────────────────────────────────────────────────────────────
const Stars: React.FC<{ color?: string; size?: number }> = ({
  color = '#EF4123',
  size = 18,
}) => (
  <div style={{ display: 'flex', gap: 4 }}>
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} style={{ width: size, height: size, color }} />
    ))}
  </div>
);

const ArrowIcon: React.FC = () => (
  <svg
    width="20"
    height="25"
    viewBox="0 0 20 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
  >
    <g clipPath="url(#wwd-arrow-clip)">
      <path
        d="M13.6218 11.505L12.4029 12.7562L16.2259 16.705H2.06583V0H0V18.8256H15.933L11.738 23.075L12.957 24.3344L19.5581 17.6394L13.6218 11.505Z"
        fill="#EF4123"
      />
    </g>
    <defs>
      <clipPath id="wwd-arrow-clip">
        <rect width="19.5581" height="24.3344" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// ── Card footer ──────────────────────────────────────────────────────────────
const CardFooter: React.FC<{
  author: string;
  role: string;
  barColor: string;
  textColor: string;
  href?: string;
}> = ({ author, role, barColor, textColor, href = '/success-stories' }) => (
  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 20px 14px' }}>
    <div style={{ height: 2, background: barColor, marginBottom: 10 }} />
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
      <div>
        <p style={{ fontFamily: FONT, textAlign: 'left',fontWeight: 400, fontSize: 10, color: textColor, margin: 0, lineHeight: 1.3 }}>
          {author},
        </p>
        <p style={{ fontFamily: FONT, textAlign: 'left', fontWeight: 400, fontSize: 10, color: textColor, margin: 0, lineHeight: 1.3 }}>
          {role}
        </p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontFamily: FONT, fontSize: 12, color: textColor, textDecoration: 'none', opacity: 0.85 }}
      >
        more info...
      </a>
    </div>
  </div>
);

// ── Individual cards ─────────────────────────────────────────────────────────

const IntroCard: React.FC<{ mobile?: boolean }> = ({ mobile }) => (
  <div style={{
    border: '1.5px solid #C8C8C8',
    padding: '28px 28px 28px',
    height: mobile ? 400 : '100%',
    minHeight: mobile ? undefined : 421,
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    boxSizing: 'border-box',
    background: '#fff',
  }}>
    <div>
      <img src={redIcon} alt="Cloud Surge" style={{ width: 52, height: 52, objectFit: 'contain' }} />
      <h3 style={{
        fontFamily: FONT,
        fontWeight: 700,
        fontSize: 'clamp(36px, 4vw, 52px)',
        lineHeight: '100%',
        letterSpacing: '-0.04em',
        color: '#5D5D5D',
        margin: '28px 0 0',
        textAlign: 'left',
      }}>
        Success<br />Stories
      </h3>
    </div>
    <p style={{
      fontFamily: FONT,
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.4,
      letterSpacing: '-0.02em',
      color: '#818181',
      marginTop: '20%',
      textAlign: 'left',
    }}>
      Our work speaks for itself, but our clients say it even better.
    </p>
  </div>
);

const PhotoCard: React.FC<{ mobile?: boolean }> = ({ mobile }) => (
  <div style={{
    position: 'relative',
    height: mobile ? 400 : '100%',
    minHeight: mobile ? undefined : 421,
    overflow: 'hidden',
    background: '#222',
  }}>
    <img
      src={ceoFawriiImg}
      alt="Tanvir Walele, CEO at Fawrii"
      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
    />
    {/* Full gradient overlay */}
    <div style={{
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(10,10,144,0.85) 60%, rgba(115,0,191,0.9) 80%, rgba(236,63,36,0.95) 100%)',
      pointerEvents: 'none',
    }} />
    {/* Quote text */}
    <div style={{ position: 'absolute', bottom: 58, left: 16, right: 16 }}>
      <p style={{
        fontFamily: FONT,
        fontWeight: 500,
        fontSize: 'clamp(12px, 1.4vw, 15px)',
        lineHeight: 1.45,
        color: '#fff',
        margin: '0 0 10%',
        padding: '12px',
        textAlign: 'left',
      }}>
        "Cloud Surge is really a values-based business and they really want you to succeed and that's what makes them stand out."
      </p>
    </div>
    {/* Footer */}
    <div style={{ position: 'absolute', bottom: 0, left: 8, right: 8, padding: '0 12px 12px' }}>
      <div style={{ height: 2, background: '#fff', marginBottom: 8 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: 10, color: '#fff', margin: 0 }}>Tanvir Walele,</p>
          <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: 10, color: '#fff', margin: 0 }}>CEO at Fawrii</p>
        </div>
        <a
          href="/fawrii"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: FONT, fontSize: 10, color: '#fff', textDecoration: 'none' }}
        >
          more info...
        </a>
      </div>
    </div>
  </div>
);

const PinkCard: React.FC<{ mobile?: boolean }> = ({ mobile }) => (
  <div style={{
    background: '#FFCDCC',
    padding: '22px 22px 0',
    height: mobile ? 400 : '100%',
    minHeight: mobile ? undefined : 421,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
  }}>
    <Stars />
    <div style={{ marginTop: '30%', marginLeft: 4 }}>
      <img src={triageLogo} alt="GP Triage" style={{ height: 60, width: 'auto', maxWidth: '80%' }} />
    </div>
    <p style={{
    fontFamily: FONT,
        fontWeight: 400,
        fontSize: 'clamp(12px, 1.4vw, 16px)',
        lineHeight: 1.45,
        color: '#EF4123',
        margin: '15% 0',
        padding: '10px',
        paddingRight: '18%',
        textAlign: 'left',
    }}>
      "They weren't just contractors; they became a true extension of our team when we needed it most"
    </p>
    <CardFooter
      author="Hannan Chaudery,"
      role="CTO at GP Triage"
      barColor="#EF4123"
      textColor="#EF4123"
    />
  </div>
);

const GreyCard: React.FC<{ mobile?: boolean }> = ({ mobile }) => (
  <div style={{
    background: '#EBEBEB',
    padding: '22px 22px 0',
    height: mobile ? 400 : '100%',
    minHeight: mobile ? undefined : 421,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
  }}>
    <Stars />
    <div style={{ marginTop: '13%', marginLeft: 4 }}>
      <img
        src={zapticaLogo}
        alt="Zaptica"
        style={{ height: 100, width: 'auto', maxWidth: '80%' }}
      />
    </div>
    {/* Stat counters */}
    <div style={{
      position: 'absolute',
      bottom: '25%',
      left: 22,
      right: 22,
      display: 'flex',
      flexDirection: 'row',
      gap: 24,
      alignItems: 'flex-start',
    }}>
      <StatCounter target={150} label="Increased project capacity" />
      <StatCounter target={50} label="Reduced project delivery cost" />
    </div>
    <CardFooter
      author="Charlie,"
      role="Co-founder at Zaptica"
      barColor="#EF4123"
      textColor="#EF4123"
      href="/zaptica"
    />
  </div>
);

// ── Main component ───────────────────────────────────────────────────────────
const SuccessStories: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const INITIAL_MARGINS = [0, 280, 560, 840];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { offsetTop, offsetHeight } = sectionRef.current;
      const start = offsetTop - window.innerHeight * 0.96;
      const end = offsetTop + offsetHeight * 0.5;
      const p = Math.min(Math.max((window.scrollY - start) / (end - start), 0), 1);
      setScrollProgress(p);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const CARDS = [
    { component: IntroCard },
    { component: PhotoCard },
    { component: PinkCard },
    { component: GreyCard },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        width: '100%',
        background: '#fff',
        overflow: 'hidden',
        fontFamily: FONT,
        marginBottom: '150px',
      }}
    >
      <style>{`
        .ss-inner {
          max-width: 1380px;
          margin: 0 auto;
          padding: 80px 56px 60px;
          box-sizing: border-box;
        }
        .ss-desktop {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          align-items: end;
        }
        .ss-card-wrap {
          transition: margin-top 0s;
        }
        .ss-explore-row {
          display: flex;
          justify-content: flex-end;
          margin-top: 32px;
        }
        .ss-mobile { display: none; }

        @media (max-width: 900px) {
          .ss-desktop { display: none; }
          .ss-mobile  { display: block; }
          .ss-inner   { padding: 40px 16px 32px; }
          .ss-explore-row { padding: 0 16px; justify-content: flex-end; margin-top: 20px; }
        }
        @media (max-width: 480px) {
          .ss-inner { padding: 28px 16px 20px; }
        }
      `}</style>

      <div className="ss-inner">

        {/* ── Desktop grid ── */}
        <div className="ss-desktop">
          {CARDS.map(({ component: Card }, i) => {
            const mt = Math.max(INITIAL_MARGINS[i] * (0.7 - scrollProgress), 0);
            return (
              <div key={i} className="ss-card-wrap" style={{ marginTop: mt, height: 421 }}>
                <Card mobile={false} />
              </div>
            );
          })}
        </div>

        {/* ── Mobile column ── */}
        <div className="ss-mobile">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {CARDS.map(({ component: Card }, i) => (
              <div key={i}>
                <Card mobile={true} />
              </div>
            ))}
          </div>
        </div>

        {/* Explore More link */}
        <div className="ss-explore-row">
          <Link
            to="/success-stories"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: FONT,
              fontWeight: 400,
              fontSize: 22,
              color: '#5D5D5D',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              flexShrink: 0,
            }}>
              <ArrowIcon/>
            </span>
            Explore More
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;