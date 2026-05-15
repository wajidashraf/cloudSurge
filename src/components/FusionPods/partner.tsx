import React from "react";
import partnerLogo from "@/assets/partner.png";
import rows from "@/assets/partner_row.png";

const PartnerSection: React.FC = () => {
  return (
    <section className="bg-[#E4E4E4]">
      <section className="max-w-[1280] mx-auto  py-12 px-6 md:px-8 lg:px-6 flex flex-col lg:flex-row items-start md:items-start lg:items-center gap-8 md:gap-10 lg:gap-12 2xl:gap-0">
        {/* Text Content */}

        <p className="text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-[#5D5D5D] text-left mb-4 md:mb-0 max-w-full md:max-w-[65%] lg:max-w-[60%] xl:max-w-[55%] 2xl:max-w-[50%] md:ml-0 lg:ml-[3%] 2xl:ml-[3%]">
          Fusion Pods are used by Tech Startups, Microsoft MSPs, CSPs, ISV
          Partners, product companies, and enterprise IT teams to add delivery
          capacity quickly, without the overhead of permanent hiring or the risk
          of individual subcontracting.
          <br />
          <br />
          Whether you need a team for a specific engagement or ongoing delivery
          capacity on a subscription basis, a Pod integrates with your existing
          setup and adapts as requirements change.
        </p>

        {/* Logos */}
        <div className="w-full md:w-auto lg:pl-0 xl:pl-8 2xl:pl-30 flex flex-col items-start md:items-center lg:items-start space-y-6">
          <img
            src={partnerLogo}
            alt="Microsoft Partner"
            className="h-12 md:h-15 lg:h-15 xl:h-15 2xl:h-15 w-auto"
          />
          <div className="flex space-x-6 justify-start md:justify-center lg:justify-start">
            <img
              src={rows}
              alt="Microsoft Dynamics 365"
              className="w-full md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%]"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default PartnerSection;
