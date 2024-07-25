import React from "react";
import Image from "next/image";

const LeftContent = () => {
  return (
    <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
      <Image
        src="/camp.svg"
        alt="camp"
        width={50}
        height={50}
        className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
      />
      <h1 className="bold-52 lg:bold-88">Wholesaler Xchange</h1>
      <p className="regular-16 mt-16 text-gray-30 xl:max-w-[520px]">
        Wholesaler Xchange bridges the gap between wholesalers and suppliers
        globally, fostering seamless connections and ensuring efficient,
        reliable trade partnerships. Our platform empowers wholesalers to find
        trusted suppliers, expanding their market reach and enhancing business
        opportunities.
      </p>
    </div>
  );
};

export default LeftContent;
