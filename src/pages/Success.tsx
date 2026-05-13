import Navbar from '@/components/common/colored-navbar'
import Loader from '@/components/common/loading';
import { lazy, Suspense, useEffect } from 'react';

import logo from '@/assets/redicon.svg';
import { FooterSection } from '@/components/common/footer';
import Hero from '@/components/success/hero';
import Cardssuccess from '@/components/success/cards';
import { useLenis } from '@/hooks/useLenis';
import CaseStudy from '@/components/success/casestudy';
import { setPageSEO } from '@/utils/seo';
import ProjectsRibbon from '@/components/success/projectsRibbon';
import SuccessProjectsCard from '@/components/success/SuccessProjectsCards';
import CtaSection from '@/components/success/ctaSection';
const ScrollToTop = lazy(
  () => import('@/components/common/ScrollToTop').then(module => ({ default: module.ScrollToTop }))
);

export const Success: React.FC = () => {
  useLenis();

  // Fallback loader using our Loader component with pulse effect
  const loaderWithImage = <Loader imageSrc={logo} altText="App logo loading" />;
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
