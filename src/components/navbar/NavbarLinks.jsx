import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../state/menuSlice";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = ({ mobile }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (mobile) dispatch(closeMenu());
  };

  if (mobile) {
    return (
      <ul className="flex flex-col">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              to={link.section}
              onClick={handleClick}
              className="flex items-center gap-3 px-6 py-4 text-white text-base font-semibold cursor-pointer hover:text-cyan hover:bg-white/5 transition-all duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan opacity-60" />
              {link.link}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="flex flex-row gap-8">
      {links.map((link, index) => (
        <li key={index} className="group">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            to={link.section}
            className="cursor-pointer text-white hover:text-cyan transition-all duration-300 text-sm font-semibold uppercase tracking-wider"
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-400" />
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
