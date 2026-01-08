import { PiHexagonThin } from "react-icons/pi";

const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center h-[700px] md:h-[900px] sm:h-[600px] w-full py-24 md:py-32 sm:py-16">
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] sm:w-[320px] sm:h-[320px] rounded-full flex items-center justify-center mb-16 mt-16">
              {/* Animated Gradient Circle */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="w-full h-full rounded-full animate-spin-slow bg-gradient-to-tr from-orange via-cyan to-orange opacity-40 blur-2xl"></div>
              </div>
              {/* Animated Hexagon Gradients */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <PiHexagonThin className="w-full h-full text-orange opacity-70 animate-[spin_20s_linear_infinite]" />
                <PiHexagonThin className="w-full h-full text-orange opacity-70 blur-lg animate-[spin_20s_linear_infinite] absolute" />
                <PiHexagonThin className="w-full h-full text-cyan opacity-70 animate-[spin_20s_linear_infinite] absolute" />
                <PiHexagonThin className="w-full h-full text-cyan opacity-70 blur-lg animate-[spin_20s_linear_infinite] absolute" />
              </div>
              {/* Image on top */}
              <div className="relative z-20 w-[90%] h-[90%] rounded-full overflow-hidden border-4 border-orange shadow-lg aspect-square flex items-center justify-center ring-2 ring-orange">
                <img
                  src="../../public/images/3.jpg"
                  alt="Abdelrahman Qassem"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
