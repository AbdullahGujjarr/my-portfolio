import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <button
      onClick={() => dispatch(toggleMenu())}
      className="w-9 h-9 flex items-center justify-center rounded-full border transition-all duration-300"
      style={{
        borderColor: menuOpen
          ? "rgba(21,209,233,0.5)"
          : "rgba(251,151,24,0.4)",
        background: menuOpen
          ? "rgba(21,209,233,0.08)"
          : "rgba(251,151,24,0.05)",
      }}
      aria-label="Toggle menu"
    >
      <AnimatePresence mode="wait">
        {menuOpen ? (
          <motion.span
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="text-cyan text-lg"
          >
            <FiX />
          </motion.span>
        ) : (
          <motion.span
            key="open"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="text-orange text-lg"
          >
            <GiHamburgerMenu />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

export default NavbarToggler;
