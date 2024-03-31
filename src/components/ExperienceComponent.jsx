import React from "react";
import { useState, useRef } from "react";

const ExperienceComponent = ({ id, setExperience }) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const companyRef = useRef(null);
  const positionRef = useRef(null);
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  const descriptionRef = useRef(null);

  const submitRef = useRef(null);

  const setExperienceObject = () => {
    if (submitRef.current.innerText === "Edit") {
      companyRef.current.readOnly = false;
      positionRef.current.readOnly = false;
      startDateRef.current.readOnly = false;
      endDateRef.current.readOnly = false;
      descriptionRef.current.readOnly = false;

      submitRef.current.innerText = "Submit";
      return;
    } else {
      const experienceObject = {
        company: company,
        position: position,
        startDate: startDate,
        endDate: endDate,
        description: description,
      };
      setExperience((prevState) => ({ ...prevState, [id]: experienceObject }));

      companyRef.current.readOnly = true;
      positionRef.current.readOnly = true;
      startDateRef.current.readOnly = true;
      endDateRef.current.readOnly = true;
      descriptionRef.current.readOnly = true;

      submitRef.current.innerText = "Edit";
    }
  };

  return (
    <form>
      <label htmlFor="company">Enter your company:</label>
      <input
        ref={companyRef}
        type="text"
        id="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <label htmlFor="position">Enter your position:</label>
      <input
        ref={positionRef}
        type="text"
        id="position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <label htmlFor="startDate">Enter your start date:</label>
      <input
        ref={startDateRef}
        type="date"
        id="startDate"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <label htmlFor="endDate">Enter your end date:</label>
      <input
        ref={endDateRef}
        type="date"
        id="endDate"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <label htmlFor="description">Enter your description:</label>
      <input
        ref={descriptionRef}
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button ref={submitRef} type="button" onClick={setExperienceObject}>
        Submit
      </button>
    </form>
  );
};

export default ExperienceComponent;
