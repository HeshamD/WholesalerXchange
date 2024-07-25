import React from "react";
import Image from "next/image";

const RightContent = () => {
  return (
    <div className="relative flex flex-1 items-start">
      <div className="relative z-20 flex w-[300px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
        <div className="flex flex-col">
          <div className="flexBetween">
            <p className="regular-16 text-gray-20">Location</p>
            <Image src="/close.svg" alt="close" width={24} height={24} />
          </div>
          <p className="bold-20 text-white">China</p>
        </div>

        <div className="flexBetween">
          <div className="flex flex-col">
            <p className="regular-16 block text-gray-20">Supplier</p>
            <p className="bold-20 text-white">Guangzhou Co</p>
          </div>
          <div className="flex flex-col">
            <p className="regular-16 block text-gray-20">Category</p>
            <p className="bold-20 text-white">Clothing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
