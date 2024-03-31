import React from "react";
import { useState, useRef } from "react";

const EducationComponent = ({ id, setEducation }) => {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [graduation, setGraduation] = useState("");

  const schoolRef = useRef(null);
  const degreeRef = useRef(null);
  const graduationRef = useRef(null);

  const submitRef = useRef(null);

  const setEducationObject = () => {
    if (submitRef.current.innerText === "Edit") {
      schoolRef.current.readOnly = false;
      degreeRef.current.readOnly = false;
      graduationRef.current.readOnly = false;

      submitRef.current.innerText = "Submit";
      return;
    } else {
      const educationObject = {
        school: school,
        qualification: degree,
        graduation: graduation,
      };
      setEducation((prevState) => ({ ...prevState, [id]: educationObject }));

      schoolRef.current.readOnly = true;
      degreeRef.current.readOnly = true;
      graduationRef.current.readOnly = true;

      submitRef.current.innerText = "Edit";
    }
  };

  return (
    <form>
      <label htmlFor="school">Enter your school:</label>
      <input
        ref={schoolRef}
        type="text"
        id="school"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
      />
      <label htmlFor="degree">Enter your qualification:</label>
      <input
        ref={degreeRef}
        type="text"
        id="degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      />
      <label htmlFor="graduation">Enter your graduation date:</label>
      <input
        ref={graduationRef}
        type="date"
        id="graduation"
        value={graduation}
        onChange={(e) => setGraduation(e.target.value)}
      />
      <button ref={submitRef} type="button" onClick={setEducationObject}>
        Submit
      </button>
    </form>
  );
};

export default EducationComponent;
