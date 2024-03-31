import React from "react";
import { useState, useRef } from "react";

const EducationComponent = ({ id, setEducation }) => {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [graduation, setGraduation] = useState("");

  const setEducationObject = () => {
    const educationObject = {
      school: school,
      qualification: degree,
      graduation: graduation,
    };
    setEducation((prevState) => ({ ...prevState, [id]: educationObject }));
  };

  return (
    <form>
      <label htmlFor="school">Enter your school:</label>
      <input
        type="text"
        id="school"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
      />
      <label htmlFor="degree">Enter your qualification:</label>
      <input
        type="text"
        id="degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      />
      <label htmlFor="graduation">Enter your graduation date:</label>
      <input
        type="date"
        id="graduation"
        value={graduation}
        onChange={(e) => setGraduation(e.target.value)}
      />
      <button type="button" onClick={setEducationObject}>
        Submit
      </button>
    </form>
  );
};

export default EducationComponent;
