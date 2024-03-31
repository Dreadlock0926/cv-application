import React, { useEffect, useState } from "react";

const DisplayPage = () => {
  const [contact, setContact] = useState({});
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});

  useEffect(() => {
    setContact(JSON.parse(localStorage.getItem("contact")));
    setEducation(JSON.parse(localStorage.getItem("education")));
    setExperience(JSON.parse(localStorage.getItem("experience")));
  }, []);

  return (
    <div>
      <div className="contact-container">
        <h1>{contact.name}</h1>
        <div className="contact-info">
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
          <p>{contact.address}</p>
          <a href={contact.portfolioLink}>{contact.portfolioLink}</a>
        </div>
      </div>
    </div>
  );
};

export default DisplayPage;
