import Navbar from '@/components/common/colored-navbar'
import { lazy, Suspense, useEffect } from 'react';
import { useLocation } from '@tanstack/react-router';

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
  const location = useLocation();

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

  // Scroll to hash target, polling because the section is lazy-loaded
  useEffect(() => {
    const hash = location.hash?.replace(/^#/, '');
    if (!hash) return;
    let cancelled = false;
    const start = Date.now();
    const tryScroll = () => {
      if (cancelled) return;
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (Date.now() - start < 5000) {
        requestAnimationFrame(tryScroll);
      }
    };
    tryScroll();
    return () => {
      cancelled = true;
    };
  }, [location.hash]);
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
