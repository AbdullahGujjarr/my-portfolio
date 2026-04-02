import { Link } from "react-scroll";
import { motion } from "framer-motion";

const footerLinks = [
  { name: "About Me", section: "about" },
  { name: "Skills", section: "skills" },
  { name: "Projects", section: "projects" },
];

const FooterMain = () => {
  return (
    <footer className="px-4 mt-24">
      <div className="divider-gradient w-full max-w-[1200px] mx-auto" />
      <div className="max-w-[1200px] mx-auto pt-8 pb-4">
        <div className="md:flex justify-between items-center sm:hidden mb-6">
          <motion.p
            whileHover={{ color: "#15d1e9" }}
            className="text-3xl text-lightGrey font-bold transition-colors duration-300 cursor-default"
          >
            Abdullah
          </motion.p>
          <ul className="flex gap-6 text-lightGrey text-base">
            {footerLinks.map((item) => (
              <li key={item.section}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-cyan transition-all duration-300 cursor-pointer animated-underline"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="divider-gradient w-full mb-4" />
        <p className="text-right text-sm text-lightGrey/50">
          © {new Date().getFullYear()} Abdullah | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterMain;
