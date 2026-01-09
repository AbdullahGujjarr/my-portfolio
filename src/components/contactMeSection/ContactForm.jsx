import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess("");

    try {
      const response = await fetch("https://formspree.io/f/xvgzlowy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `New portfolio message from ${name}`,
          _replyto: email,
        }),
      });

      if (response.ok) {
        setSuccess("Message Sent Successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      {success && <p className="text-cyan mb-4 font-bold">{success}</p>}
      <form onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2 text-white"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2 text-white"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className="rounded-lg bg-lightBrown p-2 text-white"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          disabled={isSending}
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500 disabled:opacity-50"
        >
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
