import React, { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { FooterSection } from '@/components/common/footer';
import Navbar from '@/components/common/transparent-navbar';
import ContactHero from '@/components/Contact/Hero';
import ContactMap from '@/components/Contact/Map';
import { setPageSEO } from '@/utils/seo';

const Contact: React.FC = () => {
  const navigate = useNavigate();

  // Set page metadata for SEO
  useEffect(() => {
    setPageSEO({
      title: "Contact Cloud Surge | Speak to a Tech Scalability Partner",
      description:
        "Speak to Cloud Surge about scaling delivery with Fusion Pods and expert teams. We support application development, modern web & cloud solutions, Azure delivery, Power Platform builds and Salesforce development & integration. Book a consultation and move faster with confidence.",
      path: '/contact',
    });
  }, []);

  return (
    <div className="font-bahnschrift">
      <Navbar/>
      <ContactHero />
      <ContactMap />
      <FooterSection />
    </div>
  );
};

export default Contact;
