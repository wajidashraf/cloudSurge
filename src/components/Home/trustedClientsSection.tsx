import React, { useEffect, useRef, useState } from "react";

const FONT = "'Bahnschrift', 'DIN Alternate', sans-serif";

const STATS = [
  { value: 25, suffix: "%", label: "more project capacity" },
  { value: 50, suffix: "%", label: "faster time to productivity" },
  { value: 98, suffix: "%", label: "client satisfaction" },
];

function useCounter(target: number, duration = 8000, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }
    let start: number | null = null;
    let rafId: number;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [active, target, duration]);

  return count;
}

const StatItem: React.FC<{
  value: number;
  suffix: string;
  label: string;
  index: number;
  active: boolean;
  delay: number;
}> = ({ value, suffix, label, index, active, delay }) => {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!active) {
      setStarted(false);
      return;
    }
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [active, delay]);

  const count = useCounter(value, 1800, started);

  return (
    // Class handles border direction switch — top on mobile, left on sm+
    <div className={`stat-item ${index > 0 ? "stat-divided" : ""} flex flex-col gap-2 flex-1 min-w-0`}>
      <span className="stat-number">
        {count}{suffix}
      </span>
      <span className="stat-label">
        {label}
      </span>
    </div>
  );
};

const TrustedClientsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="trusted-section relative z-20 w-full flex justify-center px-6 sm:px-6">
      <style>{`

        .trusted-section {
          margin-top: -18vh;
        }
        @media (min-width: 768px) {
          .trusted-section {
            margin-top: -20vh;
          }
        }
        @media (min-width: 1024px) {
          .trusted-section {
            margin-top: -18vh;
          }
        }

        /* ── Card ── */
        .trusted-card {
          width: 100%;
          max-width: 1139px;
          background: #ffffff;
          box-shadow: 0px 4px 16px 3px rgba(0, 0, 0, 0.1);
          padding: 28px 20px 36px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        @media (min-width: 640px) {
          .trusted-card {
            padding: 36px 32px 44px;
            gap: 28px;
          }
        }
        @media (min-width: 1024px) {
          .trusted-card {
            padding: 45px 48px 52px;
            gap: 32px;
          }
        }

        /* ── Heading ── */
        .trusted-heading {
          font-family: ${FONT};
          font-weight: 600;
          font-size: clamp(13px, 3.5vw, 28px);
          line-height: 140%;
          letter-spacing: -0.01em;
          color: #EC3F24;
        }
        @media (min-width: 640px) {
          .trusted-heading {
            font-size: clamp(15px, 2.2vw, 28px);
          }
        }

        /* ── Stats container ── */
        .trusted-stats {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        @media (min-width: 640px) {
          .trusted-stats {
            flex-direction: row;
            align-items: stretch;
          }
        }

        /* ── Individual stat ── */
        .stat-item {
          padding: 16px 0;
        }
        @media (min-width: 640px) {
          .stat-item {
            padding: 0 0 0 32px;
          }
        }

        .stat-divided {
          border-top: 1px solid rgba(12, 8, 4, 0.15);
        }
        @media (min-width: 640px) {
          .stat-divided {
            border-top: none;
            border-left: 1px solid rgba(12, 8, 4, 0.15);
          }
        }

        /* ── Stat number ── */
        .stat-number {
          font-family: ${FONT};
          font-weight: 600;
          font-size: clamp(32px, 8vw, 60px);
          line-height: 130%;
          color: #EC3F24;
          display: block;
        }
        @media (min-width: 640px) {
          .stat-number {
            font-size: clamp(36px, 5vw, 60px);
          }
        }

        /* ── Stat label ── */
        .stat-label {
          font-family: ${FONT};
          font-weight: 350;
          font-size: clamp(13px, 3vw, 24px);
          line-height: 140%;
          letter-spacing: -0.01em;
          color: #EC3F24;
          display: block;
        }
        @media (min-width: 640px) {
          .stat-label {
            font-size: clamp(14px, 1.6vw, 24px);
          }
        }
      `}</style>

      <div ref={ref} className="trusted-card">

        <p className="trusted-heading">
          Trusted by Fawrii, GP Triage, Genera, Vallour and 100+ organisations
          across the UK.
        </p>

        <div className="trusted-stats">
          {STATS.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={i}
              active={inView}
              delay={i * 200}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustedClientsSection;