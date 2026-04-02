import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ProjectsText = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="flex flex-col items-center mt-[100px] text-center"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-orange mb-3 text-glow-orange">
        What I&apos;ve Built
      </p>
      <h2 className="text-5xl md:text-6xl font-bold text-cyan text-glow-cyan mb-4">
        Projects
      </h2>
      <div className="divider-gradient w-40 mx-auto mb-8" />
      <p className="text-lg text-lightGrey max-w-[600px] mx-auto leading-relaxed">
        A selection of full-stack and front-end projects — from real-time social platforms
        to financial tools and real estate applications.
      </p>
    </motion.div>
  );
};

export default ProjectsText;
