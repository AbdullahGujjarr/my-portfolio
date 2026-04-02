import HeroCanvas from "../three/HeroCanvas";
import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative flex items-center justify-center h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] md:h-[480px] md:w-[480px]"
    >
      <HeroCanvas />

      <div
        className="relative z-20 w-[160px] h-[160px] sm:w-[190px] sm:h-[190px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden"
        style={{
          boxShadow: "0 0 30px rgba(21,209,233,0.4), 0 0 60px rgba(251,151,24,0.2)",
          border: "3px solid rgba(21,209,233,0.6)",
        }}
      >
        <img
          src="/images/3.jpg"
          alt="Abdullah"
          className="w-full h-full object-cover rounded-full"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan/10 to-orange/10" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(21,209,233,0.06) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
};

export default HeroImage;
