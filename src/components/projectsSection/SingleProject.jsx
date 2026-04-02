import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`flex w-full flex-col items-center gap-6 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className={`flex flex-col gap-2 items-center ${align === "left" ? "md:items-end" : "md:items-start"} w-full md:w-auto`}>
        <span className="text-xs uppercase tracking-[0.2em] text-orange">{year}</span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center md:text-left hover:text-orange transition-colors duration-300">
          {name}
        </h2>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan/40 text-cyan text-sm font-semibold hover:bg-cyan hover:text-darkBrown transition-all duration-300 group mt-1"
          style={{ boxShadow: "0 0 8px rgba(21,209,233,0.1)" }}
        >
          Live Preview
          <BsFillArrowUpRightCircleFill className="group-hover:rotate-45 transition-transform duration-300" />
        </a>
      </div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative w-full max-w-[420px] rounded-2xl overflow-hidden"
        style={{
          border: "1px solid rgba(21,209,233,0.2)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          aspectRatio: "16/9",
        }}
      >
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-darkBrown/70 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-orange/5 hover:from-cyan/15 hover:to-orange/10 transition-all duration-400" />
      </motion.div>
    </motion.div>
  );
};

export default SingleProject;
