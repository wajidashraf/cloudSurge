import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Marquee from './marquee';

import PlanningImg from '@/assets/workflow_images/Planning.png';
import DevelopmentImg from '@/assets/workflow_images/Development.png';
import QAImg from '@/assets/workflow_images/QA.png';
import DeploymentImg from '@/assets/workflow_images/Deployment.png';
import FeedbackImg from '@/assets/workflow_images/Feedback.png';

interface Slide {
  title: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: 'Planning',
    description:
      'Every successful delivery starts with a clear plan. We take the time to deeply understand your project requirements, team dynamics, and business goals, so we can build a delivery strategy tailored to your exact needs.',
    image: PlanningImg,
  },
  {
    title: 'Development',
    description:
      'Your dedicated Pod begins development with velocity and precision. With developers, solution architects and technical leads working in sync, progress is fast, efficient, and transparent built on agile sprints and clear milestones.',
    image: DevelopmentImg,
  },
  {
    title: 'QA',
    description:
      'Quality isn’t an afterthought it’s built into the Pod. With continuous testing, peer reviews, and QA specialists baked into the process, we ensure every deliverable meets the highest standard before it moves forward.',
    image: QAImg,
  },
  {
    title: 'Deployment',
    description:
      'We don’t just build we launch. Deployment is handled with care, ensuring smooth handovers, system integration, and minimal disruption. Our Pods work closely with your team to go live without a hitch.',
    image: DeploymentImg,
  },
  {
    title: 'Feedback',
    description:
      'We’re committed to constant improvement. After delivery, we gather feedback from your team to fine-tune processes, tackle enhancements, and prepare for the next sprint building a cycle of consistent value.',
    image: FeedbackImg,
  },
];

const PodWorkflowSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const pauseTimeoutRef = useRef<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<{ [src: string]: boolean }>({});

  // Preload images
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => setLoadedImages((prev) => ({ ...prev, [slide.image]: true }));
    });
  }, []);

  useEffect(() => {
    if (!paused) {
      intervalRef.current = window.setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 1200000000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  const handleClickStep = (idx: number) => {
    setCurrent(idx);
    setPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = window.setTimeout(() => setPaused(false), 20000);
  };

  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full h-full min-h-screen md:py-5 bg-[#DEDEDE]">
      <Marquee text="Pod Workflow &nbsp; " repeat={20} speed={100} />

      <div className="w-full py-8 md:py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Left: Image + Text (Desktop only) */}
        <div className="hidden md:flex flex-col md:w-[60%] lg:w-[65%] xl:w-[70%] 2xl:w-[80%] md:ml-10">
          <div className="w-full h-64 md:h-full overflow-hidden mb-4 relative">
            <AnimatePresence initial={false} mode="sync">
              {loadedImages[slides[current].image] && (
                <motion.img
                  key={slides[current].image}
                  src={slides[current].image}
                  alt={slides[current].title}
                  loading="lazy"
                  className="object-contain object-left w-full h-full absolute top-0 left-0"
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  exit={{ y: '-100%' }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
              )}
            </AnimatePresence>
          </div>

          <div className="ml-0 md:ml-0 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl lg:text-xl xl:text-2xl 2xl:text-4xl text-left font-bold text-[#EF4123] mb-2">
                  {slides[current].title}
                </h2>
                <p className="text-sm lg:text-sm xl:text-base 2xl:text-base text-gray-500 leading-relaxed text-left">
                  {slides[current].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Steps */}
        <div className="flex flex-col h-full self-start md:pl-20">
          <span className="w-full h-[2px] md:h-[3px] bg-[#EB4124] md:ml-4" />
          <div className="w-full md:ml-4 md:w-full">
            {slides.map((step, idx) => (
              <div
                key={idx}
                onClick={() => handleClickStep(idx)}
                className={`flex flex-col cursor-pointer transform transition-transform duration-300 md:origin-right ${
                  current === idx ? 'scale-[1.05] md:scale-[1.1]' : 'scale-100'
                }`}
              >
                <h3
                  className={`text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-bold text-[#EB4124] text-left pt-4 pb-4 ${
                    current === idx ? 'text-white pl-4 bg-[#ef4123]' : ''
                  }`}
                >
                  {step.title}
                </h3>
                <span className="block w-full h-[2px] md:h-[3px] bg-[#EB4124]" />

                {/* Mobile only: Image + Description under clicked step */}
                <AnimatePresence>
                  {current === idx && (
                    <motion.div
                      className="md:hidden flex flex-col mt-2 pl-2 pr-2 items-start"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {loadedImages[step.image] && (
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-48 object-contain object-left rounded-md mb-2"
                        />
                      )}
                      <p className="text-gray-500 text-sm leading-relaxed text-left">{step.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="pl-4 mt-12 text-left w-full">
            <span
              aria-hidden="true"
              className="text-[#EB4124] text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl"
            >
              ↳ &nbsp;
            </span>
            <a
              href="#pricing"
              onClick={scrollToPricing}
              className="inline-flex items-center text-gray-500 hover:underline text-base lg:text-base xl:text-base 2xl:text-lg"
            >
              Pricing Overview
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodWorkflowSection;
