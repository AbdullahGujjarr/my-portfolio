import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto mt-16 md:mt-[120px] px-4"
    >
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="text-center mb-8 md:mb-12"
      >
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-orange mb-3">
          Get In Touch
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyan text-glow-cyan mb-4">
          Contact Me
        </h2>
        <div className="divider-gradient w-32 md:w-40 mx-auto" />
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-16 p-5 sm:p-6 md:p-10 rounded-2xl md:rounded-3xl glass"
        style={{
          border: "1px solid rgba(21,209,233,0.15)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.4), 0 0 40px rgba(21,209,233,0.05)",
        }}
      >
        <ContactMeLeft />
        <div className="w-full lg:w-px h-px lg:h-auto bg-white/5" />
        <ContactMeRight />
      </motion.div>
    </div>
  );
};

export default ContactMeMain;
