import { useEffect, useRef, useState } from "react";
import professionalMan from "@/assets/Professional man working on a laptop in a bright office environment.jpg";
import meeting from "@/assets/wow.jpg";
import businessWomen from "@/assets/Business women.jpg";



const cards = [
  {
    image: professionalMan,
    alt: "Professional man working on a laptop in a bright office environment",
    heading: "Fewer incidents, less disruption.",
    text:
      "We identify issues early, apply critical patches, and keep your platform compliant before problems become outages. The cost of preventing a platform incident is a fraction of the cost of resolving one.",
  },
  {
    image: meeting,
    alt: "Medical professionals collaborating in a modern clinical setting",
    heading: "A platform that keeps pace with your business.",
    text:
      "Regular performance reviews and incremental improvements keep your system fast and reliable as your usage grows. You do not need to wait for a major project to make improvements.",
  },
  {
    image: businessWomen,
    alt: "Business woman in a professional environment",
    heading: "Lower total cost over time.",
    text:
      "Emergency fixes, system instability, and outdated dependencies cost significantly more than structured annual maintenance. Surge Care is the planned cost that prevents the unplanned one.",
  },
];

const SurgeCareMatters = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const headingRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const [headingMinHeight, setHeadingMinHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const computeMaxHeight = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      if (isMobile) {
        setHeadingMinHeight(undefined);
        return;
      }
      headingRefs.current.forEach((el) => {
        if (el) el.style.minHeight = "0px";
      });
      const max = headingRefs.current.reduce((acc, el) => {
        if (!el) return acc;
        return Math.max(acc, el.getBoundingClientRect().height);
      }, 0);
      setHeadingMinHeight(max);
    };
    computeMaxHeight();
    window.addEventListener("resize", computeMaxHeight);
    return () => window.removeEventListener("resize", computeMaxHeight);
  }, []);

  return (
    <>
      <style>{`

        .scm-section {
          background: #F9F9F9;
          width: 100%;
          padding: 110px 64px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 88px;
        }

        .scm-content-wrap {
          width: 100%;
          max-width: 1280px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 88px;
        }

        .scm-heading {
          font-weight: 600;
          font-size: 60px;
          line-height: 1.2;
          letter-spacing: -0.01em;
          color: #EC3F24;
          text-align: center;
          margin: 0;
          width: 100%;
          max-width: 768px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .scm-heading.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .scm-cards-row {
          display: flex;
          flex-direction: row;
          gap: 48px;
          width: 100%;
          align-items: flex-start;
        }

        .scm-card {
          flex: 1 1 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }

        .scm-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .scm-card:nth-child(1) { transition-delay: 0.1s; }
        .scm-card:nth-child(2) { transition-delay: 0.25s; }
        .scm-card:nth-child(3) { transition-delay: 0.4s; }

        .scm-card-img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          display: block;
          filter: brightness(0.95);
        }

        .scm-card-body {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: flex-start;
        }

        .scm-card-heading {
          font-weight: 500;
          font-size: 28px;
          line-height: 1.3;
          letter-spacing: -0.01em;
          color: #EC3F24;
          margin: 0;
          width: 100%;
        }

        .scm-card-text {
          font-weight: 350;
          font-size: 18px;
          line-height: 1.5;
          color: #EC3F24;
          margin: 0;
          width: 100%;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .scm-section {
            padding: 80px 40px;
            gap: 64px;
          }
          .scm-content-wrap {
            gap: 64px;
          }
          .scm-heading {
            font-size: 48px;
          }
          .scm-cards-row {
            gap: 32px;
          }
          .scm-card-heading {
            font-size: 26px;
          }
          .scm-card-text {
            font-size: 16px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .scm-section {
            padding: 64px 24px;
            gap: 48px;
          }
          .scm-content-wrap {
            gap: 48px;
          }
          .scm-heading {
            font-size: 36px;
            max-width: 100%;
          }
          .scm-cards-row {
            flex-direction: column;
            gap: 48px;
          }
          .scm-card {
            width: 100%;
            flex: none;
          }
          .scm-card-img {
            height: 220px;
          }
          .scm-card-heading {
            font-size: 28px;
          }
          .scm-card-text {
            font-size: 16px;
          }
        }

        /* Small mobile */
        @media (max-width: 480px) {
          .scm-section {
            padding: 48px 20px;
            gap: 40px;
          }
          .scm-heading {
            font-size: 30px;
            text-align: left;
          }
          .scm-card-img {
            height: 200px;
          }
          .scm-card-heading {
            font-size: 24px;
          }
          .scm-card-text {
            font-size: 15px;
          }
        }
      `}</style>

      <section className="scm-section" ref={sectionRef} aria-labelledby="scm-title">
        <div className="scm-content-wrap">
          <h2
            id="scm-title"
            className={`scm-heading${visible ? " visible" : ""}`}
          >
            Why Surge Care Matters
          </h2>

          <div className="scm-cards-row">
            {cards.map((card, i) => (
              <article
                key={i}
                className={`scm-card${visible ? " visible" : ""}`}
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  className="scm-card-img"
                />
                <div className="scm-card-body">
                  <h3
                    className="scm-card-heading"
                    ref={(el) => {
                      headingRefs.current[i] = el;
                    }}
                    style={headingMinHeight ? { minHeight: headingMinHeight } : undefined}
                  >
                    {card.heading}
                  </h3>
                  <p className="scm-card-text">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SurgeCareMatters;