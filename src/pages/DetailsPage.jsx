import ContactComponent from "../components/ContactComponent";
import EducationComponent from "../components/EducationComponent";
import ExperienceComponent from "../components/ExperienceComponent";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DetailsPage() {
  const [contact, setContact] = useState({});
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});

  const [educationComponents, setEducationComponents] = useState([
    <EducationComponent key={0} id={0} setEducation={setEducation} />,
  ]);

  const [experienceComponents, setExperienceComponents] = useState([
    <ExperienceComponent key={0} id={0} setExperience={setExperience} />,
  ]);

  const navigator = useNavigate();

  const addEducationTab = () => {
    setEducationComponents((prevState) => [
      ...prevState,
      <EducationComponent
        key={prevState.length}
        id={prevState.length}
        setEducation={setEducation}
      />,
    ]);
  };

  const addExperienceTab = () => {
    setExperienceComponents((prevState) => [
      ...prevState,
      <ExperienceComponent
        key={prevState.length}
        id={prevState.length}
        setExperience={setExperience}
      />,
    ]);
  };

  const goToCVPage = () => {
    localStorage.setItem("contact", JSON.stringify(contact));
    localStorage.setItem("education", JSON.stringify(education));
    localStorage.setItem("experience", JSON.stringify(experience));

    navigator("/display");
  };

  return (
    <>
      <h2>Contact Information</h2>
      <ContactComponent setContact={setContact} />
      <h2>Education</h2>
      {educationComponents}
      <button onClick={addEducationTab}>Add Education Tab</button>
      <h2>Experience</h2>
      {experienceComponents}
      <button onClick={addExperienceTab}>Add Experience Tab</button>
      <button onClick={goToCVPage} type="button">
        Create CV
      </button>
    </>
  );
}

export default DetailsPage;
