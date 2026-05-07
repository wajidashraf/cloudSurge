import React, { lazy, Suspense } from 'react';
import Navbar from '@/components/common/colored-navbar';

const FooterSection = lazy(() =>
  import('@/components/common/footer').then((mod) => ({
    default: mod.FooterSection,
  }))
);

const TermsOfService: React.FC = () => {
  const simpleFallback = <div className="text-center py-8"></div>;

  return (
    <div className="font-bahnschrift bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20 md:pt-28 lg:pt-40 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ef4123] via-[#ff6b47] to-[#ff8a6b] opacity-5"></div>
        <div className="relative w-full mx-auto px-4 md:px-12 text-left md:text-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#ef4123]/10 text-[#ef4123] text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Legal Documentation
          </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#ef4123] via-[#ff6b47] to-[#d63316] bg-clip-text text-transparent mb-6">
            Terms & Conditions
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-full md:max-w-3xl mx-auto md:mx-auto text-left md:text-center">
            Please read these terms and conditions carefully before using our services.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative w-full mx-auto px-4 md:px-12 pb-20">
        <div className=" overflow-hidden">
          <div className="p-4 md:p-8 lg:p-12 xl:p-16">
            <div className="prose prose-base md:prose-lg max-w-none text-gray-700 text-left" style={{'--tw-prose-body': 'rgb(55 65 81)', '--tw-prose-headings': '#ef4123', '--tw-prose-lead': 'rgb(55 65 81)', '--tw-prose-links': 'rgb(55 65 81)', '--tw-prose-bold': 'rgb(55 65 81)', '--tw-prose-counters': 'rgb(55 65 81)', '--tw-prose-bullets': 'rgb(55 65 81)', '--tw-prose-hr': 'rgb(55 65 81)', '--tw-prose-quotes': 'rgb(55 65 81)', '--tw-prose-quote-borders': 'rgb(55 65 81)', '--tw-prose-captions': 'rgb(55 65 81)', '--tw-prose-code': 'rgb(55 65 81)', '--tw-prose-pre-code': 'rgb(55 65 81)', '--tw-prose-pre-bg': 'rgb(55 65 81)', '--tw-prose-th-borders': 'rgb(55 65 81)', '--tw-prose-td-borders': 'rgb(55 65 81)'} as React.CSSProperties}>
              <div className="bg-gradient-to-r from-[#ef4123]/5 to-[#ff6b47]/5 p-6 mb-8 border border-[#ef4123]/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#ef4123] flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#ef4123] mb-2">Important Notice</h3>
                    <p className="text-gray-700 leading-relaxed mb-0">
                      Please read these terms and conditions carefully before using our services.
                    </p>
                  </div>
                </div>
              </div>
      
<h2 className="text-2xl font-semibold mt-8 text-[#ef4123]">Cloud Surge Solutions Ltd – Terms of Service</h2>
<h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Last Updated: 31 July 2025</h3>
      <p>
        Welcome to Cloud Surge. Please read these Terms of Service (“Terms”) carefully before using our website and services.
      </p>
      
      <h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Definitions</h3>
      <ul className="list-disc pl-6 text-left">
        <li><strong>Company</strong>, “We”, “Us”, or “Our” refers to Cloud Surge Solutions Ltd, registered in England and Wales (Company No. 14421129), with its registered office at 7 St James Place, Birmingham B7 4JE, United Kingdom.</li>
        <li><strong>Service</strong> refers to the website (www.cloudsurge.uk), our consulting services, subscription-based delivery services, workshops, training programmes, and any other offerings under the Cloud Surge brand.</li>
        <li><strong>You</strong> or “User” means the individual or legal entity accessing or using the Service.</li>
        <li><strong>Affiliate</strong> means any entity that controls, is controlled by, or is under common control with Cloud Surge.</li>
        <li><strong>Content</strong> means any text, images, software, code, audio, video, or other material made available via the Service.</li>
        <li><strong>Fusion Pod</strong> refers to our proprietary 3-person IT delivery team model, inclusive of technical and management capabilities.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Acceptance of Terms</h3>
      <p>
        By accessing or using the Service, You agree to be bound by these Terms. If You do not agree to these Terms, You must not use our Service.
      </p>
      <p>
        You confirm that You are at least 18 years of age and capable of entering into binding legal contracts.
      </p>

<h2 className="text-2xl font-semibold mt-8 text-[#ef4123]">Privacy Policy</h2>
      <p>
        Your use of our Service is subject to our Privacy Policy, which can be found at www.cloudsurge.uk/privacy. Please review this policy carefully to understand how we collect, use, and protect your data.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Use of Service</h3>
      <ul className="list-disc pl-6 text-left">
        <li>Use the Service in accordance with all applicable laws and regulations</li>
        <li>Not engage in any unlawful, harmful, fraudulent, or abusive behaviour</li>
        <li>Not attempt to gain unauthorised access to our systems or data</li>
        <li>Not copy, modify, or distribute our Content without permission</li>
      </ul>
      <p>
        We reserve the right to suspend or terminate your access to the Service for any breach of these Terms.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Intellectual Property</h3>
      <p>
        All intellectual property rights in the Service, including our technology, software, designs, processes, documentation, and branding, are owned by or licensed to Cloud Surge.
      </p>
      <p>
        Nothing in these Terms grants you any rights to our intellectual property except as necessary to use the Service as intended.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Subscriptions and Payments</h3>
      <p>
        Certain services are offered on a subscription basis (e.g. Fusion Pod tiers). Subscription terms, usage limits, billing cycles, and cancellation policies are set out in the respective service agreement.
      </p>
      <p>
        All payments are due as agreed in the service contract or invoice terms. Late payments may result in service suspension or termination.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Links to Third-Party Websites</h3>
      <p>
        Our Service may contain links to external websites not operated by us. We do not endorse or assume responsibility for the content, policies, or practices of any third-party site.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Service Availability & Changes</h3>
      <p>
        We aim to ensure the Service is reliable and available, but we do not guarantee uninterrupted access. We may update, modify, or discontinue features or portions of the Service at any time without liability.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Termination</h3>
      <p>
        We reserve the right to suspend or terminate access to the Service without prior notice if you breach these Terms or if we deem your use to be inappropriate, harmful, or illegal.
      </p>
      <p>
        Upon termination, your rights to use the Service cease immediately.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Limitation of Liability</h3>
      <p>
        To the maximum extent permitted under UK law:
      </p>
      <ul className="list-disc pl-6 text-left">
        <li>We are not liable for indirect, incidental, or consequential damages, including loss of profits, business, or data</li>
        <li>Our total liability under these Terms is limited to the amount paid by you in the 12 months preceding the claim</li>
      </ul>
      <p>
        Nothing in these Terms limits liability for fraud, death, or personal injury caused by negligence.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-[#ef4123]">"As Is" Disclaimer</h3>
      <p>
        Our Service is provided “as is” and “as available” without warranties of any kind. We make no guarantees that the Service will be error-free, uninterrupted, or secure.
      </p>
      <p>
        We disclaim all implied warranties including merchantability, fitness for purpose, and non-infringement.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Governing Law and Jurisdiction</h3>
      <p>
        These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Consumer Rights</h3>
      <p>
        If you are a consumer resident in the UK or EU, nothing in these Terms affects your statutory rights under consumer protection legislation.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Severability and Waiver</h3>
      <p>
        If any part of these Terms is found to be unenforceable, the remaining sections will remain in full force. Our failure to enforce any right or provision is not a waiver of that right or provision.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Updates to Terms</h3>
      <p>
        We may revise these Terms from time to time. Material changes will be communicated via our website or email. Continued use of the Service after changes means you accept the updated Terms.
      </p>

      <h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Contact Us</h3>
      <p>
        If you have questions about these Terms, contact us at:
      </p>
      <p>
        Email: <a href="mailto:info@cloudsurge.uk" className="text-[#ef4123] hover:underline">info@cloudsurge.uk</a>
      </p>
      <p>
        Address: Cloud Surge Solutions Ltd, 7 St James Place, Birmingham B7 4JE, United Kingdom
      </p>

      
        </div>
      </div>
      
      {/* Footer */}
    </div>
  </div>
      <Suspense fallback={simpleFallback}>
        <FooterSection />
      </Suspense>
  </div>
  );
};

export default TermsOfService;
