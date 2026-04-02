import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiNextdotjs, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const skills = [
  { skill: "HTML", icon: FaHtml5, color: "#E34F26" },
  { skill: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { skill: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" },
  { skill: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { skill: "ReactJS", icon: FaReact, color: "#61DAFB" },
  { skill: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { skill: "NextJS", icon: SiNextdotjs, color: "#f1e1d9" },
  { skill: "TailwindCSS", icon: RiTailwindCssFill, color: "#06B6D4" },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 my-12">
      {skills.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          whileHover={{ y: -8, scale: 1.05 }}
          className="flex flex-col items-center gap-3 group"
        >
          <div
            className="w-[80px] h-[80px] rounded-2xl flex items-center justify-center text-5xl glass"
            style={{
              border: `1px solid ${item.color}33`,
              boxShadow: `0 0 15px ${item.color}22`,
            }}
          >
            <item.icon style={{ color: item.color, filter: `drop-shadow(0 0 4px ${item.color}66)` }} />
          </div>
          <p className="text-center text-sm font-bold text-lightGrey group-hover:text-white transition-colors duration-300 uppercase tracking-wider">
            {item.skill}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSM;
