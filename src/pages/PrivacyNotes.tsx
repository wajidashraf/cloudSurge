import React, { lazy, Suspense } from 'react';
import Navbar from '@/components/common/colored-navbar';

const FooterSection = lazy(() =>
  import('@/components/common/footer').then((mod) => ({
    default: mod.FooterSection,
  }))
);

const PrivacyNotes: React.FC = () => {
  const simpleFallback = <div className="text-center py-8"></div>;

  return (
    <div className="font-bahnschrift bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      <Navbar />
      
      <div className="relative pt-20 md:pt-28 lg:pt-40 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ef4123] via-[#ff6b47] to-[#ff8a6b] opacity-5"></div>
        <div className="relative w-full mx-auto px-4 md:px-12 text-left md:text-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#ef4123]/10 text-[#ef4123] text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Privacy Notice
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#ef4123] via-[#ff6b47] to-[#d63316] bg-clip-text text-transparent mb-6">
            Privacy Notice
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-full md:max-w-3xl mx-auto md:mx-auto text-left md:text-center">
            Last Updated: 31 July 2025
          </p>
        </div>
      </div>
      
      <div className="relative w-full mx-auto px-4 md:px-12 pb-20">
        <div className="overflow-hidden">
          <div className="p-4 md:p-8 lg:p-12 xl:p-16">
            <div className="prose prose-base md:prose-lg max-w-none text-gray-700 text-left" style={{'--tw-prose-body': 'rgb(55 65 81)', '--tw-prose-headings': '#ef4123', '--tw-prose-lead': 'rgb(55 65 81)', '--tw-prose-links': 'rgb(55 65 81)', '--tw-prose-bold': 'rgb(55 65 81)', '--tw-prose-counters': 'rgb(55 65 81)', '--tw-prose-bullets': 'rgb(55 65 81)', '--tw-prose-hr': 'rgb(55 65 81)', '--tw-prose-quotes': 'rgb(55 65 81)', '--tw-prose-quote-borders': 'rgb(55 65 81)', '--tw-prose-captions': 'rgb(55 65 81)', '--tw-prose-code': 'rgb(55 65 81)', '--tw-prose-pre-code': 'rgb(55 65 81)', '--tw-prose-pre-bg': 'rgb(55 65 81)', '--tw-prose-th-borders': 'rgb(55 65 81)', '--tw-prose-td-borders': 'rgb(55 65 81)'} as React.CSSProperties}>
<h2 className="text-2xl font-semibold mt-8 text-[#ef4123]">Privacy Notice</h2>

Cloud Surge Solutions Ltd ("Cloud Surge", "we", "us", or "our") is committed to protecting the privacy of our clients, partners, employees, website visitors, and job applicants. This Privacy Notice explains how we collect, use, share and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and other applicable privacy laws.

<h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Who We Are</h3>
Cloud Surge Solutions Ltd is a company registered in England and Wales (Company Number: 14421129), with its registered office at:

7 St. James Place, Birmingham B7 4JE, UK

For data protection matters, you can contact us at: privacy@cloudsurge.uk

We provide on-demand IT delivery teams (“Fusion Pods”) to businesses primarily within the Microsoft technology ecosystem, including Dynamics 365, Power Platform, and Azure. Our clients range from enterprise IT teams to MSPs and internal business units across the UK and globally.

<h3 className="text-xl font-semibold mt-4 text-[#ef4123]">How We Collect Your Data</h3>
We collect personal data when you interact with us directly, including when you:
<ul className="list-disc pl-6 text-left">
<li>Visit our website or social media pages</li>
<li>Fill in a contact form, request a demo, or subscribe to our newsletter</li>
<li>Engage with us as a client, supplier, or network partner</li>
<li>Apply for a role or enrol in Cloud Surge Academy</li>
<li>Participate in our workshops, audits, or events</li>
<li>Communicate with us by phone, email or other channels</li>
</ul>
<h3 className="text-xl font-semibold mt-4 text-[#ef4123]">What Data We Collect</h3>
Depending on your interaction with us, we may collect:
<h4 className="text-lg font-semibold mt-2 text-[#ef4123]">Personal & Contact Details</h4>
<ul className="list-disc pl-6 text-left">
<li>Name</li>
<li>Email address</li>
<li>Telephone number</li>
<li>Job title</li>
<li>Company name</li>
</ul>
<h4 className="text-lg font-semibold mt-2 text-[#ef4123]">Business Information</h4>
<ul className="list-disc pl-6 text-left">
<li>Organisation size, industry, goals, and service needs</li>
<li>Service agreements and contract details</li>
</ul>
<h4 className="text-lg font-semibold mt-2 text-[#ef4123]">Technical Data</h4>
<ul className="list-disc pl-6 text-left">
<li>IP address, device type, browser type</li>
<li>Site usage data (via cookies and analytics tools)</li>
</ul>
<h4 className="text-lg font-semibold mt-2 text-[#ef4123]">Recruitment Data</h4>
<ul className="list-disc pl-6 text-left">
<li>CVs, portfolios, interview notes</li>
<li>Right to work information</li>
<li>Educational background and skills assessments</li>
</ul>
<h4 className="text-lg font-semibold mt-2 text-[#ef4123]">Partner/Delivery Data</h4>
<ul className="list-disc pl-6 text-left">
<li>Resource allocations and performance data</li>
<li>Project communications and logs</li>
</ul>
<h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Lawful Basis for Processing</h3>
We only process your personal data where we have a lawful basis to do so. This includes:
<ul className="list-disc pl-6 text-left">
<li>Contractual necessity – to deliver the services you’ve requested</li>
<li>Legitimate interests – to improve our services, respond to enquiries, and manage partnerships</li>
<li>Consent – for newsletters, email marketing, and analytics (you can withdraw at any time)</li>
<li>Legal obligation – where required by law, including HMRC or regulatory authorities</li>
</ul>
<h3 className="text-xl font-semibold mt-4 text-[#ef4123]">How We Use Your Information</h3>
We use your data to:
<ul className="list-disc pl-6 text-left">
<li>Deliver IT services via our Pod model and manage projects</li>
<li>Respond to enquiries and provide customer support</li>
<li>Customise your experience on our website and digital channels</li>
<li>Manage our talent and recruitment process</li>
<li>Run marketing campaigns (with opt-in consent)</li>
<li>Operate Cloud Surge Academy training and progression</li>
<li>Improve our services through analytics and feedback</li>
<li>Maintain our business records and fulfil legal obligations</li>
</ul>
<h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Sharing Your Data</h3>
We never sell your data. We may share it with trusted third parties such as:
<ul className="list-disc pl-6 text-left">
<li>Our subcontractors and delivery team members (bound by contract)</li>
<li>CRM, analytics, or marketing platforms (e.g. HubSpot, Google Analytics)</li>
<li>Professional advisers (e.g. accountants, legal counsel)</li>
<li>Regulators, law enforcement or courts (where legally required)</li>
</ul>
Where we work with partners in countries outside the UK (e.g. Pakistan), we implement appropriate safeguards such as standard contractual clauses to ensure your data remains protected.

<h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Cookies and Analytics</h3>
Our website uses cookies to improve your browsing experience and analyse site traffic. You can manage your cookie preferences through your browser settings or our cookie banner. Analytics tools help us understand how visitors engage with our website, but do not directly identify individuals.

<h3 className="text-xl font-semibold mt-4 text-[#ef4123]">How Long We Keep Your Data</h3>
We retain personal data only as long as necessary:
<ul className="list-disc pl-6 text-left">
<li>For service delivery: duration of the contract + 6 years</li>
<li>For marketing: until you unsubscribe or withdraw consent</li>
<li>For recruitment: up to 12 months after application unless otherwise agreed</li>
<li>For legal obligations: as long as legally required</li>
</ul>
<h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Your Rights</h3>
You have the right to:
<ul className="list-disc pl-6 text-left">
<li>Access a copy of your personal data</li>
<li>Request correction or deletion of your data</li>
<li>Object to or restrict certain processing</li>
<li>Withdraw consent (where applicable)</li>
<li>Lodge a complaint with the Information Commissioner’s Office (ICO): www.ico.org.uk</li>
</ul>
To exercise any of these rights, email privacy@cloudsurge.uk.

<h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Third Party Links</h3>
Our website may contain links to external websites. We are not responsible for the privacy practices of those sites.

<h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Changes to This Privacy Notice</h3>
We may update this policy occasionally to reflect changes in law or our practices. We encourage you to review this page regularly. The date of the most recent update is shown at the top of this notice.

<h3 className="text-xl font-semibold mt-4 text-[#ef4123]">Contact Us</h3>
If you have any questions about this Privacy Notice or our data practices, please contact:

Data Protection Lead

Cloud Surge Solutions Ltd

7 St. James Place, Birmingham B7 4JE
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={simpleFallback}>
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default PrivacyNotes;

