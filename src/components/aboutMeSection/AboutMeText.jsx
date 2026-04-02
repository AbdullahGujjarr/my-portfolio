import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center max-w-[550px]">
      <p className="text-sm uppercase tracking-[0.3em] text-orange mb-3 text-glow-orange">
        Who I Am
      </p>
      <h2 className="text-5xl md:text-6xl font-bold text-cyan text-glow-cyan mb-6">
        About Me
      </h2>
      <div className="divider-gradient w-32 mb-8 md:ml-0 sm:mx-auto" />
      <p className="text-lightGrey leading-relaxed text-base mb-6">
        I&apos;m <span className="text-orange font-semibold">Abdullah</span>, a web developer and tech enthusiast with hands-on
        experience in building modern, responsive web applications. I specialize
        in front-end development with React, HTML, CSS, and JavaScript, and I&apos;m
        also proficient in back-end technologies like Node.js and MongoDB.
      </p>
      <p className="text-lightGrey leading-relaxed text-base">
        With a strong problem-solving mindset and focus on clean, maintainable
        code, I build real-world projects that improve user experience. I&apos;m
        passionate about continuous learning and always excited to explore new
        tools and frameworks.
      </p>
      <Link
        spy={true}
        smooth={true}
        duration={600}
        offset={-120}
        to="projects"
        className="cursor-pointer px-6 py-3 rounded-full border border-orange text-white text-sm font-bold uppercase tracking-widest hover:bg-orange hover:text-darkBrown transition-all duration-400 mt-10 md:self-start sm:self-center neon-border-orange"
      >
        View Projects
      </Link>
    </div>
  );
};

export default AboutMeText;
