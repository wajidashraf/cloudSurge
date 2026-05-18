import React, { lazy, Suspense, useState, useEffect, useRef } from "react";
import { useLenis } from '@/hooks/useLenis';

import Navbar from "@/components/common/colored-navbar";
import Hero from "@/components/FusionPods/hero";
import PartnerSection from "@/components/FusionPods/partner";
import PodModelSection from "@/components/FusionPods/selection";
import magnifierImg from "@/assets/magnifier_fusion.png";
import userImg from "@/assets/user.png";
import fourArrowsImg from "@/assets/four_arrow.png";
import dg from "@/assets/poddg.png";
import dgMobile from "@/assets/pod-architecture-mobile.svg";
import { setPageSEO } from "@/utils/seo";
import PodModelWorks from "@/components/FusionPods/podModelWorks";
import WhatisPod from "@/components/FusionPods/whatisPod";
import PodWorkFlow from "@/components/FusionPods/podWorkflow";

const ScrollToTop = lazy(() =>
  import("@/components/common/ScrollToTop").then((mod) => ({
    default: mod.ScrollToTop,
  }))
);
const FooterSection = lazy(() =>
  import("@/components/common/footer").then((mod) => ({
    default: mod.FooterSection,
  }))
);

export const FusionPods: React.FC = () => {
  useLenis();
  const [showRemainingContent, setShowRemainingContent] = useState(false);
  const [modelSectionInView, setModelSectionInView] = useState(false);
  const modelSectionRef = useRef<HTMLDivElement>(null);
  const whatisPodRef = useRef<HTMLDivElement>(null);

  const simpleFallback = <div className="text-center py-8"></div>;

  // Set page metadata for SEO and preload images early
  useEffect(() => {
    setPageSEO({
      title: "Fusion Pods | On-Demand Delivery Teams | Cloud Surge",
      description:
        "Deploy expert delivery teams in 48 hours. Cloud Surge Fusion Pods help MSPs/IT partners, product teams and enterprises scale with consultants, engineers and governance. Delivery across application development, modern web & cloud, Azure solutions, Power Platform and Salesforce integration",
      path: '/fusion-pods',
    });

    // Preload all images early to prevent stutter
    const imagesToPreload = [magnifierImg, userImg, fourArrowsImg, dg, dgMobile];
    imagesToPreload.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    });

    // Also preload using Image objects for browser cache
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Observe when model section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setModelSectionInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (modelSectionRef.current) {
      observer.observe(modelSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Show remaining content after model section is in view
  useEffect(() => {
    if (!modelSectionInView) return;
    const timer = setTimeout(() => {
      setShowRemainingContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [modelSectionInView]);

  return (
    <div className="font-bahnschrift">
      <Navbar />
      <Suspense fallback={simpleFallback}>
        <ScrollToTop />
      </Suspense>
      <Suspense fallback={simpleFallback}>
        <Hero />
      </Suspense>
      <Suspense fallback={simpleFallback}>
        <PartnerSection />
      </Suspense>
      <div ref={modelSectionRef}>
        <PodModelWorks/>
      </div>
      <div ref={whatisPodRef}>
        <WhatisPod/>
      </div>
      {showRemainingContent && (
        <>
          <Suspense fallback={simpleFallback}>
            <PodModelSection />
          </Suspense>
          <Suspense fallback={simpleFallback}>
            <PodWorkFlow />
          </Suspense>
          <Suspense fallback={simpleFallback}>
            <FooterSection />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default FusionPods;
