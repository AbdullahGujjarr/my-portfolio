import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-50 flex gap-2 mt-3">
      <div
        className="flex justify-between w-full items-center p-4 md:p-5 rounded-full"
        style={{
          background: "rgba(30, 25, 23, 0.75)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(251,151,24,0.3)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03)",
        }}
      >
        <NavbarLogo />
        <div className={`${menuOpen ? "block" : "hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div
        className="flex lg:hidden p-4 md:p-5 items-center justify-center rounded-full"
        style={{
          background: "rgba(30, 25, 23, 0.75)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(251,151,24,0.3)",
        }}
      >
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;
