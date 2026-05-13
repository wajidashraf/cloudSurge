import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
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
    logoW: 210, logoH: 75, logoLeft: 0,
    title: "Building the platform that connects students and tutors at scale",
    imageBg: fawriImage,
  },
  {
    id: "genaiera",
    logo: genera as string | null,
    logoLabel: undefined as string | undefined,
    logoW: 245, logoH: 88, logoLeft: 0,
    title: "Powering next-generation business applications with generative AI",
    imageBg: generaImage,
  },
  {
    id: "gptriage",
    logo: gpTriage as string | null,
    logoLabel: undefined as string | undefined,
    logoW: 187, logoH: 65, logoLeft: 20,
    title: "Revolutionising the GP booking process with AI",
    imageBg: gpTriageImage,
  },
  {
    id: "zaptica",
    logo: zeptica as string | null,
    logoLabel: undefined as string | undefined,
    logoW: 188, logoH: 85, logoLeft: 0,
    title: "They turned to Cloud Surge to bridge the skills gap and deliver successfully.",
    imageBg: zepticaImage,
  },
  {
    id: "vallour",
    logo: valour as string | null,
    logoLabel: "Vallour" as string | undefined,
    logoW: 218, logoH: 78, logoLeft: 27,
    title: "Transforming chronic kidney disease management with intelligent automation",
    imageBg: valourImage,
  },
];

const TOTAL     = CARDS.length;
// 5 copies gives ample buffer on both sides for any visibleCount
const CLONED    = [...CARDS, ...CARDS, ...CARDS, ...CARDS, ...CARDS];
const CLONE_OFFSET = TOTAL * 2; // track starts here (2nd copy = real start)
const CARD_GAP  = 16;
const AUTO_MS   = 2000;
const CS_LOGO_W = 40;
const CS_LOGO_H = 40;
const BASE_W    = 441;
const BASE_H    = 608;

const getVisibleCount = (w: number): number => {
  if (w >= 1536) return 5;
  if (w >= 1280) return 4;
  if (w >= 768)  return 3;
  if (w >= 520)  return 2
  return 1;
};


// ─── Card ─────────────────────────────────────────────────────────────────────
interface CardProps {
  logo: string | null; logoLabel?: string;
  logoW: number; logoH: number; logoLeft: number;
  title: string; imageBg: string; cardWidth: number;
}

const ProjectCard: React.FC<CardProps> = ({ logo, logoLabel, logoW, logoH, logoLeft, title, imageBg, cardWidth }) => {
  const s = cardWidth / BASE_W;
  return (
    <div
      className="project-card"
      style={{ width: cardWidth, minWidth: cardWidth, height: BASE_H * s, background: "#FFFFFF", position: "relative", flexShrink: 0, overflow: "hidden" }}
    >
      <div style={{ position: "absolute", width: 407 * s, height: 276 * s, left: 17 * s, top: 17 * s, backgroundImage: `url(${imageBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} />
      
      <div style={{ position: "absolute", left: logoLeft * s, top: 321 * s, width: logoW * s, height: logoH * s, display: "flex", alignItems: "center" }}>
        {logo
          ? <img src={logo} alt={logoLabel ?? "logo"} style={{ width: logoW * s, height: logoH * s, objectFit: "contain" }} draggable={false} />
          : <span style={{ fontFamily: "'Bahnschrift','DIN Alternate',sans-serif", fontWeight: 700, fontSize: 26 * s, color: "#154360", letterSpacing: "-0.02em" }}>{logoLabel}</span>
        }
      </div>
      <p style={{ position: "absolute", top: 440 * s, left: 24 * s, right: 28 * s, fontFamily: "'Bahnschrift','DIN Alternate','Arial Narrow',sans-serif", fontWeight: 350, fontSize: 18 * s, lineHeight: "98%", color: "#5D5D5D", margin: 0, textAlign:'left' }}>{title}</p>
      <div style={{ position: "absolute", bottom: 34 * s, left: 24 * s, display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
        <span style={{ fontFamily: "'Bahnschrift','DIN Alternate',sans-serif", fontWeight: 400, fontSize: 20.74 * s, lineHeight: "98%", color: "#5D5D5D" }}><img src={lens} alt="lens" style={{ width: 15, height: 15, objectFit: "contain", display:"inline-block" }}/> read more...</span>
      </div>
    </div>
  );
};

// ─── Progress ─────────────────────────────────────────────────────────────────
interface ProgressProps { current: number; total: number; onDotClick: (i: number) => void; }

const CarouselProgress: React.FC<ProgressProps> = ({ current, total, onDotClick }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const [barW, setBarW] = useState(0);
  useEffect(() => {
    const update = () => { if (barRef.current) setBarW(barRef.current.offsetWidth); };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  const fraction = total > 1 ? current / (total - 1) : 0;
  const logoX    = fraction * Math.max(0, barW - CS_LOGO_W);
  return (
    <div style={{ position: "relative", marginTop: 90, paddingBottom: 48 }}>
      <div ref={barRef} style={{ position: "relative", width: "100%", height: 4, background: "#FFFFFF", borderRadius: 2 }}>
        <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${fraction * 100}%`, background: "#EF4123", borderRadius: 2, transition: "width 0.5s ease" }} />
      </div>
      <div style={{ position: "absolute", top: -(CS_LOGO_H / 2) + 2, left: logoX, width: CS_LOGO_W, height: CS_LOGO_H, transition: "left 0.5s ease", pointerEvents: "none" }}>
        <img src={csLogo} alt="CS" style={{ width: CS_LOGO_W, height: CS_LOGO_H, objectFit: "contain" }} draggable={false} />
      </div>
     
    </div>
  );
};

