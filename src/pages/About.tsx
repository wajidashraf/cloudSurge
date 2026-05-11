import React, { lazy, Suspense, useEffect } from "react";
import logo from "@/assets/redicon.svg";

import Navbar from "@/components/common/colored-navbar";
import Loader from "@/components/common/loading";
import { setPageSEO } from "@/utils/seo";
import WhatWeDo from "@/components/AboutUs/about_whatwedo";
import HereToDo from "@/components/AboutUs/hereTodo";
import ScrollTimeline from "@/components/AboutUs/scrolltimeline";
import { useLenis } from "@/hooks/useLenis";

const ScrollToTop = lazy(() =>
  import("@/components/common/ScrollToTop").then((mod) => ({
    default: mod.ScrollToTop,
  })),
);
const HeroSection = lazy(() => import("@/components/AboutUs/Hero"));
const Gojra = lazy(() => import("@/components/AboutUs/gojra"));
const CoreValues = lazy(() => import("@/components/AboutUs/corevalues"));
const HeroSectionL = lazy(() => import("@/components/AboutUs/lowerhero"));
const TeamMembers = lazy(() => import("@/components/AboutUs/teammembers"));
const ImpactSection = lazy(() => import("@/components/AboutUs/impactsection"));
const FooterSection = lazy(() =>
  import("@/components/common/footer").then((mod) => ({
    default: mod.FooterSection,
  })),
);

export const About: React.FC = () => {
  useLenis();
  const loaderFallback = <Loader imageSrc={logo} altText="App logo loading" />;

  const simpleFallback = <div className="text-center py-8"></div>;

  // Set page metadata for SEO
  useEffect(() => {
    setPageSEO({
      title:
        "About Cloud Surge | Tech Scalability Partner | Fusion Pod Experts",
      description:
        "Cloud Surge is a tech scalability partner helping organisations scale delivery through Fusion Pods and calm governance. We deliver application development, modern web & cloud solutions, Azure, Power Platform and Salesforce development & integration, built for predictable outcomes.",
      path: "/about",
    });
  }, []);

  return (
    <div className="font-bahnschrift">
      <Navbar />

      <Suspense fallback={simpleFallback}>
        <ScrollToTop />
      </Suspense>

      <Suspense fallback={loaderFallback}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={loaderFallback}>
        <WhatWeDo />
      </Suspense>

      <Gojra />
      <Suspense fallback={loaderFallback}>
        <HereToDo />
      </Suspense>

      <Suspense fallback={simpleFallback}>
        <ScrollTimeline />
      </Suspense>

      {/* <InfoCardContainer /> */}

      <Suspense fallback={simpleFallback}>
        <CoreValues />
      </Suspense>

      <TeamMembers />

      <Suspense fallback={simpleFallback}>
        <HeroSectionL />
      </Suspense>


      <Suspense fallback={simpleFallback}>
        <ImpactSection />
      </Suspense>

      <Suspense fallback={simpleFallback}>
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default About;
