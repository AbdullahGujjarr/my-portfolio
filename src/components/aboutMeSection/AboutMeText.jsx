import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Abdullah a web developer and tech enthusiast with hands-on
        experience in building modern, responsive web applications. I specialize
        in front-end development with React, HTML, CSS, and JavaScript, and I’m
        also familiar with back-end technologies like Node.js and MongoDB. With
        a strong problem-solving mindset and a focus on clean, maintainable
        code, I enjoy working on real-world projects that improve user
        experience and functionality. I’m passionate about continuous learning
        and always excited to explore new tools and frameworks in the world of
        web development.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
