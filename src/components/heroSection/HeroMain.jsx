import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

const HeroMain = () => {
  return (
    <div className=" pt-40 pb-16">
      <div className="flex md:flex-row sm:flex-col  max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <HeroText />
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroMain;
