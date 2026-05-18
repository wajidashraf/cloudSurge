import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import controlPlatform from "@/assets/control-platform.png";
import security from "@/assets/security.png";
import fluentPeople from "@/assets/fluent_people.png";
import arrowGrowth from "@/assets/arrow-growth.png";
import filters from "@/assets/filters.png";

interface BenefitItem {
  icon: string;
  alt: string;
  label: string;
}

const benefits: BenefitItem[] = [
  {
    icon: controlPlatform,
    alt: "Platform control icon",
    label: "Predictable, reliable platform maintenance",
  },
  {
    icon: security,
    alt: "Security icon",
    label: "Strengthened security and compliance",
  },
  {
    icon: filters,
    alt: "Operations icon",
    label: "Fewer operational interruptions",
  },
  {
    icon: fluentPeople,
    alt: "Team icon",
    label: "A team that understands your technology deeply",
  },
  {
    icon: arrowGrowth,
    alt: "Growth icon",
    label: "A resilient foundation for future growth",
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
  }),
};

const WhyOrganisationsChoose: React.FC = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const listInView = useInView(listRef, { once: true, margin: "-80px" });

  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <>
      <style>{`
        .woc-section {
          width: 100%;
          background: linear-gradient(
              0deg,
              rgba(255, 205, 204, 0.4),
              rgba(255, 205, 204, 0.4)
            ),
            #ffffff;
          padding: 112px 64px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 64px;
        }

        .woc-inner {
          width: 100%;
          max-width: 1280px;
          display: flex;
          flex-direction: column;
          gap: 64px;
        }

        .woc-heading {
          font-family: 'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif;
          font-weight: 600;
          font-size: 60px;
          line-height: 1.1;
          letter-spacing: 2px;
          color: #EC3F24;
          margin: 0;
          text-align: center;
        }

        .woc-list {
          width: 100%;
          max-width: 800px;
          align-self: center;
          display: flex;
          flex-direction: column;
          border-top: 2px solid #FFCDCC;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .woc-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 50px;
          padding: 18px 0 18px 15%;
          border-bottom: 2px solid #FFCDCC;
        }

        .woc-icon-wrap {
          flex: 0 0 50px;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .woc-icon {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }

        .woc-label {
          font-family: 'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif;
          font-size: 24px;
          line-height: 1.3;
          letter-spacing: -0.01em;
          color: #EC3F24;
          margin: 0;
        }

        /* CTA */
        .cta-section {
          width: 100%;
          background: #FFFFFF;
          padding: 84px 64px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 369px;
        }

        .cta-inner {
          width: 100%;
          max-width: 1280px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 80px;
        }

        .cta-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          width: 100%;
          max-width: 768px;
        }

        .cta-text-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          width: 100%;
        }

        .cta-heading {
          font-family: 'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif;
          font-weight: 700;
          font-size: 45px;
          line-height: 54px;
          text-align: center;
          color: #5D5D5D;
          margin: 0;
          max-width: 570px;
        }

        .cta-description {
          font-family: 'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif;
          font-weight: 400;
          font-size: 20px;
          line-height: 1.5;
          text-align: center;
          color: #5D5D5D;
          margin: 0;
          width: 100%;
          max-width: 768px;
        }

        .cta-actions {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
        }

        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 6px 12px;
          width: 245px;
          height: 39px;
          border-radius: 6px;
          background: linear-gradient(
            20deg,
            #ec3f24 0%,
            #ec3f24 40%,
            #7300bf 65%,
            #0a0a90 100%
          );
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: opacity 0.2s ease, transform 0.15s ease;
          box-sizing: border-box;
        }

        .cta-btn-primary:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }

        .cta-btn-primary:active {
          transform: translateY(0);
          opacity: 1;
        }

        .cta-btn-primary-label {
          font-family: 'Bahnschrift', 'DIN Alternate', 'Arial Narrow', sans-serif;
          // font-weight: 600;
          font-size: 18px;
          line-height: 1.5;
          color: #FFFFFF;
          white-space: nowrap;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .woc-section {
            padding: 80px 40px;
            gap: 48px;
          }
          .woc-inner {
            gap: 48px;
          }
          .woc-heading {
            font-size: 46px;
          }
          .woc-label {
            font-size: 20px;
          }
          .woc-list {
            max-width: 100%;
          }
          .cta-section {
            padding: 72px 40px;
            min-height: auto;
          }
          .cta-inner {
            gap: 56px;
          }
          .cta-heading {
            font-size: 38px;
            line-height: 1.2;
          }
          .cta-description {
            font-size: 18px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .woc-section {
            padding: 64px 24px;
            gap: 40px;
          }
          .woc-inner {
            gap: 40px;
          }
          .woc-heading {
            font-size: 36px;
          }
          .woc-item {
            gap: 20px;
            padding: 18px 0 18px 8px;
          }
          .woc-icon-wrap {
            flex: 0 0 40px;
            width: 40px;
            height: 40px;
          }
          .woc-icon {
            width: 40px;
            height: 40px;
          }
          .woc-label {
            font-size: 18px;
          }
          .cta-section {
            padding: 64px 24px;
          }
          .cta-inner {
            gap: 40px;
          }
          .cta-content {
            gap: 24px;
          }
          .cta-heading {
            font-size: 32px;
            line-height: 1.2;
            max-width: 100%;
          }
          .cta-description {
            font-size: 17px;
          }
          .cta-btn-primary {
            width: 100%;
            max-width: 320px;
          }
        }

        /* Small mobile */
        @media (max-width: 480px) {
          .woc-section {
            padding: 48px 20px;
          }
          .woc-heading {
            font-size: 30px;
            text-align: left;
          }
          .woc-item {
            gap: 16px;
            padding: 16px 0 16px 4px;
          }
          .woc-icon-wrap {
            flex: 0 0 34px;
            width: 34px;
            height: 34px;
          }
          .woc-icon {
            width: 34px;
            height: 34px;
          }
          .woc-label {
            font-size: 16px;
          }
          .cta-section {
            padding: 48px 20px;
          }
          .cta-heading {
            font-size: 26px;
          }
          .cta-description {
            font-size: 16px;
          }
          .cta-btn-primary {
            width: 100%;
            max-width: 100%;
          }
          .cta-btn-primary-label {
            font-size: 16px;
          }
        }
      `}</style>

      <section className="woc-section" aria-labelledby="woc-heading">
        <div className="woc-inner">
          <motion.h2
            ref={headingRef}
            className="woc-heading"
            id="woc-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Why Organisations Choose Surge Care
          </motion.h2>

          <ul className="woc-list" ref={listRef} role="list">
            {benefits.map((item, i) => (
              <motion.li
                key={i}
                className="woc-item"
                role="listitem"
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate={listInView ? "visible" : "hidden"}
              >
                <div className="woc-icon-wrap" aria-hidden="true">
                  <img src={item.icon} alt={item.alt} className="woc-icon" />
                </div>
                <p className="woc-label">{item.label}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta-section" aria-labelledby="cta-heading">
        <div className="cta-inner">
          <motion.div
            ref={ctaRef}
            className="cta-content"
            initial={{ opacity: 0, y: 32 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="cta-text-group">
              <h2 className="cta-heading" id="cta-heading">
                Let us look at your platform.
              </h2>
              <p className="cta-description">
                Tell us about your current setup and what you need to maintain.
                We will come back with a view on what Surge Care would cover and
                what it would cost.
              </p>
            </div>

            <div className="cta-actions">
              <a
                href="/https://bookings.cloud.microsoft/book/FreeScaleUp@cloudsurge.uk/s/Abz0MDpi3kuyMsftsPEmMQ2?ismsaljsauthenabled=true"
                className="cta-btn-primary"
                aria-label="Book a platform review call"
              >
                <span className="cta-btn-primary-label">
                  Book a platform review call
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhyOrganisationsChoose;
