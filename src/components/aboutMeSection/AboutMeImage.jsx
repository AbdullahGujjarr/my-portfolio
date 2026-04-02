import { motion } from "framer-motion";

const AboutMeImage = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="relative flex-shrink-0"
      style={{ width: "min(260px, 80vw)", height: "min(420px, 120vw)" }}
    >
      <div
        className="absolute inset-0 rounded-[50px] overflow-hidden z-10"
        style={{
          boxShadow: "0 0 30px rgba(21,209,233,0.2)",
          border: "2px solid rgba(21,209,233,0.2)",
        }}
      >
        <img
          src="/images/about-me.jpg"
          alt="About Me Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkBrown/40 to-transparent" />
      </div>

      <div
        className="absolute bottom-[-20px] left-[-20px] right-[20px] top-[20px] rounded-[50px] -z-0"
        style={{
          background: "linear-gradient(135deg, #fb9718, #15d1e9)",
          opacity: 0.65,
          filter: "blur(1px)",
        }}
      />
    </motion.div>
  );
};

export default AboutMeImage;
