import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <div className="flex gap-2">
      <button className="px-4 py-2 rounded-full text-lg font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
        <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
          Hire Me
        </Link>
        <div className="hidden md:block">
          <LuArrowDownRight />
        </div>
      </button>
      <button className="px-4 py-2 rounded-full text-lg font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
        <a href="/cv.pdf" download>
          Download CV
        </a>
        <div className="hidden md:block">
          <LuArrowDownRight />
        </div>
      </button>
    </div>
  );
};

export default NavbarBtn;
