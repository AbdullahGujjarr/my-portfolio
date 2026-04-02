import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../state/menuSlice";

const NavbarBtn = ({ mobile }) => {
  const dispatch = useDispatch();

  if (mobile) {
    return (
      <div className="flex flex-col gap-3 pt-2">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="contact"
          onClick={() => dispatch(closeMenu())}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm uppercase tracking-wider text-darkBrown cursor-pointer transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #15d1e9, #009fb3)",
            boxShadow: "0 0 16px rgba(21,209,233,0.3)",
          }}
        >
          Hire Me <LuArrowDownRight />
        </Link>
        <a
          href="/cv.pdf"
          download
          onClick={() => dispatch(closeMenu())}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm uppercase tracking-wider text-orange border cursor-pointer transition-all duration-300 hover:bg-orange/10"
          style={{ borderColor: "rgba(251,151,24,0.4)" }}
        >
          Download CV <LuArrowDownRight />
        </a>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <Link
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        to="contact"
        className="flex items-center gap-1.5 px-5 py-2 rounded-full font-bold text-sm text-darkBrown cursor-pointer transition-all duration-300 hover:scale-105"
        style={{
          background: "linear-gradient(135deg, #15d1e9, #009fb3)",
          boxShadow: "0 0 12px rgba(21,209,233,0.35)",
        }}
      >
        Hire Me <LuArrowDownRight />
      </Link>
      <a
        href="/cv.pdf"
        download
        className="flex items-center gap-1.5 px-5 py-2 rounded-full font-bold text-sm text-orange border cursor-pointer transition-all duration-300 hover:bg-orange/10 hover:scale-105"
        style={{ borderColor: "rgba(251,151,24,0.4)" }}
      >
        Download CV <LuArrowDownRight />
      </a>
    </div>
  );
};

export default NavbarBtn;
