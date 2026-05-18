import React, { lazy, Suspense, useState } from 'react';
import Loader from '@/components/common/loading';
import logo from '@/assets/redicon.svg';
import Navbar from '@/components/common/transparent-navbar';
import { useLenis } from '@/hooks/useLenis';

// Import marquee logos
import copilotStudio from '@/assets/marquee_logos/CopilotStudio_scalable.svg';
import dataverse from '@/assets/marquee_logos/Dataverse_scalable.svg';
import dynamics365 from '@/assets/marquee_logos/Dynamics365_scalable.svg';
import microsoftAzure from '@/assets/marquee_logos/Microsoft_Azure.svg.png';
import microsoftCopilot from '@/assets/marquee_logos/Microsoft_Copilot_Icon.svg.png';
import powerPlatform from '@/assets/marquee_logos/PowerPlatform_scalable.svg';
import microsoftPartner from '@/assets/marquee_logos/logo-microsoft-partner_400x400.png.avif';
import salesforce from '@/assets/marquee_logos/new-salesforce-logo-blue-png-large-size.png';
import TrustedClientsSection from '@/components/Home/trustedClientsSection';
import WhatWeDeliver from '@/components/Home/whatWeDeliver';
import WhoWeHelp from '@/components/Home/whoWeHelp';
import WhatWeOffer from '@/components/Home/whatWeOffer';
import CtaSection from '@/components/Home/ctaSection';
import ToolsActionButton from '@/components/common/ToolsActionButton';


const ScrollToTop = lazy(
  () => import('@/components/common/ScrollToTop').then(module => ({ default: module.ScrollToTop }))
);
const Hero = lazy(() => import('@/components/Home/hero'));
const ScrollingImages = lazy(
  () => import('@/components/Home/scrollingimages')
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
const FooterSection = lazy(
  () =>
    import('@/components/common/footer').then(module => ({ default: module.FooterSection }))
);


export const Home: React.FC = () => {
  useLenis();
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
      <TrustedClientsSection/>
      </Suspense>
      <Suspense fallback={simpleFallback}>
      <WhatWeDeliver/>
      </Suspense>

      <Suspense fallback={simpleFallback}>
        <ScrollingImages images={[
          copilotStudio,
          dataverse,
          dynamics365,
          microsoftAzure,
          microsoftCopilot,
          powerPlatform,
          microsoftPartner,
          salesforce
          
        ]} />
      </Suspense>
      <Suspense fallback={simpleFallback}>
        <PodWorkflowSection />
      </Suspense>
      <Suspense fallback={simpleFallback}>
        <WhoWeHelp />
      </Suspense>

      <Suspense fallback={simpleFallback}>
        <WhatWeOffer />
      </Suspense>




      <Suspense fallback={simpleFallback}>
        <SuccessStories />
      </Suspense>

      <Suspense fallback={simpleFallback}>
        <TailoredPodSubscriptions />
      </Suspense>

      <Suspense fallback={simpleFallback}>
        <CtaSection />
      </Suspense> 
      <Suspense fallback={simpleFallback}>
        <FooterSection />
      </Suspense>
      </div>

      <ToolsActionButton />
    </div>
  );
};

export default Home;
