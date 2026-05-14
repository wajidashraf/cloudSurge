import React, { lazy, Suspense, useEffect } from 'react';
import Navbar from '@/components/common/colored-navbar';
import Loader from '@/components/common/loading';

import logo from '@/assets/redicon.svg';
import Hero from '@/components/Careers/hero';
import CardsGrid from '@/components/Careers/cards';
import Gojra from '@/components/Careers/gojra';
import OpeningsSection from '@/components/Careers/apply';
import { FooterSection } from '@/components/common/footer';
import { setPageSEO } from '@/utils/seo';
import CareerPortal from '@/components/Careers/careerPortal';
import CareerCta from '@/components/Careers/careerCTA';
import { useLenis } from '@/hooks/useLenis';
const ScrollToTop = lazy(
  () => import('@/components/common/ScrollToTop').then(module => ({ default: module.ScrollToTop }))
);

export const Careers: React.FC = () => {
  useLenis();
  // Fallback loader using our Loader component with pulse effect
  const loaderWithImage = <Loader imageSrc={logo} altText="App logo loading" />;
  const simpleFallback = <div className="text-center py-8"></div>;

  // Set page metadata for SEO
  useEffect(() => {
    setPageSEO({
      title: "Careers at Cloud Surge | Join Our Delivery & AI Teams",
      description:
        "Join Cloud Surge to build what matters: Fusion Pods, application development and modern web & cloud solutions. Work across Azure, Power Platform and Salesforce projects with global teams, clear standards and real growth pathways.",
      path: '/careers',
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
            <CardsGrid />
        </Suspense>
        <Suspense fallback={simpleFallback}>
            <CareerPortal/>
        </Suspense>
        <Suspense fallback={simpleFallback}>
            <OpeningsSection />
        </Suspense>
        <Suspense fallback={simpleFallback}>
            <Gojra />
        </Suspense>
        <Suspense fallback={simpleFallback}>
            <CareerCta />
        </Suspense>
        <Suspense fallback={simpleFallback}>
            <FooterSection />
        </Suspense>
        </div>
    </>
  )
}
