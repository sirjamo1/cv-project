import React, { useState } from "react";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Practical from "./components/practicalExp/PracticalExp";
import uniqid from "uniqid";
import "./App.css";

const App = () => {
    const [cVState, setCVState] = useState({
        contact: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            edit: false,
        },
        skills: [{ skill: "", key: uniqid(), edit: false }],
        education: [
            {
                schoolName: "",
                course: "",
                completionDate: "",
                key: uniqid(),
                edit: false,
            },
            {
                schoolName: "",
                course: "",
                completionDate: "",
                key: uniqid(),
                edit: false,
            },
        ],
        practical: [
            {
                companyName: "",
                position: "",
                tasks: [
                    { task: "one", key: uniqid() },
                    { task: "task two", key: uniqid() },
                ],
                startDate: "",
                endDate: "",
                key: uniqid(),
                edit: false,
            },
            {
                companyName: "",
                position: "",
                tasks: [
                    { task: "one", key: uniqid() },
                    { task: "task two", key: uniqid() },
                ],
                startDate: "",
                endDate: "",
                key: uniqid(),
                edit: false,
            },
        ],
    });

    const handleFormChange = (e, category, index, subCategory, subIndex) => {
        const name = e.target.name;
        const value = e.target.value;
        let stateCopy = { ...cVState };
        if (!!subCategory) {
            stateCopy[category][index][subCategory][subIndex][name] = value;
        } else {
            !isNaN(index)
                ? (stateCopy[category][index][name] = value)
                : (stateCopy[category][name] = value);
        }
        setCVState(stateCopy);
    };

    const onFormSubmit = (e, category, index, subCategory, subIndex) => {
        e.preventDefault();
        onEditClick(category, index, subCategory, subIndex);
    };

    const onEditClick = (category, index, subCategory, subIndex) => {
        let stateCopy = { ...cVState };
        if (!!subCategory) {
            stateCopy[category][index][subCategory][subIndex].edit =
                !stateCopy[category][index][subCategory][subIndex].edit;
        } else {
            !isNaN(index)
                ? (stateCopy[category][index].edit =
                      !stateCopy[category][index].edit)
                : (stateCopy[category].edit = !stateCopy[category].edit);
        }
        setCVState(stateCopy);
    };
    const onDeleteClick = (category, index, subCategory, subIndex) => {
        let stateCopy = { ...cVState };
        if (!!subCategory) {
            stateCopy[category][index][subCategory].splice(subIndex, 1);
        } else {
            stateCopy[category].splice(index, 1);
        }
        setCVState(stateCopy);
    };
    const onDuplicateClick = (category, index, subCategory, subIndex, e) => {
        const skills = { skill: "", key: uniqid(), edit: false };
        const practical = {
            companyName: "",
            position: "",
            tasks: [
                { task: "", key: uniqid() },
                { task: "", key: uniqid() },
            ],
            startDate: "",
            endDate: "",
            key: uniqid(),
            edit: false,
        };
        const education = {
            schoolName: "",
            course: "",
            completionDate: "",
            key: uniqid(),
            edit: false,
        };
        const task = { task: "", key: uniqid() };
        let stateCopy = { ...cVState };
        let newCategory = {};
        let newSubCategory = {};
        if (category === "education") newCategory = education;
        if (category === "practical") newCategory = practical;
        if (category === "skills") newCategory = skills;
        if (!!subCategory) {
            e.preventDefault();
            newSubCategory = task;
            stateCopy[category][index][subCategory].splice(
                subIndex + 1,
                0,
                newSubCategory
            );
        } else {
            stateCopy[category].splice(index, 0, newCategory);
        }
        setCVState(stateCopy);
    };

    const { contact, skills, education, practical } = cVState;
    return (
        <div className="App">
            <div id="cv-container">
                <div id="cv-column-one">
                    <Contact
                        contact={contact}
                        handleFormChange={handleFormChange}
                        onFormSubmit={onFormSubmit}
                        onEditClick={onEditClick}
                    />
                    <Skills
                        skills={skills}
                        handleFormChange={handleFormChange}
                        onFormSubmit={onFormSubmit}
                        onEditClick={onEditClick}
                        onDeleteClick={onDeleteClick}
                        onDuplicateClick={onDuplicateClick}
                    />
                </div>
                <div id="cv-column-two">
                    <div id="cv-header">
                        <h1>
                            {contact.firstName ? contact.firstName : "John"}{" "}
                            {contact.lastName ? contact.lastName : "Doe"}
                        </h1>
                    </div>
                    <Education
                        education={education}
                        handleFormChange={handleFormChange}
                        onFormSubmit={onFormSubmit}
                        onEditClick={onEditClick}
                        onDeleteClick={onDeleteClick}
                        onDuplicateClick={onDuplicateClick}
                    />
                    <Practical
                        practical={practical}
                        handleFormChange={handleFormChange}
                        onFormSubmit={onFormSubmit}
                        onEditClick={onEditClick}
                        onDeleteClick={onDeleteClick}
                        onDuplicateClick={onDuplicateClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
