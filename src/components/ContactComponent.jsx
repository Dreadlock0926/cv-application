import React from "react";
import { useState, useRef } from "react";

const ContactComponent = ({ setContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("000-000-0000");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const submitRef = useRef(null);

  const submitContact = () => {
    if (submitRef.current.innerText === "Edit") {
      nameRef.current.readOnly = false;
      emailRef.current.readOnly = false;
      phoneRef.current.readOnly = false;

      submitRef.current.innerText = "Submit";
    } else {
      const contactObject = {
        name: name,
        email: email,
        phone: phone,
      };
      setContact(contactObject);

      nameRef.current.readOnly = true;
      emailRef.current.readOnly = true;
      phoneRef.current.readOnly = true;

      submitRef.current.innerText = "Edit";
    }
  };

  return (
    <form>
      <label htmlFor="name">Enter your name:</label>
      <input
        ref={nameRef}
        onChange={(e) => setName(e.target.value)}
        type="text"
        id="name"
      />
      <label htmlFor="email">Enter your email:</label>
      <input
        ref={emailRef}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        id="email"
      />
      <label htmlFor="phone">Enter your phone number:</label>
      <input
        ref={phoneRef}
        onChange={(e) => setPhone(e.target.value)}
        type="tel"
        id="phone"
      />
      <button ref={submitRef} onClick={submitContact} type="button">
        Submit
      </button>
    </form>
  );
};

export default ContactComponent;
