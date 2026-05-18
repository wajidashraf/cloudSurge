import planning from "@/assets/workflow_images/Planning.png";
import development from "@/assets/workflow_images/Development.png";
import qa from "@/assets/workflow_images/QA.png";
import deployment from "@/assets/workflow_images/Deployment.png";
import feedback from "@/assets/workflow_images/Feedback.png";
import csLogo from "@/assets/csLOGO.png";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { easeInOut, motion, useAnimation } from "framer-motion";
import { ArrowIcon } from "../common/svgIcons";
import { Link } from "@tanstack/react-router";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const steps = [
  {
    id: "planning",
    label: "Planning",
    image: planning,
    description:
      "We take time to deeply understand your requirements before writing a line of code. Clear delivery strategy, agreed timelines, defined milestones.",
  },
  {
    id: "development",
    label: "Development",
    image: development,
    description:
      "Skilled engineers across your stack, working with your existing team or independently. Code reviewed throughout, not just at the end.",
  },
  {
    id: "qa",
    label: "QA",
    image: qa,
    description:
      "Quality assurance is built into the Pod, not bolted on at the end. Issues are caught and resolved in the same sprint they appear in.",
  },
  {
    id: "deployment",
    label: "Deployment",
    image: deployment,
    description:
      "Structured release process. Your Pod Lead coordinates deployment to minimise disruption and confirm that what goes live is what was agreed.",
  },
  {
    id: "feedback",
    label: "Feedback",
    image: feedback,
    description:
      "Regular check-ins at every stage. No surprises at the end. You stay informed without needing to manage the day-to-day.",
  },
];

