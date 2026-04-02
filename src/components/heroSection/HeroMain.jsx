import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

const HeroMain = () => {
  return (
    <div className="pt-28 md:pt-40 pb-8 md:pb-16 relative">
      <div className="flex flex-col-reverse md:flex-row max-w-[1200px] mx-auto justify-between items-center relative px-4 gap-4 md:gap-0">
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <HeroText />
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
