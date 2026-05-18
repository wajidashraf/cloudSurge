import React, { useEffect, useRef, useState } from "react";

const cards = [
  {
    number: "01",
    title: "Post-implementation",
    description:
      "You have recently completed an implementation and need a team that already knows your system.",
  },
  {
    number: "02",
    title: "Mission-critical platforms",
    description:
      "You operate a platform critical to your business operations that cannot afford downtime.",
  },
  {
    number: "03",
    title: "Proactive maintenance",
    description:
      "You want to reduce the cost and disruption of reactive fixes with a structured ongoing plan.",
  },
];

// ── Fix: generic so ref is typed correctly for any HTML element ──
const useInView = <T extends HTMLElement = HTMLElement>(threshold = 0.15) => {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
};

const WhoItIsFor = () => {
  // Now typed as HTMLElement — no more ref mismatch on <section>
  const [sectionRef, sectionVisible] = useInView<HTMLElement>(0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');

        .wif-section {
          width: 100%;
          background: #FFFFFF;
          padding: 80px 24px 96px;
          box-sizing: border-box;
          overflow: hidden;
        }

        .wif-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ── Header ── */
        .wif-title {
          font-family: 'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif;
          font-size: clamp(40px, 6vw, 60px);
          font-weight: 600;
          line-height: 1.1;
          letter-spacing: -0.01em;
          text-align: center;
          color: #EC3F24;
          margin: 0 0 20px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s;
        }

        .wif-subtitle {
          font-family: 'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif;
          font-size: clamp(16px, 2.2vw, 22px);
          font-weight: 350;
          line-height: 1.5;
          text-align: center;
          color: #727272;
          max-width: 720px;
          margin: 0 0 64px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.55s ease 0.2s, transform 0.55s ease 0.2s;
        }

        /* ── Animated-in state ── */
        .wif-section.is-visible .wif-title,
        .wif-section.is-visible .wif-subtitle {
          opacity: 1;
          transform: translateY(0);
        }

        .wif-cards {
          display: grid;
          grid-template-columns: 1fr 1px 1fr 1px 1fr;
          width: 100%;
          max-width: 1000px;
          align-items: stretch;
        }

        .wif-divider {
          width: 1px;
          background: rgba(154, 153, 153, 0.5);
          align-self: stretch;
          min-height: 160px;
          opacity: 0;
          transition: opacity 0.4s ease 0.5s;
        }

        .wif-section.is-visible .wif-divider {
          opacity: 1;
        }

        .wif-card {
          position: relative;
          overflow: hidden;           
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 16px 16px 16px 24px;
          box-sizing: border-box;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
          .wif-card:hover{
            background: rgba(236,63,36,0.05);}

        .wif-section.is-visible .wif-card:nth-child(1) {
          opacity: 1; transform: translateY(0); transition-delay: 0.3s;
        }
        .wif-section.is-visible .wif-card:nth-child(3) {
          opacity: 1; transform: translateY(0); transition-delay: 0.42s;
        }
        .wif-section.is-visible .wif-card:nth-child(5) {
          opacity: 1; transform: translateY(0); transition-delay: 0.54s;
        }

        
        .wif-card-bar {
          position: absolute;
          top: -3px;
          left: 0;
          width: 100%;
          height: 4px;
          background: #E94325;
          transform-origin: right top;
          transform: rotate(-0.4deg);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .wif-card:hover .wif-card-bar {
          opacity: 1;
        }

        .wif-card-num {
          font-family: 'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif;
          font-size: 22px;
          font-weight: 400;
          line-height: 1.2;
          color: #F06A61;
        }

        .wif-card-content {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .wif-card-title {
          font-family: 'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif;
          font-size: clamp(17px, 1.7vw, 22px);
          font-weight: 500;
          line-height: 1.3;
          color: #3A3A3A;
        }

        .wif-card-desc {
          font-family: 'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif;
          font-size: clamp(14px, 1.3vw, 17px);
          font-weight: 300;
          line-height: 1.55;
          color: #6B6B6B;
        }

        /* ── Responsive: tablet ── */
        @media (max-width: 860px) {
          .wif-section {
            padding: 60px 20px 72px;
          }

          .wif-cards {
            grid-template-columns: 1fr;
            max-width: 500px;
            gap: 0;
          }

          .wif-divider {
            width: 100%;
            height: 1px;
            min-height: 0;
            align-self: auto;
            background: rgba(154, 153, 153, 0.45);
          }

          .wif-card {
            padding: 28px 8px 28px 8px;
          }

          .wif-subtitle {
            margin-bottom: 48px;
          }
        }

        /* ── Responsive: mobile ── */
        @media (max-width: 480px) {
          .wif-section {
            padding: 48px 18px 64px;
            
          }

          .wif-title {
            font-size: 36px;
            margin-bottom: 14px;
            text-align: left;
            width: 100%;
          }

          .wif-subtitle {
            font-size: 15px;
            margin-bottom: 40px;
            text-align: left;
          }

          .wif-card {
            gap: 16px;
            padding: 24px 4px;
          }

          .wif-card-num {
            font-size: 19px;
          }

          .wif-card-title {
            font-size: 18px;
          }

          .wif-card-desc {
            font-size: 14px;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`wif-section${sectionVisible ? " is-visible" : ""}`}
      >
        <div className="wif-inner">
          <h2 className="wif-title">Who it is for</h2>
          <p className="wif-subtitle">
            Surge Care is for organisations with a platform that needs to stay
            secure, stable, and performing throughout the year.
          </p>

          <div className="wif-cards">
            {cards.map((card, i) => (
              <React.Fragment key={card.number}>
                <div className="wif-card">
                  {/* Rotated hover bar — right 1px visible, left 3px visible */}
                  <div className="wif-card-bar" aria-hidden="true" />

                  <span className="wif-card-num">{card.number}</span>
                  <div className="wif-card-content">
                    <p className="wif-card-title">{card.title}</p>
                    <p className="wif-card-desc">{card.description}</p>
                  </div>
                </div>
                {i < cards.length - 1 && <div className="wif-divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoItIsFor;