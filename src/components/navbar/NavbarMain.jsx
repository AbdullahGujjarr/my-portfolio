import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const glassStyle = {
  background: "rgba(22, 18, 16, 0.88)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  border: "1px solid rgba(251,151,24,0.25)",
  boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
};

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-3">
      <div className="max-w-[1300px] mx-auto">
        <div
          className="flex justify-between items-center px-5 py-3.5 rounded-full"
          style={glassStyle}
        >
          <NavbarLogo />

          <div className="hidden lg:block">
            <NavbarLinks />
          </div>

          <div className="hidden lg:block">
            <NavbarBtn />
          </div>

          <div className="block lg:hidden">
            <NavbarToggler />
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scaleY: 0.96 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -8, scaleY: 0.96 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              style={{
                ...glassStyle,
                border: "1px solid rgba(21,209,233,0.2)",
                transformOrigin: "top",
              }}
              className="mt-2 rounded-2xl overflow-hidden lg:hidden"
            >
              <div className="py-3">
                <NavbarLinks mobile />
              </div>
              <div className="px-5 pb-5 pt-1 border-t border-white/5">
                <NavbarBtn mobile />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavbarMain;
