import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();
  useEffect(() => {
    emailjs.init("I6HAT5mUZH7WHabGE");
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage("");

    // Primary: try SDK sendForm
    emailjs
      .sendForm(
        "service_ko3hmpt",
        "template_ahbmmqd",
        form.current,
        "I6HAT5mUZH7WHabGE"
      )
      .then(() => {
        setEmail("");
        setName("");
        setMessage("");
        setSuccess("Message Sent Successfully");
        alert("Message sent successfully");
      })
      .catch((sdkErr) => {
        console.error("emailjs.sendForm failed:", sdkErr);
        // Secondary: try SDK send with explicit params
        const params = {
          from_name: name,
          from_email: email,
          message: message,
        };
        return emailjs
          .send(
            "service_ko3hmpt",
            "template_ahbmmqd",
            params,
            "I6HAT5mUZH7WHabGE"
          )
          .then(() => {
            setEmail("");
            setName("");
            setMessage("");
            setSuccess("Message Sent Successfully (SDK fallback)");
            alert("Message sent successfully (SDK fallback)");
          })
          .catch((sdkErr2) => {
            console.error("emailjs.send fallback failed:", sdkErr2);
            // Tertiary: try EmailJS REST API
            const body = {
              service_id: "service_ko3hmpt",
              template_id: "template_ahbmmqd",
              user_id: "I6HAT5mUZH7WHabGE",
              template_params: params,
            };
            return fetch("https://api.emailjs.com/api/v1.0/email/send", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body),
            })
              .then((res) => {
                if (!res.ok) throw new Error(`REST send failed: ${res.status}`);
                return res.json();
              })
              .then(() => {
                setEmail("");
                setName("");
                setMessage("");
                setSuccess("Message Sent Successfully (REST fallback)");
                alert("Message sent successfully (REST fallback)");
              })
              .catch((restErr) => {
                console.error("REST fallback failed:", restErr);
                const msg =
                  restErr && restErr.message
                    ? restErr.message
                    : "Failed to send message. Please try again later.";
                setErrorMessage(msg);
                alert(`Failed to send message. ${msg}`);
              });
          });
      })
      .finally(() => setIsSending(false));
  };

  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          type="text"
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className=" rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          disabled={isSending}
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
