import { motion } from "framer-motion";

const items = [
  "Fast Learner",
  "Team Work",
  "Logical Thinking",
  "Problem Solver",
  "Clean Code",
  "Full Stack",
  "Fast Learner",
  "Team Work",
  "Logical Thinking",
  "Problem Solver",
  "Clean Code",
  "Full Stack",
];

const SubHeroMain = () => {
  return (
    <div className="w-full border-y border-lightGrey/30 bg-brown/40 backdrop-blur-sm py-5 overflow-hidden relative">
      <div className="animate-marquee flex whitespace-nowrap gap-0">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-6">
            <motion.span
              className="uppercase text-lightGrey text-xl md:text-2xl font-bold tracking-wider"
              whileHover={{ color: "#15d1e9", textShadow: "0 0 8px #15d1e9" }}
            >
              {item}
            </motion.span>
            <span className="text-orange text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SubHeroMain;
