import Navbar from '@/components/common/colored-navbar'
import { lazy, Suspense, useEffect } from 'react';

import { useLenis } from '@/hooks/useLenis';
import { setPageSEO } from '@/utils/seo';

const ScrollToTop = lazy(
  () => import('@/components/common/ScrollToTop').then(module => ({ default: module.ScrollToTop }))
);
const Hero            = lazy(() => import('@/components/success/hero'));
const ProjectsRibbon  = lazy(() => import('@/components/success/projectsRibbon'));
const SuccessProjectsCard = lazy(() => import('@/components/success/SuccessProjectsCards'));
const Cardssuccess    = lazy(() => import('@/components/success/cards'));
const CtaSection      = lazy(() => import('@/components/success/ctaSection'));
const FooterSection   = lazy(() =>
  import('@/components/common/footer').then(module => ({ default: module.FooterSection }))
);

export const Success: React.FC = () => {
  useLenis();

  const simpleFallback = <div className="text-center py-8"></div>;

  // Set page metadata for SEO
  useEffect(() => {
    setPageSEO({
      title: "Success Stories | Delivery Case Studies | Cloud Surge",
      description:
        "Explore delivery case studies across application development, modern web & cloud solutions, Azure, Power Platform and Salesforce integrations. See how Fusion Pods help teams ship faster, scale safely, and achieve predictable outcomes.",
      path: '/success-stories',
    });
  }, []);
  return (
    <>
        <div className="font-bahnschrift">
        <Navbar/>
        <Suspense fallback={simpleFallback}>
            <ScrollToTop />
        </Suspense>
        <Suspense fallback={simpleFallback}>
            <Hero />
        </Suspense>
        <Suspense fallback={simpleFallback}>
            <ProjectsRibbon />
        </Suspense>
        <Suspense fallback={simpleFallback}>
            <SuccessProjectsCard />
        </Suspense>
        <Suspense fallback={simpleFallback}>
            <Cardssuccess />
        </Suspense>
        <Suspense fallback={simpleFallback}>
            <CtaSection />
        </Suspense>
        {/* 
        <Suspense fallback={simpleFallback}>
            <CaseStudy />
        </Suspense> */}
        <Suspense fallback={simpleFallback}>
            <FooterSection />
        </Suspense>
        </div>
    </>
  )
}
