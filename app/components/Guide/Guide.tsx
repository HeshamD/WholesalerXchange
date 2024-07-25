import Image from "next/image";
import GuideSec_Content from "./GuideSec_Content";
const Guide = () => {
  return (
    <section className="flexCenter flex-col py-10 pb-32">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Launching a business? Connect with global wholesalers effortlessly!
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Our expert services are designed to help you navigate the
            complexities of establishing connections with international
            wholesalers. We provide personalized support to ensure your business
            starts off on the right foot.
          </p>
        </div>
      </div>
      <GuideSec_Content />
    </section>
  );
};

export default Guide;