// ─── Main ─────────────────────────────────────────────────────────────────────
const SuccessProjectsCard: React.FC = () => {
  const [paused,     setPaused]     = useState(false);
  const [trackIndex, setTrackIndex] = useState(CLONE_OFFSET); // points into CLONED
  const [isAnimated, setIsAnimated] = useState(true);
  const [viewportW,  setViewportW]  = useState(0);
  const [winW,       setWinW]       = useState(() => typeof window !== "undefined" ? window.innerWidth : 1280);

  const viewportRef   = useRef<HTMLDivElement>(null);
  const sectionRef    = useRef<HTMLElement>(null);
  const intervalRef   = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const transitioning = useRef(false);

  const sectionInView = useInView(sectionRef, { once: true, amount: 0.15 });

  // Measure viewport once on mount and on resize
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
  const cardWidth    = viewportW > 0
    ? (viewportW - CARD_GAP * (visibleCount - 1)) / visibleCount
    : BASE_W;

  // Logical index in real CARDS (0-based)
  const current = ((trackIndex - CLONE_OFFSET) % TOTAL + TOTAL) % TOTAL;

  // Move to a new trackIndex with animation
  const moveTo = useCallback((newTrack: number) => {
    if (transitioning.current) return;
    setIsAnimated(true);
    setTrackIndex(newTrack);
  }, []);

  // After animation completes, silently snap back to the middle copy if needed
  useEffect(() => {
    if (!isAnimated) return;
    transitioning.current = true;
    const t = setTimeout(() => {
      transitioning.current = false;
      // Normalise back to the CLONE_OFFSET..CLONE_OFFSET+TOTAL-1 window
      setTrackIndex((prev) => {
        const logicalIdx = ((prev - CLONE_OFFSET) % TOTAL + TOTAL) % TOTAL;
        const target     = CLONE_OFFSET + logicalIdx;
        if (prev !== target) {
          // silent jump: disable animation then update
          setIsAnimated(false);
          return target;
        }
        return prev;
      });
    }, 560);
    return () => clearTimeout(t);
  }, [trackIndex, isAnimated]);

  // Re-enable animation one rAF after a silent jump
  useEffect(() => {
    if (isAnimated) return;
    const id = requestAnimationFrame(() => setIsAnimated(true));
    return () => cancelAnimationFrame(id);
  }, [isAnimated]);

  const next = useCallback(() => moveTo(trackIndex + 1), [moveTo, trackIndex]);
  const prev = useCallback(() => moveTo(trackIndex - 1), [moveTo, trackIndex]);
  const goTo = useCallback((logicalIdx: number) => {
    const n = ((logicalIdx % TOTAL) + TOTAL) % TOTAL;
    moveTo(CLONE_OFFSET + n);
  }, [moveTo]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setTrackIndex((prev) => {
        setIsAnimated(true);
        return prev + 1;
      });
    }, AUTO_MS);
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  const handleNav = (fn: () => void) => {
    clearInterval(intervalRef.current);
    fn();
    intervalRef.current = setInterval(() => {
      setTrackIndex((prev) => { setIsAnimated(true); return prev + 1; });
    }, AUTO_MS);
  };

  const offset = -(trackIndex * (cardWidth + CARD_GAP));

  return (
    <>
      <style>{`
        .projects-section { font-family:'Bahnschrift','DIN Alternate','Arial Narrow',sans-serif; }
        .project-card { transition: box-shadow 0.25s ease, transform 0.25s ease; }
        .project-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,.12); transform: translateY(-4px); }
        .nav-btn { width:44px;height:44px;border-radius:50%;border:2px solid #5D5D5D;background:transparent;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s,border-color .2s;flex-shrink:0; }
        .nav-btn:hover { background:#EF4123;border-color:#EF4123; }
        .nav-btn:hover svg path { stroke:#fff; }
      `}</style>

      <section ref={sectionRef} className="projects-section" style={{ background: "#E8E5E5" }}
        onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div style={{ maxWidth: 1600, margin: "0 auto", padding: "85px 50px 60px" }}>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily:"'Bahnschrift','DIN Alternate','Arial Narrow',sans-serif", fontWeight:700, fontSize:"clamp(22px,2.78vw,40px)", lineHeight:"104%", textAlign:"center", color:"#5D5D5D", margin:"0 auto 28px", maxWidth:987 }}
          >
            100+ projects delivered. 98% client satisfaction.{" "}Clients including Fawrii, GP Triage, Genera, and Vallour.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            style={{ fontFamily:"'Bahnschrift','DIN Alternate','Arial Narrow',sans-serif", fontWeight:350, fontSize:"clamp(16px,1.67vw,24px)", lineHeight:"104%", textAlign:"center", color:"#5D5D5D", margin:"0 auto 56px", maxWidth:1055 }}
          >
            We have supported product teams, Microsoft Partners, and enterprise organisations across healthcare, education, and professional services. Below is a selection of the work and the results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
            style={{ display:"flex", alignItems:"center", gap:16 }}
          >
            <div ref={viewportRef} style={{ flex:1, overflow:"hidden" }}>
              <div style={{
                display:"flex", gap:CARD_GAP,
                transform:`translateX(${offset}px)`,
                transition: isAnimated ? "transform 0.55s cubic-bezier(0.4,0,0.2,1)" : "none",
                willChange:"transform",
              }}>
                {CLONED.map((card, i) => (
                  <ProjectCard key={`${card.id}-${i}`}
                    logo={card.logo} logoLabel={card.logoLabel}
                    logoW={card.logoW} logoH={card.logoH} logoLeft={card.logoLeft}
                    title={card.title} imageBg={card.imageBg} cardWidth={cardWidth} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CarouselProgress current={current} total={TOTAL} onDotClick={(i) => handleNav(() => goTo(i))} />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SuccessProjectsCard;