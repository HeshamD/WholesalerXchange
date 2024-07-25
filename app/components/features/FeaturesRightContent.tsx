import Image from "next/image";
import { FEATURES } from "./constants";
import FeatureItem from "./FeatureItem";

const FeaturesRightContent = () => {
  return (
    <div className="z-20 flex w-full flex-col lg:w-[60%]">
      <div className="relative">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
        />
        <h2 className="bold-40 lg:bold-64">Our Features</h2>
      </div>
      <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
        {FEATURES.map((feature) => (
          <FeatureItem
            key={feature.title}
            title={feature.title}
            icon={feature.icon}
            description={feature.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default FeaturesRightContent;
