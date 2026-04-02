import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiCheckCircle, FiAlertCircle, FiX } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const inputClass =
  "w-full rounded-xl px-4 py-3 text-white placeholder-lightGrey/60 outline-none transition-all duration-300 focus:ring-2 focus:ring-cyan/60 focus:border-cyan/60";

const inputStyle = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
};

const focusStyle = {};

const SuccessBanner = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -80, scale: 0.92 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -60, scale: 0.94 }}
    transition={{ type: "spring", stiffness: 280, damping: 24 }}
    className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-[520px]"
  >
    <div
      className="relative flex items-center gap-4 px-6 py-5 rounded-2xl"
      style={{
        background: "rgba(21, 209, 233, 0.1)",
        border: "1px solid rgba(21, 209, 233, 0.4)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 8px 40px rgba(21,209,233,0.25), 0 0 0 1px rgba(21,209,233,0.1)",
      }}
    >
      <motion.div
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.15, type: "spring", stiffness: 300 }}
        className="text-cyan text-4xl flex-shrink-0"
      >
        <FiCheckCircle />
      </motion.div>
      <div className="flex-1">
        <p className="text-white font-bold text-lg leading-tight">
          Message Delivered!
        </p>
        <p className="text-lightGrey text-sm mt-0.5">
          Thanks for reaching out. Abdullah will get back to you shortly.
        </p>
      </div>
      <button
        onClick={onClose}
        className="text-lightGrey hover:text-white transition-colors duration-200 flex-shrink-0"
      >
        <FiX className="text-xl" />
      </button>

      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: 5, ease: "linear" }}
        className="absolute bottom-0 left-0 h-[2px] rounded-full"
        style={{ background: "linear-gradient(to right, #15d1e9, #fb9718)" }}
        onAnimationComplete={onClose}
      />
    </div>
  </motion.div>
);

const ErrorBanner = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -80, scale: 0.92 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -60, scale: 0.94 }}
    transition={{ type: "spring", stiffness: 280, damping: 24 }}
    className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-[520px]"
  >
    <div
      className="relative flex items-center gap-4 px-6 py-5 rounded-2xl"
      style={{
        background: "rgba(251, 151, 24, 0.1)",
        border: "1px solid rgba(251, 151, 24, 0.4)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 8px 40px rgba(251,151,24,0.2)",
      }}
    >
      <FiAlertCircle className="text-orange text-4xl flex-shrink-0" />
      <div className="flex-1">
        <p className="text-white font-bold text-lg">Failed to Send</p>
        <p className="text-lightGrey text-sm mt-0.5">
          Something went wrong. Please try again or email directly.
        </p>
      </div>
      <button
        onClick={onClose}
        className="text-lightGrey hover:text-white transition-colors duration-200 flex-shrink-0"
      >
        <FiX className="text-xl" />
      </button>
    </div>
  </motion.div>
);

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("message", form.message);
      data.append("_subject", `Hire Request from ${form.name} — Portfolio`);
      data.append("_captcha", "false");
      data.append("_template", "table");

      const res = await fetch(
        "https://formsubmit.co/ajax/abdullahpkpk91@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        }
      );

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Send failed");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {status === "success" && (
          <SuccessBanner onClose={() => setStatus(null)} />
        )}
        {status === "error" && (
          <ErrorBanner onClose={() => setStatus(null)} />
        )}
      </AnimatePresence>

      <form onSubmit={sendEmail} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs uppercase tracking-widest text-lightGrey">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            required
            className={inputClass}
            style={inputStyle}
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs uppercase tracking-widest text-lightGrey">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="john@company.com"
            required
            className={inputClass}
            style={inputStyle}
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs uppercase tracking-widest text-lightGrey">
            Message
          </label>
          <textarea
            name="message"
            rows={7}
            placeholder="Hi Abdullah, I'd like to hire you for..."
            required
            className={`${inputClass} resize-none`}
            style={inputStyle}
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSending}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-3 rounded-xl h-12 font-bold text-base uppercase tracking-widest transition-all duration-400 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{
            background: isSending
              ? "rgba(21,209,233,0.3)"
              : "linear-gradient(135deg, #15d1e9, #009fb3)",
            boxShadow: isSending ? "none" : "0 0 20px rgba(21,209,233,0.35)",
            color: "#1e1917",
          }}
        >
          {isSending ? (
            <>
              <AiOutlineLoading3Quarters className="animate-spin text-xl text-white" />
              <span className="text-white">Sending...</span>
            </>
          ) : (
            <>
              <FiSend className="text-xl" />
              Send Message
            </>
          )}
        </motion.button>
      </form>
    </>
  );
};

export default ContactForm;