const PodWorkFlow: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [prevIndex, setPrevIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPaused = hoveredIndex !== null;

  const displayIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  const goTo = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setPrevIndex(activeIndex);
      setAnimating(true);
      setActiveIndex(index);
      setTimeout(() => setAnimating(false), 400);
    },
    [activeIndex],
  );

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % steps.length;
        setPrevIndex(prev);
        setAnimating(true);
        setTimeout(() => setAnimating(false), 400);
        return next;
      });
    }, 4000);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      startInterval();
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, startInterval]);

  const current = steps[displayIndex];

  return (
    <section style={styles.section}>
      {/* Scrolling watermark */}
      <div style={styles.marqueeWrapper}>
        <div style={styles.marqueeTrack}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} style={styles.marqueeItem}>
              <span style={styles.marqueeIcon}>
                <img src={csLogo} alt="CloudSurge Logo" width={28} />
              </span>{" "}
              Pod Workflow
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="pod-content" style={styles.content}>
        {/* Left card */}
        <div className="pod-card-wrapper" style={styles.cardWrapper}>
          <div
            key={displayIndex}
            style={{
              ...styles.card,
              ...(animating ? styles.cardFadeIn : {}),
            }}
          >
            <div style={styles.imageContainer}>
              <img
                src={current.image}
                alt={current.label}
                className="pod-card-image"
                style={styles.cardImage}
              />
              <div style={styles.imageOverlay} />
            </div>
            <div style={styles.cardBody}>
              <span style={styles.cardLabel}>{current.label}</span>
              <p style={styles.cardDesc}>{current.description}</p>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="pod-right-panel" style={styles.rightPanel}>
          {/* Step list */}
          <div style={styles.stepList}>
            {steps.map((step, i) => {
              const isActive = i === activeIndex;
              const isHovered = hoveredIndex === i;
              const showActive = hoveredIndex !== null ? isHovered : isActive;
              const isFirst = i === 0;
              const isLast = i === steps.length - 1;
              return (
                <button
                  key={step.id}
                  className={showActive ? "pod-step-btn-active" : ""}
                  style={{
                    ...styles.stepBtn,
                    ...(isFirst ? { borderTop: "4px solid #EB4124" } : {}),
                    ...(showActive ? styles.stepBtnActive : {}),
                  }}
                  onClick={() => goTo(i)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span
                    style={{
                      ...styles.stepLabel,
                      ...(showActive ? styles.stepLabelActive : {}),
                    }}
                  >
                    {step.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <a
            href="/#pricing"
            style={styles.ctaBtn}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/#pricing";
              setTimeout(() => {
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
          >
            <span style={styles.ctaIcon}>
              <ArrowIcon />
            </span>
            <span className="mt-2" style={styles.ctaText}>price overview</span>
          </a>
        </div>
      </div>

      <section className="w-full bg-white flex items-center px-4 h-[381px]">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center gap-8 max-w-[768px] mx-auto"
        >
          {/* Heading */}
          <h2
            className="text-center text-black font-bold"
            style={{
              fontFamily: "Bahnschrift, sans-serif",
              fontSize: "clamp(22px, 4vw, 45px)",
              lineHeight: "54px",
              letterSpacing: "-0.01em",
              color: "#5D5D5D",
            }}
          >
            Ready to add delivery capacity?
          </h2>

          <motion.p
            variants={sectionVariants}
            className=" pl-4 lg:pl-0 text-md sm:text-xl md:text-md lg:text-md xl:text-xl 2xl:text-2xl text-[#5D5D5D] max-w-full sm:max-w-[45%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[85%] 2xl:max-w-[70%] text-center"
          >
            Tell us what you are building or delivering. We will assess whether
            a Pod is the right fit and come back to you within one business day.
          </motion.p>

          {/* Actions */}
          <div className="flex flex-row items-center gap-4">
            <Link
              to="/contact"
              className="flex items-center justify-center px-3 py-1.5 rounded-md  transition-opacity"
              style={{
                minWidth: "184px",
                height: "39px",
                background:
                  "linear-gradient(20deg, #ec3f24 0%, #ec3f24 40%, #7300bf 65%, #0a0a90 100%)",
              }}
            >
              <span
                className="text-white text-[15px] lg:text-[17px]"
                style={{
                  fontFamily: "Bahnschrift, sans-serif",
                  lineHeight: "150%",
                }}
              >
                Get a Pod in 48 hours
              </span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CSS animations + responsive overrides */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes progressBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .pod-step-btn:hover .pod-step-label {
          color: #EB4124 !important;
        }

        /* ── Mobile: collapse vertical gap when stacked ── */
        @media (max-width: 640px) {
          // .pod-step-btn-active {
          //   transform: translateX(-8px) !important;
          // }
          .pod-content {
            gap: 4px !important;
            padding: 12px 20px !important;
            flex: 0 !important;
            margin-top: 3rem !important;
          }
          .pod-card-wrapper {
            max-width: 100% !important;
          }
          .pod-right-panel {
            margin-left: 0 !important;
            padding-top: 0 !important;
            max-width: 100% !important;
          }
          .pod-card-image {
            object-position: top !important;
          }
            
        }
      `}</style>
    </section>
  );
};

/* ─── Inline styles ─── */
const styles: Record<string, React.CSSProperties> = {
  section: {
    position: "relative",
    width: "100%",
    margin: "0 auto",
    backgroundColor: "#DEDEDE",
    overflow: "hidden",
    fontFamily:
      "'Bahnschrift', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },

  /* Marquee */
  marqueeWrapper: {
    width: "100%",
    overflow: "hidden",
    paddingTop: "36px",
    paddingBottom: "14px",
  },
  marqueeTrack: {
    display: "flex",
    gap: "0px",
    width: "max-content",
    animation: "marquee 18s linear infinite",
  },
  marqueeItem: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "clamp(18px, 2.8vw, 42px)",
    fontWeight: 700,
    color: "#5D5D5D",
    whiteSpace: "nowrap",
    paddingRight: "clamp(24px, 4vw, 60px)",
    letterSpacing: "-0.01em",
  },
  marqueeIcon: {
    color: "#EF4123",
    fontSize: "0.55em",
  },

  /* Layout */
  content: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    gap: "clamp(20px, 4vw, 60px)",
    padding: "clamp(16px, 4vw, 65px) clamp(12px, 3vw, 20px)",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap" as const,
  },

  /* Card */
  cardWrapper: {
    flex: "1 1 320px",
    maxWidth: "520px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  card: {
    overflow: "hidden",
    animation: "fadeSlideIn 0.4s ease both",
  },
  cardFadeIn: {
    animationName: "fadeSlideIn",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "clamp(160px, 28vw, 280px)",
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.6s ease",
  },
  imageOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.18) 100%)",
  },
  cardBody: {
    padding: "18px 0px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  cardLabel: {
    fontSize: "clamp(22px, 3vw, 32px)",
    fontWeight: 350,
    color: "#EF4123",
    lineHeight: 1.2,
  },
  cardDesc: {
    fontSize: "clamp(14px, 1.5vw, 20px)",
    fontWeight: 350,
    color: "#5D5D5D",
    lineHeight: 1.5,
    margin: 0,
  },

  /* Right panel */
  rightPanel: {
    flex: "1 1 280px",
    display: "flex",
    flexDirection: "column",
    gap: "0px",
    paddingTop: "clamp(0px, 1vw, 12px)",
    marginLeft: "30px",
    width: "100%",
  },

  stepList: {
    display: "flex",
    flexDirection: "column",
    gap: "0px",
  },
  stepBtn: {
    background: "transparent",
    // border: "none",
    borderBottom: "4px solid #EB4124",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "6px 8px",
    transition: "background-color 0.35s ease, transform 0.35s ease",
    textAlign: "left",
    transform: "translateX(0px)",
    willChange: "transform, background-color",
  },
  stepBtnActive: {
    backgroundColor: "rgba(235, 65, 36, 1)",
    // transform: "translateX(-20px)",
    borderBottom: "4px solid #EB4124",
  },
  stepLabel: {
    fontSize: "clamp(22px, 4vw, 50px)",
    fontWeight: 600,
    color: "#EB4124",
    lineHeight: 1.2,
    transition: "color 0.35s ease",
  },
  stepLabelActive: {
    color: "#fff",
  },
  /* CTA */
  ctaBtn: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "clamp(12px, 2vw, 28px)",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "0",
  },
  ctaIcon: {
    color: "#EF4123",
    fontSize: "clamp(16px, 1.8vw, 22px)",
  },
  ctaText: {
    fontSize: "clamp(14px, 1.5vw, 22px)",
    fontWeight: 400,
    color: "#5D5D5D",
    letterSpacing: "-0.04em",
    borderBottom: "2px solid transparent",
    transition: "border-color 0.2s ease",
  },
};

export default PodWorkFlow;
