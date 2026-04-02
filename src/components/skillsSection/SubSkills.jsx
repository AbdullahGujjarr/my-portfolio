import { motion } from "framer-motion";

const SubSkills = () => {
  return (
    <div className="relative border-y border-lightGrey/20 mt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange/40 via-cyan/30 to-orange/40 mix-blend-overlay z-10 pointer-events-none" />
      <motion.div
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <img
          src="/images/subSkills.jpg"
          alt="subSkills image"
          className="w-full object-cover max-h-[300px]"
          style={{ filter: "brightness(0.6) saturate(1.2)" }}
        />
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <p className="text-4xl md:text-6xl font-bold text-white/20 uppercase tracking-[0.5em] select-none">
          Skills
        </p>
      </div>
    </div>
  );
};

export default SubSkills;
