import React, { lazy, Suspense, useState, useEffect } from 'react';
import Loader from '@/components/common/loading';
import logo from '@/assets/redicon.svg';
import Navbar from '@/components/common/transparent-navbar';

// Import marquee logos
import copilotStudio from '@/assets/marquee_logos/CopilotStudio_scalable.svg';
import dataverse from '@/assets/marquee_logos/Dataverse_scalable.svg';
import dynamics365 from '@/assets/marquee_logos/Dynamics365_scalable.svg';
import microsoftAzure from '@/assets/marquee_logos/Microsoft_Azure.svg.png';
import microsoftCopilot from '@/assets/marquee_logos/Microsoft_Copilot_Icon.svg.png';
import powerApps from '@/assets/marquee_logos/PowerApps_scalable.svg';
import powerAutomate from '@/assets/marquee_logos/PowerAutomate_scalable.svg';
import powerBI from '@/assets/marquee_logos/PowerBI_scalable.svg';
import powerPages from '@/assets/marquee_logos/PowerPages_scalable.svg';
import powerPlatform from '@/assets/marquee_logos/PowerPlatform_scalable.svg';
import microsoftPartner from '@/assets/marquee_logos/logo-microsoft-partner_400x400.png.avif';
import salesforce from '@/assets/marquee_logos/new-salesforce-logo-blue-png-large-size.png';


const ScrollToTop = lazy(
  () => import('@/components/common/ScrollToTop').then(module => ({ default: module.ScrollToTop }))
);
const Hero = lazy(() => import('@/components/Home/hero'));
const ScrollingImages = lazy(
  () => import('@/components/Home/scrollingimages')
);
const PowerPodsCards = lazy(
  () => import('@/components/Home/scrollcards')
);
const ScrollTimeline = lazy(
  () => import('@/components/Home/scrolltimeline')
);
const PodWorkflowSection = lazy(
  () => import('@/components/Home/podworkflow')
);
const SuccessStories = lazy(
  () => import('@/components/Home/susseccstories')
);
const TailoredPodSubscriptions = lazy(
  () => import('@/components/Home/podsubscriptions')
);
const HeroSection = lazy(
  () =>
    import('@/components/Home/lowerhero').then(module => ({ default: module.HeroSection }))
);
const FooterSection = lazy(
  () =>
    import('@/components/common/footer').then(module => ({ default: module.FooterSection }))
);

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const simpleFallback = <div className="text-center py-8"></div>;

  const handleLoadingComplete = () => {
    // Simply remove the loader without any circular disclosure animation
    setIsLoading(false);
  };

  return (
    <div className="font-bahnschrift">
      {/* Loader overlay that appears on top */}
      {isLoading && (
        <Loader imageSrc={logo} altText="App logo loading" onComplete={handleLoadingComplete} />
      )}
      
      <div>
        <Navbar delayAnimation={true} />

      <Suspense fallback={simpleFallback}>
        <ScrollToTop />
      </Suspense>

      <Suspense fallback={simpleFallback}>
        <Hero />
      </Suspense>

      <Suspense fallback={simpleFallback}>
        <ScrollingImages images={[
          copilotStudio,
          dataverse,
          dynamics365,
          microsoftAzure,
          microsoftCopilot,
          powerApps,
          powerAutomate,
          powerBI,
          powerPages,
          powerPlatform,
          microsoftPartner,
          salesforce
        ]} />
      </Suspense>

      <Suspense fallback={simpleFallback}>
        <PowerPodsCards />
      </Suspense>

      <Suspense fallback={simpleFallback}>
        <ScrollTimeline />
      </Suspense>

      <Suspense fallback={simpleFallback}>
        <PodWorkflowSection />
      </Suspense>

      <Suspense fallback={simpleFallback}>
        <SuccessStories />
      </Suspense>

      <Suspense fallback={simpleFallback}>
        <TailoredPodSubscriptions />
      </Suspense>

      <Suspense fallback={simpleFallback}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={simpleFallback}>
        <FooterSection />
      </Suspense>
      </div>
    </div>
  );
};

export default Home;
