import { motion } from "framer-motion";

const AboutMeImage = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="h-[500px] w-[300px] relative flex-shrink-0"
    >
      <div className="h-[500px] w-[300px] rounded-[60px] absolute overflow-hidden z-10"
        style={{
          boxShadow: "0 0 30px rgba(21,209,233,0.2)",
          border: "2px solid rgba(21,209,233,0.2)",
        }}
      >
        <img
          src="/images/about-me.jpg"
          alt="About Me Image"
          className="h-full w-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkBrown/40 to-transparent" />
      </div>

      <div
        className="h-[500px] w-[250px] absolute bottom-[-30px] left-[-30px] rounded-[60px] -z-0"
        style={{
          background: "linear-gradient(135deg, #fb9718, #15d1e9)",
          opacity: 0.7,
          filter: "blur(2px)",
        }}
      />

      <div
        className="absolute top-[-10px] right-[-10px] w-[80px] h-[80px] rounded-full pointer-events-none -z-0"
        style={{
          background: "radial-gradient(circle, rgba(21,209,233,0.6) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
    </motion.div>
  );
};

export default AboutMeImage;
