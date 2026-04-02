import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-5 h-full justify-center md:text-left sm:text-center">
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex items-center gap-3 md:justify-start sm:justify-center"
      >
        <span className="h-[1px] w-10 bg-cyan shadow-[0_0_8px_#15d1e9]" />
        <span className="text-sm uppercase tracking-[0.3em] text-cyan text-glow-cyan">
          Portfolio 2025
        </span>
        <span className="h-[1px] w-10 bg-cyan shadow-[0_0_8px_#15d1e9]" />
      </motion.div>

      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey tracking-widest"
      >
        Full Stack Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[3.2rem] lg:text-7xl sm:text-4xl font-bold uppercase leading-none"
      >
        <span className="text-orange text-glow-orange">Abdullah</span>
      </motion.h1>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-xl md:text-2xl mt-2 text-cyan min-h-[2rem]"
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
        className="text-lightGrey text-base max-w-[400px] leading-relaxed md:text-left sm:text-center"
      >
        Building modern, performant web experiences with clean code and a passion for great UX.
      </motion.p>

      <motion.div
        variants={fadeIn("up", 1.0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex gap-4 mt-2 md:justify-start sm:justify-center flex-wrap"
      >
        <Link
          spy={true}
          smooth={true}
          duration={600}
          offset={-120}
          to="projects"
          className="cursor-pointer px-6 py-3 rounded-full bg-orange text-darkBrown font-bold text-sm uppercase tracking-widest hover:bg-lightOrange transition-all duration-300 shadow-neonOrange hover:shadow-[0_0_20px_rgba(251,151,24,0.6)]"
        >
          View Work
        </Link>
        <Link
          spy={true}
          smooth={true}
          duration={600}
          offset={-120}
          to="contact"
          className="cursor-pointer px-6 py-3 rounded-full border border-cyan text-cyan font-bold text-sm uppercase tracking-widest hover:bg-cyan hover:text-darkBrown transition-all duration-300 neon-border-cyan"
        >
          Hire Me
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroText;
