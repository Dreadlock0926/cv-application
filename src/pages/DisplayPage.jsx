import React, { useEffect, useState } from "react";
import "./DisplayPage.css";

const DisplayPage = () => {
  const [contact, setContact] = useState({});
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});

  useEffect(() => {
    setContact(JSON.parse(localStorage.getItem("contact")));
    setEducation(JSON.parse(localStorage.getItem("education")));
    setExperience(JSON.parse(localStorage.getItem("experience")));
  }, []);

  useEffect(() => {
    console.log(experience);
  }, [experience]);

  return (
    <div>
      <div className="contact-container">
        <h1>{contact.name}</h1>
        <div className="contact-info">
          <p>{contact.email}</p>
          <div>
            <div className="point">{"\u2756"}</div>
            {contact.phone}
          </div>
          <div>
            <div className="point">{"\u2756"}</div>
            {contact.address}
          </div>
          <div className="portfolio-link">
            <div className="point">{"\u2756"}</div>
            <a href={contact.portfolioLink}>{contact.portfolioLink}</a>
          </div>
        </div>
      </div>
      <div className="education-container">
        <h2>EDUCATION</h2>
        {Object.keys(education).map((key) => {
          return (
            <div key={key} className="education-info">
              <div className="education-text">
                <h3>{education[key].school}</h3>
                <p>{education[key].qualification}</p>
              </div>
              <p>{education[key].graduation}</p>
            </div>
          );
        })}
      </div>
      <div className="experience-container">
        <h2>EXPERIENCE</h2>
        {Object.keys(experience).map((key) => {
          return (
            <div key={key} className="experience-info">
              <div className="experience-text">
                <h3>{experience[key].company}</h3>
                <p>{experience[key].position}</p>
                <p>{experience[key].description}</p>
              </div>
              <p>
                {experience[key].startDate} - {experience[key].endDate}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayPage;
