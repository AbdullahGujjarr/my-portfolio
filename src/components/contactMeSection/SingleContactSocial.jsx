import { motion } from "framer-motion";

const SingleContactSocial = ({ Icon, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="h-11 w-11 rounded-xl flex items-center justify-center text-orange cursor-pointer transition-all duration-300"
      style={{
        border: "1px solid rgba(251,151,24,0.35)",
        background: "rgba(251,151,24,0.05)",
        boxShadow: "0 0 8px rgba(251,151,24,0.1)",
      }}
    >
      <Icon className="text-lg" />
    </motion.a>
  );
};

export default SingleContactSocial;
