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
    <div className="w-full border-y border-lightGrey/20 bg-brown/30 backdrop-blur-sm py-4 overflow-hidden relative">
      <div className="animate-marquee flex whitespace-nowrap gap-0">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-4 px-4">
            <motion.span
              className="uppercase text-lightGrey text-sm sm:text-base md:text-xl font-bold tracking-wider"
              whileHover={{ color: "#15d1e9" }}
            >
              {item}
            </motion.span>
            <span className="text-orange text-lg sm:text-xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SubHeroMain;
