import React from "react";
import Image from "next/image";

const GuideSec_Content = () => {
  return (
    <div className="flexCenter max-container relative w-full">
      <Image
        src="/boat.png"
        alt="boat"
        width={1440}
        height={580}
        className="w-full object-cover object-center 2xl:rounded-5xl"
      />

      <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
        <Image
          src="/meter.svg"
          alt="meter"
          width={16}
          height={158}
          className="h-full w-auto"
        />
        <div className="flexBetween flex-col">
          <div className="flex w-full flex-col">
            <div className="flexBetween w-full">
              <p className="regular-16 text-gray-20">Wholesaller</p>
              <p className="bold-16 text-green-50 pl-4">Instantly</p>
            </div>
            <p className="bold-20 mt-2">Pakistan</p>
          </div>

          <div className="flex w-full flex-col">
            <p className="regular-16 text-gray-20">Start from</p>
            <h4 className="bold-20 mt-2 whitespace-nowrap">WWS</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideSec_Content;
