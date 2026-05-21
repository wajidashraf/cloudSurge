import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import logo from "@/assets/redicon.svg";
import { ArrowIcon } from "../common/svgIcons";
import { Link } from "@tanstack/react-router";

interface PlanDetail {
  label: string;
  value: string;
}

interface Plan {
  name: string;
  gradient: string;
  textColor: string;
  labelColor: string;
  borderColor: string;
  image?: string;
  imgSize?: number;
  details: string[];
  mobileDetails?: PlanDetail[];
  isServices?: boolean;
}

const plans: Plan[] = [
  {
    name: "Services",
    gradient: "from-[#D9D9D9] to-[#D9D9D9]",
    textColor: "text-[#818181]",
    labelColor: "text-[#818181]",
    borderColor: "border-[#aaaaaa]",
    details: [
      "Number of Pod days",
      "Pod selection",
      "Teams updates",
      "Project calls",
      "Strategic Architecture calls",
      "Priority access to senior consultant",
    ],
    isServices: true,
  },
  {
    name: "Starter",
    gradient: "from-[#FACCCB] to-[#FACCCB]",
    textColor: "text-[#ef4123]",
    labelColor: "text-[#ef4123]",
    borderColor: "border-[#f09080]",
    image: logo,
    imgSize: 30,
    details: [
      "6 (18 consultant days)",
      "Yes",
      "Yes",
      "Weekly",
      "Bi Monthly",
      "No",
    ],
    mobileDetails: [
      { label: "Number of Pod days", value: "6 (18 consultant days)" },
      { label: "Pod selection", value: "Pre-chosen Pod" },
      { label: "Constant Teams Updates", value: "Yes" },
      { label: "Project Calls", value: "Weekly" },
      { label: "Strategic Architecture Calls", value: "Bi-Monthly" },
      { label: "Priority Access to Senior Consultant", value: "No" },
    ],
  },
  {
    name: "Intermediate",
    gradient: "from-[#F06A61] to-[#F06A61]",
    textColor: "text-[#FFE3E3]",
    labelColor: "text-[#FFE3E3]",
    borderColor: "border-[#d7d7d7]",
    image: logo,
    imgSize: 40,
    details: [
      "12 (36 consultant days)",
      "Yes",
      "Yes",
      "Weekly",
      "Monthly",
      "Yes",
    ],
    mobileDetails: [
      { label: "Number of Pod days", value: "12 (36 consultant days)" },
      { label: "Pod selection", value: "Where Possible" },
      { label: "Constant Teams Updates", value: "Yes" },
      { label: "Project Calls", value: "Weekly" },
      { label: "Strategic Architecture Calls", value: "Monthly" },
      { label: "Priority Access to Senior Consultant", value: "Yes" },
    ],
  },
  {
    name: "Advanced",
    gradient: "from-[#EF4123] to-[#EF4123]",
    textColor: "text-[#ffffff]",
    labelColor: "text-[#ffffff]",
    borderColor: "border-[#f2f2f2]",
    image: logo,
    imgSize: 60,
    details: [
      "18 (54 consultant days)",
      "Dedicated Pod",
      "Yes",
      "Weekly × 2",
      "Monthly × 2",
      "Yes",
    ],
    mobileDetails: [
      { label: "Number of Pod days", value: "18 (54 consultant days)" },
      { label: "Pod selection", value: "Dedicated Pod" },
      { label: "Constant Teams Updates", value: "Yes" },
      { label: "Project Calls", value: "Weekly × 2" },
      { label: "Strategic Architecture Calls", value: "Monthly × 2" },
      { label: "Priority Access to Senior Consultant", value: "Yes" },
    ],
  },
];

const TailoredPodSubscriptions: React.FC = () => {
  useEffect(() => {
    if (
      sessionStorage.getItem("scrollToPricing") === "1" ||
      window.location.hash === "#pricing"
    ) {
      sessionStorage.removeItem("scrollToPricing");
      setTimeout(() => {
        document
          .getElementById("pricing")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <section
      id="pricing"
      className="container mx-auto w-full px-6 sm:px-10 md:px-5 2xl:px-[150px] -mt-16 pb-30 bg-white"
    >
      <h2 className="text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-extrabold text-center text-[#ef4123] mb-16 md:mb-32">
        Tailored Pod <br /> Subscriptions
      </h2>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {plans.map((plan, idx) => (
          <PlanCard key={plan.name} plan={plan} index={idx} />
        ))}
      </div>
    </section>
  );
};

interface PlanCardProps {
  plan: Plan;
  index: number;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative flex flex-col h-full group ">
      {/* Floating icon — only for non-services cards */}
      {plan.image && (
        <div
          className="absolute top-0 z-10 mt-4 lg:mt-0"
          style={{
            left: "5%",
            width: `${plan.imgSize ?? 30}px`,
            height: `${plan.imgSize ?? 30}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src={plan.image}
            alt={`${plan.name} icon`}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      {/* Card body */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: 0.2 + index * 0.1,
          ease: "easeOut",
        }}
        whileHover={{
          y: -8,
          boxShadow: plan.isServices
            ? "0 20px 40px rgba(0,0,0,0.12)"
            : "0 20px 40px rgba(239,65,35,0.25)",
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        className={`w-full bg-gradient-to-br ${plan.gradient} text-left mt-12 p-6 2xl:p-8 pt-5 flex flex-col h-full cursor-default`}
      >
        <h3
          className={`text-[22px] md:text-[24px] lg:text-[22px] xl:text-[24px] 2xl:text-[28px] font-bold ${plan.textColor} mb-10 2xl:mb-14 mt-4`}
        >
          {plan.name}
        </h3>

        {/* Mobile: show labels only for plan cards, not services */}
        {!plan.isServices && plan.mobileDetails && (
          <ul className="lg:hidden space-y-3 flex-1">
            {plan.mobileDetails.map((item, i) => (
              <motion.li
                key={i}
                className={`border-b ${plan.borderColor} pb-3 ${plan.textColor} text-sm`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.08 }}
              >
                <span className="font-semibold">{item.label}:</span>{" "}
                {item.value}
              </motion.li>
            ))}
          </ul>
        )}

        {/* Desktop: uniform list for all cards */}
        <ul
          className={`${!plan.isServices ? "hidden lg:block" : "block"} space-y-3 flex-1`}
        >
          {plan.details.map((d, i) => (
            <motion.li
              key={i}
              className={`border-b ${plan.borderColor} pb-3 2xl:pb-4 ${plan.textColor} text-sm 2xl:text-base`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.08 }}
            >
              {d || " "}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <style>
        {`
         .subs-button{
          font-size: 18px;
          
        }
        }
        `}
      </style>
      {index === 3 && (
        <a
          href="https://bookings.cloud.microsoft/book/FreeScaleUp@cloudsurge.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex absolute -bottom-16 subs-button"
        >
          <ArrowIcon />
          <span className="ml-2  lg:ml-4 text-gray-500">
            Schedule Consultation
          </span>
        </a>
      )}
    </div>
  );
};

export default TailoredPodSubscriptions;
