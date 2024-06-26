import React from "react";
import { useState, useRef } from "react";

const ContactComponent = ({ setContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("000-000-0000");
  const [address, setAddress] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const portfolioLinkRef = useRef(null);

  const submitRef = useRef(null);

  const submitContact = () => {
    if (submitRef.current.innerText === "Edit") {
      nameRef.current.readOnly = false;
      emailRef.current.readOnly = false;
      phoneRef.current.readOnly = false;
      addressRef.current.readOnly = false;
      portfolioLinkRef.current.readOnly = false;

      submitRef.current.innerText = "Submit";
    } else {
      const contactObject = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        portfolioLink: portfolioLink,
      };
      setContact(contactObject);

      nameRef.current.readOnly = true;
      emailRef.current.readOnly = true;
      phoneRef.current.readOnly = true;
      addressRef.current.readOnly = true;
      portfolioLinkRef.current.readOnly = true;

      submitRef.current.innerText = "Edit";
    }
  };

  return (
    <form>
      <label htmlFor="name">NAME</label>
      <input
        ref={nameRef}
        onChange={(e) => setName(e.target.value)}
        type="text"
        id="name"
      />
      <label htmlFor="email">EMAIL</label>
      <input
        ref={emailRef}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        id="email"
      />
      <label htmlFor="phone">CONTACT NUMBER</label>
      <input
        ref={phoneRef}
        onChange={(e) => setPhone(e.target.value)}
        type="tel"
        id="phone"
      />
      <label htmlFor="address">ADDRESS</label>
      <input
        ref={addressRef}
        onChange={(e) => setAddress(e.target.value)}
        type="text"
        id="address"
      />
      <label htmlFor="portfolioLink">PORTFOLIO LINK</label>
      <input
        ref={portfolioLinkRef}
        onChange={(e) => setPortfolioLink(e.target.value)}
        type="url"
        id="portfolioLink"
      />
      <button
        className="submit-button-contact"
        ref={submitRef}
        onClick={submitContact}
        type="button"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default ContactComponent;
