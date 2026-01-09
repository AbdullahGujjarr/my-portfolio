import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "MERN - E-state Application",
    year: "Mar2024",
    align: "right",
    image: "/images/mern-state-pic.png",
    link: "https://pro-estate.onrender.com/",
  },
  {
    name: "Finance Tracking Web Application",
    year: "April2025",
    align: "left",
    image: "/images/finance-tracker-pic.png",
    link: "https://staging-finance-tracker-app-kih2.frontend.encr.app/",
  },
  {
    name: "Social Media App",
    year: "Jan2025",
    align: "right",
    image: "/images/social-app-pic.png",
    link: "https://x-next-three.vercel.app/",
  },
  {
    name: "Sleep Tracker",
    year: "May2024",
    align: "left",
    image: "/images/sleep-tracker.png",
    link: "https://sleep-tracker-opal.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
