import React, { lazy, Suspense, useEffect } from "react";

import Navbar from "@/components/common/colored-navbar";
import { setPageSEO } from "@/utils/seo";
import { useLenis } from "@/hooks/useLenis";
import WhoItIsFor from "@/components/SurgeCare/HowItIsSoFor";

const ScrollToTop = lazy(() =>
  import("@/components/common/ScrollToTop").then((mod) => ({
    default: mod.ScrollToTop,
  })),
);
const Hero = lazy(() => import("@/components/SurgeCare/Hero"));
const FooterSection = lazy(() =>
  import("@/components/common/footer").then((mod) => ({
    default: mod.FooterSection,
  })),
);

export const SurgeCare: React.FC = () => {
  useLenis();
  const simpleFallback = <div className="text-center py-8"></div>;

  // Set page metadata for SEO
  useEffect(() => {
    setPageSEO({
      title:
        "Surge Care | Tech Scalability Partner | Fusion Pod Experts",
      description:
        "Cloud Surge is a tech scalability partner helping organisations scale delivery through Fusion Pods and calm governance. We deliver application development, modern web & cloud solutions, Azure, Power Platform and Salesforce development & integration, built for predictable outcomes.",
      path: "/surge-care",
    });
  }, []);

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
        <WhoItIsFor />
      </Suspense>

      <Suspense fallback={simpleFallback}>
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default SurgeCare;
