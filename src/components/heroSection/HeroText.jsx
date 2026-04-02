import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center text-center md:text-left w-full max-w-[500px]">
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex items-center gap-3 justify-center md:justify-start"
      >
        <span className="h-[1px] w-8 bg-cyan shadow-[0_0_8px_#15d1e9]" />
        <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-cyan text-glow-cyan">
          Portfolio 2025
        </span>
        <span className="h-[1px] w-8 bg-cyan shadow-[0_0_8px_#15d1e9]" />
      </motion.div>

      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-sm sm:text-base lg:text-xl uppercase text-lightGrey tracking-widest"
      >
        Full Stack Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-4xl sm:text-5xl md:text-[3.2rem] lg:text-7xl font-bold uppercase leading-none"
      >
        <span className="text-orange text-glow-orange">Abdullah</span>
      </motion.h1>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-base sm:text-lg md:text-xl text-cyan min-h-[1.8rem]"
      >
        <Typewriter
          words={[
            "A Software Web Developer",
            "A Full Stack Developer",
            "A Passionate Web Developer",
            "A MERN Stack Engineer",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1200}
        />
      </motion.div>

      <motion.p
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lightGrey text-sm sm:text-base leading-relaxed mx-auto md:mx-0 max-w-[340px] md:max-w-none"
      >
        Building modern, performant web experiences with clean code and a passion for great UX.
      </motion.p>

      <motion.div
        variants={fadeIn("up", 1.0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex gap-3 mt-1 justify-center md:justify-start flex-wrap"
      >
        <Link
          spy={true}
          smooth={true}
          duration={600}
          offset={-120}
          to="projects"
          className="cursor-pointer px-5 py-2.5 rounded-full bg-orange text-darkBrown font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-lightOrange transition-all duration-300"
          style={{ boxShadow: "0 0 16px rgba(251,151,24,0.4)" }}
        >
          View Work
        </Link>
        <Link
          spy={true}
          smooth={true}
          duration={600}
          offset={-120}
          to="contact"
          className="cursor-pointer px-5 py-2.5 rounded-full border border-cyan text-cyan font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-cyan hover:text-darkBrown transition-all duration-300"
          style={{ boxShadow: "0 0 10px rgba(21,209,233,0.2)" }}
        >
          Hire Me
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroText;
