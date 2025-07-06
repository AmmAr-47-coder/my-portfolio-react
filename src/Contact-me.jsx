import React, { useRef } from "react";
import "./Contact-me.css";

function ContactMe({ supabase }) {
  const n = useRef(null);
  const e = useRef(null);
  const m = useRef(null);
  const ms = useRef(null);

  async function c(name, email, message) {
    if (name && email && message) {
      const { data, error } = await supabase
        .from("contant")
        .insert([{ name, email, massge: message }]);

      if (error) {
        alert("فشل!");
      } else {
        n.current.value = "";
        e.current.value = "";
        m.current.value = "";
        ms.current.classList.add("mss");
        setTimeout(() => ms.current.classList.remove("mss"), 4000);
      }
    }
  }

  return (
    <div className="ggg" id="ggg">
      <h1 className="hy">Contact Me</h1>

      <div className="contact-container">
        <div className="success-message" ref={ms}>
          <h1>Sent successfully!</h1>
          <p>Thank you for contacting us, we will respond to you soon.</p>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="name" placeholder="Name" required ref={n} />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            ref={e}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            ref={m}
          ></textarea>
          <button
            type="submit"
            onClick={() => c(n.current.value, e.current.value, m.current.value)}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
