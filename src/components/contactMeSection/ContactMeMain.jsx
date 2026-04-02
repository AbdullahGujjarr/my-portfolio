import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto mt-[120px] px-4"
    >
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="text-center mb-12"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-orange mb-3 text-glow-orange">
          Get In Touch
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-cyan text-glow-cyan mb-4">
          Contact Me
        </h2>
        <div className="divider-gradient w-40 mx-auto" />
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="flex flex-col lg:flex-row justify-between gap-12 md:gap-16 p-6 md:p-10 rounded-3xl glass"
        style={{
          border: "1px solid rgba(21,209,233,0.15)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.4), 0 0 40px rgba(21,209,233,0.05)",
        }}
      >
        <ContactMeLeft />
        <ContactMeRight />
      </motion.div>
    </div>
  );
};

export default ContactMeMain;
