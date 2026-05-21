import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@tanstack/react-router";
import gpTriage from "@/assets/GP-Logo 3.png";
import gpTriageImage from "@/assets/hospital.png";
import fawri from "@/assets/Fawrii_logo.png";
import fawriImage from "@/assets/Fawrii.png";
import genera from "@/assets/Genaiera_Logo_Green.png";
import generaImage from "@/assets/genaiera.jpg";
import zeptica from "@/assets/Zaptica-Logo.png";
import zepticaImage from "@/assets/Zaptica.jpg";
import csLogo from "@/assets/csLOGO.png";
import valour from "@/assets/valourLogo.png";
import valourImage from "@/assets/Vallour.jpg";
import lens from "@/assets/lens.png";

// ─── Card data ────────────────────────────────────────────────────────────────
const CARDS = [
  {
    id: "fawrii",
    logo: fawri as string | null,
    logoLabel: undefined as string | undefined,
    logoW: 210,
    logoH: 75,
    logoLeft: 10,
    title: "Building the platform that connects students and tutors at scale",
    imageBg: fawriImage,
    pageLink: "/fawrii",
  },
  {
    id: "genaiera",
    logo: genera as string | null,
    logoLabel: undefined as string | undefined,
    logoW: 245,
    logoH: 88,
    logoLeft: 0,
    title: "Powering next-generation business applications with generative AI",
    imageBg: generaImage,
    pageLink: "/genaiera",
  },
  {
    id: "gptriage",
    logo: gpTriage as string | null,
    logoLabel: undefined as string | undefined,
    logoW: 187,
    logoH: 65,
    logoLeft: 30,
    title: "Revolutionising the GP booking process with AI",
    imageBg: gpTriageImage,
    pageLink: "/gptriage",
  },
  {
    id: "zaptica",
    logo: zeptica as string | null,
    logoLabel: undefined as string | undefined,
    logoW: 188,
    logoH: 85,
    logoLeft: 8,
    title: "They turned to Cloud Surge to bridge the skills gap and deliver successfully.",
    imageBg: zepticaImage,
    pageLink: "/zaptica",
  },
  {
    id: "vallour",
    logo: valour as string | null,
    logoLabel: "Vallour" as string | undefined,
    logoW: 218,
    logoH: 78,
    logoLeft: 30,
    title: "Transforming chronic kidney disease management with intelligent automation",
    imageBg: valourImage,
    pageLink: "/vallour",
  },
];

const TOTAL = CARDS.length;
const CLONED = [...CARDS, ...CARDS, ...CARDS, ...CARDS, ...CARDS];
const CLONE_OFFSET = TOTAL * 2;
const CARD_GAP = 16;
const AUTO_MS = 4000;
const CS_LOGO_W = 40;
const CS_LOGO_H = 40;
const BASE_W = 441;
const BASE_H = 608;
const LERP = 0.18; // smoothness factor for settle animation
const SWIPE_THRESHOLD = 8; // px before we consider it a drag (not a click)
const RESUME_DELAY_MS = 1500; // pause auto-advance briefly after interaction

