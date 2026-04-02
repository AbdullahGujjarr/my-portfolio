import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left w-full max-w-[500px] mx-auto md:mx-0">
      <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-orange mb-3">
        Who I Am
      </p>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyan text-glow-cyan mb-4">
        About Me
      </h2>
      <div className="divider-gradient w-28 md:w-32 mb-6 md:mb-8 mx-auto md:mx-0" />

      <p className="text-lightGrey leading-relaxed text-sm sm:text-base mb-4">
        I&apos;m <span className="text-orange font-semibold">Abdullah</span>, a web developer and tech enthusiast with hands-on
        experience in building modern, responsive web applications. I specialize
        in front-end development with React, HTML, CSS, and JavaScript, and I&apos;m
        also proficient in back-end technologies like Node.js and MongoDB.
      </p>
      <p className="text-lightGrey leading-relaxed text-sm sm:text-base">
        With a strong problem-solving mindset and focus on clean, maintainable
        code, I build real-world projects that improve user experience. Always
        excited to explore new tools and frameworks.
      </p>

      <Link
        spy={true}
        smooth={true}
        duration={600}
        offset={-120}
        to="projects"
        className="cursor-pointer px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-orange text-white text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-orange hover:text-darkBrown transition-all duration-400 mt-8"
        style={{ boxShadow: "0 0 10px rgba(251,151,24,0.2)" }}
      >
        View Projects
      </Link>
    </div>
  );
};

export default AboutMeText;
