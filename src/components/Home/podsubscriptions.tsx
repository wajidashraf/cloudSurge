import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import logo from '@/assets/redicon.svg';

const services: string[] = [
  'Number of Pod days',
  'Pod selection',
  'Teams updates',
  'Project calls',
  'Strategic Architecture calls',
  'Priority access to senior consultant',
];

interface PlanDetail {
  label: string;
  value: string;
}

interface Plan {
  name: string;
  gradient: string;
  textColor: string;
  image: string;
  imgSize: number;
  details: string[];
  mobileDetails: PlanDetail[];
}

const plans: Plan[] = [
  {
    name: 'Starter',
    gradient: 'from-[#FACCCB] to-[#FACCCB]',
    textColor: 'text-[#ef4123]',
    image: logo,
    imgSize: 30,
    details: ['6 (18 consultant days)', 'Yes', 'Yes', 'Weekly', 'Bi Monthly', 'No'],
    mobileDetails: [
      { label: 'Number of Pod days', value: '6 (18 consultant days)' },
      { label: 'Pod selection', value: 'Pre-chosen Pod' },
      { label: 'Constant Teams Updates', value: 'Yes' },
      { label: 'Project Calls', value: 'Weekly' },
      { label: 'Strategic Architecture Calls', value: 'Bi-Monthly' },
      { label: 'Priority Access to Senior Consultant', value: 'No' },
    ],
  },
  {
    name: 'Intermediate',
    gradient: 'from-[#F06A61] to-[#F06A61]',
    textColor: 'text-[#FFE3E3]',
    image: logo,
    imgSize: 40,
    details: ['12 (36 consultant days)', 'Yes', 'Yes', 'Weekly', 'Monthly', 'Yes'],
    mobileDetails: [
      { label: 'Number of Pod days', value: '12 (36 consultant days)' },
      { label: 'Pod selection', value: 'Where Possible' },
      { label: 'Constant Teams Updates', value: 'Yes' },
      { label: 'Project Calls', value: 'Weekly' },
      { label: 'Strategic Architecture Calls', value: 'Monthly' },
      { label: 'Priority Access to Senior Consultant', value: 'Yes' },
    ],
  },
  {
    name: 'Advanced',
    gradient: 'from-[#EF4123] to-[#EF4123]',
    textColor: 'text-[#ffffff]',
    image: logo,
    imgSize: 60,
    details: ['18 (54 consultant days)', 'Dedicated Pod', 'Yes', 'Weekly × 2', 'Monthly × 2', 'Yes'],
    mobileDetails: [
      { label: 'Number of Pod days', value: '18 (54 consultant days)' },
      { label: 'Pod selection', value: 'Dedicated Pod' },
      { label: 'Constant Teams Updates', value: 'Yes' },
      { label: 'Project Calls', value: 'Weekly × 2' },
      { label: 'Strategic Architecture Calls', value: 'Monthly × 2' },
      { label: 'Priority Access to Senior Consultant', value: 'Yes' },
    ],
  },
];

const TailoredPodSubscriptions: React.FC = () => (
  <section id="pricing" className="w-full px-8 md:px-5 2xl:px-[150px] -mt-16 pb-20 bg-white ">
    <style>{`
      .plan-icon {
        width: 30px;
        height: 30px;
      }
      @media (min-width: 768px) {
        .plan-icon {
          width: var(--icon-size);
          height: var(--icon-size);
        }
      }
    `}</style>
    <h2 className="text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-extrabold text-center text-[#ef4123] mb-16 md:mb-32">
      Tailored Pod <br /> Subscriptions
    </h2>

    <div className="w-full flex flex-col lg:flex-row gap-8 items-stretch">
      {/* Services column - hidden on mobile, visible on desktop */}
      <motion.div
        className="hidden lg:flex relative flex-1 h-full text-left bg-[#D9D9D9] mt-8 p-6 md:p-6 lg:p-6 xl:p-6 2xl:p-8 pt-[20px] flex-col"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[26px] 2xl:text-[30px] font-bold text-[#818181] mb-12 md:mb-12 lg:mb-12 xl:mb-12 2xl:mb-16 mt-6">Services</h3>
        <ul className="space-y-3 flex-1">
          {services.map((s, i) => (
            <motion.li
              key={i}
              className="text-[#818181] border-b pb-3 md:pb-3 lg:pb-3 xl:pb-3 2xl:pb-4 text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              {s}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Plan cards */}
      {plans.map((plan, idx) => (
        <PlanCard key={plan.name} plan={plan} index={idx} />
      ))}
    </div>

    <div className="mt-10 text-left lg:text-right mr-[100px] 2xl:mr-[150px]">
      <a href="https://outlook.office.com/book/FreeScaleUp@cloudsurge.uk/s/Abz0MDpi3kuyMsftsPEmMQ2?ismsaljsauthenabled=true" target="_blank" rel="noopener noreferrer" className="text-[#EB4124] text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
        ↳ <span className=" text-gray-500 hover:underline text-sm md:text-base lg:text-base xl:text-base 2xl:text-lg">Schedule a consultation</span>
      </a>
    </div>
  </section>
);

interface PlanCardProps {
  plan: Plan;
  index: number;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="relative flex-1 h-full ">
      {/* Icon */}
      <div
        className="absolute top-0 z-10 plan-icon"
        style={{
          left: '5%',
          '--icon-size': `${plan.imgSize}px`,
          transform: 'translate(-50%, -50%)',
        } as React.CSSProperties & { '--icon-size': string }}
      >
        <img
          src={plan.image}
          alt={`${plan.name} icon`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Card body */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
        whileHover={{ scale: 1.03 }}
        className={`w-full bg-gradient-to-br text-left ${plan.gradient} mt-8 p-6 md:p-6 lg:p-6 xl:p-6 2xl:p-8 pt-[20px] flex flex-col justify-between h-full`}
      >
        <div>
          <h3 className={`text-[24px] md:text-[24px] lg:text-[26px] xl:text-[26px] 2xl:text-[30px] font-bold ${plan.textColor} flex items-center mb-12 md:mb-12 lg:mb-12 xl:mb-12 2xl:mb-16 mt-6`}>
            {plan.name}
          </h3>

          {/* Mobile view with labels */}
          <ul className="lg:hidden space-y-3">
            {plan.mobileDetails.map((item, idx2) => (
              <motion.li
                key={idx2}
                className={`border-b pb-3 ${plan.textColor} text-sm`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx2 * 0.1 }}
              >
                <span className="font-semibold">{item.label}:</span> {item.value}
              </motion.li>
            ))}
          </ul>

          {/* Desktop view without labels */}
          <ul className="hidden lg:block space-y-3">
            {plan.details.map((d, idx2) => (
              <motion.li
                key={idx2}
                className={`border-b pb-3 md:pb-3 lg:pb-3 xl:pb-3 2xl:pb-4 ${plan.textColor} text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx2 * 0.1 }}
              >
                {d || '\u00A0'}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default TailoredPodSubscriptions;