const getVisibleCount = (w: number): number => {
  if (w >= 1536) return 5;
  if (w >= 1280) return 4;
  if (w >= 900) return 3;
  if (w >= 600) return 2;
  return 1;
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ─── Card ─────────────────────────────────────────────────────────────────────
interface CardProps {
  logo: string | null;
  logoLabel?: string;
  logoW: number;
  logoH: number;
  logoLeft: number;
  title: string;
  imageBg: string;
  cardWidth: number;
  pageLink: string;
}

const ProjectCard: React.FC<CardProps> = ({
  logo,
  logoLabel,
  logoW,
  logoH,
  logoLeft,
  title,
  imageBg,
  cardWidth,
  pageLink,
}) => {
  const s = cardWidth / BASE_W;
  return (
    <div
      className="project-card"
      style={{
        width: cardWidth,
        minWidth: cardWidth,
        height: BASE_H * s,
        background: "#FFFFFF",
        position: "relative",
        flexShrink: 0,
        overflow: "hidden",
        borderRadius: 4,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 407 * s,
          height: 276 * s,
          left: 17 * s,
          top: 17 * s,
          backgroundImage: `url(${imageBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: logoLeft * s,
          top: 321 * s,
          width: logoW * s,
          height: logoH * s,
          display: "flex",
          alignItems: "center",
        }}
      >
        {logo ? (
          <img
            src={logo}
            alt={logoLabel ?? "logo"}
            style={{
              width: logoW * s,
              height: logoH * s,
              objectFit: "contain",
            }}
            draggable={false}
          />
        ) : (
          <span
            style={{
              fontFamily: "'Bahnschrift','DIN Alternate',sans-serif",
              fontWeight: 700,
              fontSize: 26 * s,
              color: "#154360",
              letterSpacing: "-0.02em",
            }}
          >
            {logoLabel}
          </span>
        )}
      </div>
      <p
        style={{
          position: "absolute",
          top: 440 * s,
          left: 30 * s,
          right: 28 * s,
          fontFamily: "'Bahnschrift','DIN Alternate','Arial Narrow',sans-serif",
          fontWeight: 350,
          fontSize: 18 * s,
          lineHeight: "98%",
          color: "#5D5D5D",
          margin: 0,
          textAlign: "left",
        }}
      >
        {title}
      </p>
      <Link
        to={pageLink as never}
        style={{
          position: "absolute",
          bottom: 34 * s,
          left: 24 * s,
          display: "flex",
          alignItems: "center",
          gap: 8,
          textDecoration: "none",
        }}
      >
        <span
          style={{
            fontFamily: "'Bahnschrift','DIN Alternate',sans-serif",
            fontWeight: 400,
            fontSize: 20.74 * s,
            lineHeight: "98%",
            color: "#5D5D5D",
          }}
        >
          <img
            src={lens}
            alt="lens"
            style={{
              width: 15,
              height: 15,
              objectFit: "contain",
              display: "inline-block",
            }}
          />read more...
        </span>
      </Link>
    </div>
  );
};

// ─── Progress ─────────────────────────────────────────────────────────────────
interface ProgressProps {
  current: number;
  total: number;
  onDotClick: (i: number) => void;
}

const CarouselProgress: React.FC<ProgressProps> = ({
  current,
  total,
  onDotClick,
}) => {
  const barRef = useRef<HTMLDivElement>(null);
  const [barW, setBarW] = useState(0);
  useEffect(() => {
    const update = () => {
      if (barRef.current) setBarW(barRef.current.offsetWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  const fraction = total > 1 ? current / (total - 1) : 0;
  const logoX = fraction * Math.max(0, barW - CS_LOGO_W);
  return (
    <div style={{ position: "relative", marginTop: 90, paddingBottom: 48 }}>
      <div
        ref={barRef}
        style={{
          position: "relative",
          width: "100%",
          height: 4,
          background: "#FFFFFF",
          borderRadius: 2,
          cursor: "pointer",
        }}
        onClick={(e) => {
          const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
          const f = (e.clientX - rect.left) / rect.width;
          const i = Math.round(f * (total - 1));
          onDotClick(Math.max(0, Math.min(total - 1, i)));
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: `${fraction * 100}%`,
            background: "#EF4123",
            borderRadius: 2,
            transition: "width 0.45s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: -(CS_LOGO_H / 2) + 2,
          left: logoX,
          width: CS_LOGO_W,
          height: CS_LOGO_H,
          transition: "left 0.45s cubic-bezier(0.22,1,0.36,1)",
          pointerEvents: "none",
        }}
      >
        <img
          src={csLogo}
          alt="CS"
          style={{ width: CS_LOGO_W, height: CS_LOGO_H, objectFit: "contain" }}
          draggable={false}
        />
      </div>
    </div>
  );
};

// ─── Nav button ───────────────────────────────────────────────────────────────
const NavButton: React.FC<{
  direction: "prev" | "next";
  onClick: () => void;
}> = ({ direction, onClick }) => (
  <button
    type="button"
    className="nav-btn"
    aria-label={direction === "prev" ? "Previous" : "Next"}
    onClick={onClick}
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      {direction === "prev" ? (
        <path
          d="M15 18l-6-6 6-6"
          stroke="#5D5D5D"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M9 6l6 6-6 6"
          stroke="#5D5D5D"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  </button>
);

// ─── Main ─────────────────────────────────────────────────────────────────────
const SuccessProjectsCard: React.FC = () => {
  const [trackIndex, setTrackIndex] = useState(CLONE_OFFSET);
  const [viewportW, setViewportW] = useState(0);
  const [winW, setWinW] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1280,
  );

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const currentOffsetRef = useRef(0);
  const targetOffsetRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(
    undefined,
  );
  const interactingRef = useRef(false); // true while user drags/touches
  const hoveringRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragDeltaXRef = useRef(0);
  const pointerDownRef = useRef(false);
  const isDraggingRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const sectionInView = useInView(sectionRef, { once: true, amount: 0.15 });

  // Measure viewport on mount / resize
  useEffect(() => {
    const measure = () => {
      setWinW(window.innerWidth);
      if (viewportRef.current) setViewportW(viewportRef.current.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const visibleCount = getVisibleCount(winW);
  const cardWidth =
    viewportW > 0
      ? (viewportW - CARD_GAP * (visibleCount - 1)) / visibleCount
      : BASE_W;

  const stepSize = cardWidth + CARD_GAP;
  const current = (((trackIndex - CLONE_OFFSET) % TOTAL) + TOTAL) % TOTAL;

  // Sync target offset when trackIndex changes
  useEffect(() => {
    targetOffsetRef.current = -(trackIndex * stepSize);
  }, [trackIndex, stepSize]);

  // rAF-driven smooth interpolation toward target offset.
  // While dragging, the track follows the finger 1:1 (no smoothing) so the
  // gesture feels direct. On release we ease into the committed target.
  useEffect(() => {
    const reduced = prefersReducedMotion();
    const tick = () => {
      let next: number;
      if (isDraggingRef.current) {
        next = targetOffsetRef.current + dragDeltaXRef.current;
      } else {
        const target = targetOffsetRef.current;
        const cur = currentOffsetRef.current;
        const diff = target - cur;
        if (reduced || Math.abs(diff) < 0.3) {
          next = target;
        } else {
          next = cur + diff * LERP;
        }
      }
      currentOffsetRef.current = next;
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${next}px,0,0)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Silent snap back to middle copy when index drifts to outer clones
  useEffect(() => {
    if (trackIndex < TOTAL || trackIndex >= TOTAL * 4) {
      // Wait until lerp settles, then snap silently
      const id = setTimeout(() => {
        const logicalIdx = (((trackIndex - CLONE_OFFSET) % TOTAL) + TOTAL) % TOTAL;
        const target = CLONE_OFFSET + logicalIdx;
        // Hard-set offset to avoid visible jump animation
        currentOffsetRef.current = -(target * stepSize);
        targetOffsetRef.current = currentOffsetRef.current;
        setTrackIndex(target);
      }, 700);
      return () => clearTimeout(id);
    }
  }, [trackIndex, stepSize]);

  // Auto-advance — pauses while user is hovering or interacting, and for a
  // short cooldown after release so the carousel doesn't lurch immediately.
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (interactingRef.current || hoveringRef.current) return;
      setTrackIndex((prev) => prev + 1);
    }, AUTO_MS);
    return () => clearInterval(intervalRef.current);
  }, []);

  const scheduleResume = useCallback(() => {
    interactingRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      interactingRef.current = false;
    }, RESUME_DELAY_MS);
  }, []);

  const goPrev = useCallback(() => {
    scheduleResume();
    setTrackIndex((p) => p - 1);
  }, [scheduleResume]);
  const goNext = useCallback(() => {
    scheduleResume();
    setTrackIndex((p) => p + 1);
  }, [scheduleResume]);
  const goTo = useCallback(
    (logical: number) => {
      scheduleResume();
      setTrackIndex(CLONE_OFFSET + logical);
    },
    [scheduleResume],
  );

  // Drag / swipe handlers (pointer events cover mouse + touch + pen).
  // We delay the "isDragging" flip until movement exceeds a small threshold,
  // so plain clicks on links inside cards still work.
  const onPointerDown = (e: React.PointerEvent) => {
    // Ignore non-primary buttons (right-click, etc.)
    if (e.button !== 0 && e.pointerType === "mouse") return;
    pointerDownRef.current = true;
    interactingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragDeltaXRef.current = 0;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointerDownRef.current) return;
    const delta = e.clientX - dragStartXRef.current;
    if (!isDraggingRef.current) {
      if (Math.abs(delta) < SWIPE_THRESHOLD) return;
      isDraggingRef.current = true;
      (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    }
    dragDeltaXRef.current = delta;
  };
  const endDrag = () => {
    if (!pointerDownRef.current) return;
    const wasDragging = isDraggingRef.current;
    const delta = dragDeltaXRef.current;
    pointerDownRef.current = false;
    isDraggingRef.current = false;
    dragDeltaXRef.current = 0;
    if (wasDragging && stepSize > 0) {
      // Commit the drag based on distance so a long swipe can move
      // multiple cards. Threshold of half a step feels natural.
      const steps = Math.round(-delta / stepSize);
      if (steps !== 0) {
        setTrackIndex((p) => p + steps);
      }
    }
    scheduleResume();
  };

  // Pause on hover (desktop)
  const onMouseEnter = () => {
    hoveringRef.current = true;
  };
  const onMouseLeave = () => {
    hoveringRef.current = false;
  };

  useEffect(() => () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  }, []);

  return (
    <>
      <style>{`
        .projects-section { font-family:'Bahnschrift','DIN Alternate','Arial Narrow',sans-serif; }
        .project-card { transition: box-shadow 0.25s ease, transform 0.25s ease; }
        .project-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,.12); transform: translateY(-4px); }
        .nav-btn { width:44px;height:44px;border-radius:50%;border:2px solid #5D5D5D;background:transparent;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s,border-color .2s,transform .2s;flex-shrink:0; }
        .nav-btn:hover { background:#EF4123;border-color:#EF4123; transform: scale(1.05); }
        .nav-btn:hover svg path { stroke:#fff; }
        .nav-btn:active { transform: scale(0.96); }
        .carousel-track { touch-action: pan-y; user-select: none; cursor: grab; }
        .carousel-track:active { cursor: grabbing; }
        .carousel-nav-row { display:flex; align-items:center; gap:16px; }
        @media (max-width: 600px) {
          .projects-inner { padding: 56px 20px 40px !important; }
          .nav-btn { width:38px; height:38px; }
        }
      `}</style>

      <section
        ref={sectionRef}
        id="project-cards-section"
        className="projects-section"
        style={{ background: "#E8E5E5" }}
      >
        <div
          className="projects-inner"
          style={{
            maxWidth: 1600,
            margin: "0 auto",
            padding: "85px 50px 60px",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily:
                "'Bahnschrift','DIN Alternate','Arial Narrow',sans-serif",
              fontWeight: 700,
              fontSize: "clamp(22px,2.78vw,40px)",
              lineHeight: "104%",
              textAlign: "center",
              color: "#5D5D5D",
              margin: "0 auto 28px",
              maxWidth: 987,
            }}
          >
            100+ projects delivered. 98% client satisfaction. Clients including
            Fawrii, GP Triage, Genera, and Vallour.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.12,
            }}
            style={{
              fontFamily:
                "'Bahnschrift','DIN Alternate','Arial Narrow',sans-serif",
              fontWeight: 350,
              fontSize: "clamp(16px,1.67vw,24px)",
              lineHeight: "104%",
              textAlign: "center",
              color: "#5D5D5D",
              margin: "0 auto 40px",
              maxWidth: 1055,
            }}
          >
            We have supported product teams, Microsoft Partners, and enterprise
            organisations across healthcare, education, and professional
            services. Below is a selection of the work and the results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.24,
            }}
            className="carousel-nav-row"
          >
            <NavButton direction="prev" onClick={goPrev} />

            <div
              ref={viewportRef}
              style={{ flex: 1, overflow: "hidden" }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div
                ref={trackRef}
                className="carousel-track"
                style={{
                  display: "flex",
                  gap: CARD_GAP,
                  willChange: "transform",
                }}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                onPointerLeave={endDrag}
              >
                {CLONED.map((card, i) => (
                  <ProjectCard
                    key={`${card.id}-${i}`}
                    logo={card.logo}
                    logoLabel={card.logoLabel}
                    logoW={card.logoW}
                    logoH={card.logoH}
                    logoLeft={card.logoLeft}
                    title={card.title}
                    imageBg={card.imageBg}
                    cardWidth={cardWidth}
                    pageLink={card.pageLink}
                  />
                ))}
              </div>
            </div>

            <NavButton direction="next" onClick={goNext} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CarouselProgress
              current={current}
              total={TOTAL}
              onDotClick={goTo}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SuccessProjectsCard;
