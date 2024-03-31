import ContactComponent from "./components/ContactComponent";
import EducationComponent from "./components/EducationComponent";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [contact, setContact] = useState({});
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});

  const [educationComponents, setEducationComponents] = useState([
    <EducationComponent key={0} id={0} setEducation={setEducation} />,
  ]);

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

  useEffect(() => {
    console.log(contact);
  }, [contact]);

  useEffect(() => {
    console.log(education);
  }, [education]);

  return (
    <>
      <h2>Contact Information</h2>
      <ContactComponent setContact={setContact} />
      <h2>Education</h2>
      {educationComponents}
      <button onClick={addEducationTab}>Add Education Tab</button>
      {/* <h2>Experience</h2>
      <ExperienceComponent setExperience={setExperience} /> */}
    </>
  );
}

export default App;
