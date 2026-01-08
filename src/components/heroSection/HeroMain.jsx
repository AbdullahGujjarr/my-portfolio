import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16">
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto justify-between items-center relative px-4 gap-12 md:gap-0">
        <HeroText />
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroMain;
