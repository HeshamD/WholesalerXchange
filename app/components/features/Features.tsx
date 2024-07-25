import FeaturesLeftContent from "./FeaturesLeftContent";
import FeaturesRightContent from "./FeaturesRightContent";

const Features = () => {
  return (
    <section className="flex flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full justify-end flex">
        {/* LeftSide */}
        <FeaturesLeftContent />
        {/* RightSide */}
        <FeaturesRightContent />
      </div>
    </section>
  );
};

export default Features;
