import Image from "next/image";
const FeaturesLeftContent = () => {
  return (
    <div className="flex flex-1 lg:min-h-[900px]">
      {/* to increase the height on large devices*/}
      <Image
        src="/phone.png"
        alt="phone"
        width={440}
        height={1000}
        className="feature-phone"
      />
    </div>
  );
};

export default FeaturesLeftContent;
