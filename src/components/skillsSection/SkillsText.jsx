import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px] text-center">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-orange mb-3 text-glow-orange">
          What I Work With
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-cyan text-glow-cyan mb-6">
          My Skills
        </h2>
        <div className="divider-gradient w-40 mx-auto mb-8" />
        <p className="text-lg text-lightGrey max-w-[600px] mx-auto leading-relaxed">
          I not only work with these technologies but excel at applying them with
          best practices to deliver high-quality, scalable results.
        </p>
      </motion.div>
    </div>
  );
};

export default SkillsText;
