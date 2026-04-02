import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div className={`flex flex-col gap-3 ${align === "left" ? "md:items-end" : "md:items-start"} sm:items-center`}>
        <span className="text-xs uppercase tracking-[0.2em] text-orange">{year}</span>
        <h2
          className="md:text-3xl sm:text-2xl font-bold text-white hover:text-orange transition-colors duration-300"
        >
          {name}
        </h2>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan/40 text-cyan text-sm font-semibold hover:bg-cyan hover:text-darkBrown transition-all duration-400 neon-border-cyan group mt-2"
        >
          Live Preview
          <BsFillArrowUpRightCircleFill className="group-hover:rotate-45 transition-transform duration-300" />
        </a>
      </div>

      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative max-h-[230px] max-w-[420px] w-full rounded-2xl overflow-hidden card-hover"
        style={{
          border: "1px solid rgba(21,209,233,0.2)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}
      >
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-darkBrown/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-orange/10 opacity-0 hover:opacity-100 transition-opacity duration-400" />
        <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-400"
          style={{ boxShadow: "inset 0 0 20px rgba(21,209,233,0.15)" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SingleProject;
