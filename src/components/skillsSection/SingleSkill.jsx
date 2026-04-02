import { motion } from "framer-motion";

const SingleSkill = ({ imgSvg, text }) => {
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex flex-col items-center gap-3 cursor-default group skill-card-hover"
    >
      <div
        className="relative flex items-center justify-center h-[100px] w-[100px] rounded-2xl text-5xl border transition-all duration-400 glass"
        style={{
          borderColor: "rgba(21,209,233,0.25)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan/5 to-orange/5 group-hover:from-cyan/15 group-hover:to-orange/10 transition-all duration-400" />
        <div
          className="relative z-10 text-cyan skill-icon transition-all duration-400 group-hover:text-orange"
          style={{ filter: "drop-shadow(0 0 4px rgba(21,209,233,0.4))" }}
        >
          {imgSvg}
        </div>

        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ boxShadow: "0 0 15px rgba(21,209,233,0.25), inset 0 0 15px rgba(21,209,233,0.05)" }}
        />
      </div>

      <p className="text-white font-bold text-sm uppercase tracking-wider group-hover:text-cyan transition-colors duration-300">
        {text}
      </p>
    </motion.div>
  );
};

export default SingleSkill;
