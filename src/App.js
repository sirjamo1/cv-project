import React, { Component } from "react";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Practical from "./components/practicalExp/PracticalExp";
import uniqid from "uniqid";
import "./App.css";

////NEED TO:  finish css
class App extends Component {
    constructor() {
        super();
        this.state = {
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
                        { task: "one", key: uniqid(), edit: false },
                        { task: "task two", key: uniqid(), edit: false },
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
                        { task: "one", key: uniqid(), edit: false },
                        { task: "task two", key: uniqid(), edit: false },
                    ],
                    startDate: "",
                    endDate: "",
                    key: uniqid(),
                    edit: false,
                },
            ],
        };
    }

    handleFormChange = (e, category, index, subCategory, subIndex) => {
        const name = e.target.name;
        const value = e.target.value;
        let stateCopy = { ...this.state };
        if (!!subCategory) {
            stateCopy[category][index][subCategory][subIndex][name] = value;
        } else {
            !isNaN(index)
                ? (stateCopy[category][index][name] = value)
                : (stateCopy[category][name] = value);
        }
        this.setState(stateCopy);
    };

    onFormSubmit = (e, category, index, subCategory, subIndex) => {
        e.preventDefault();
        this.onEditClick(category, index, subCategory, subIndex);
    };

    onEditClick = (category, index, subCategory, subIndex) => {
        let stateCopy = { ...this.state };
        if (!!subCategory) {
            stateCopy[category][index][subCategory][subIndex].edit =
                !stateCopy[category][index][subCategory][subIndex].edit;
        } else {
            !isNaN(index)
                ? (stateCopy[category][index].edit =
                      !stateCopy[category][index].edit)
                : (stateCopy[category].edit = !stateCopy[category].edit);
        }
        this.setState(stateCopy);
    };
    onDeleteClick = (category, index, subCategory, subIndex) => {
        let stateCopy = { ...this.state };
        if (!!subCategory) {
            stateCopy[category][index][subCategory].splice(subIndex, 1)
        } else {
            stateCopy[category].splice(index, 1);
        }
        this.setState(stateCopy);
    };
    onDuplicateClick = (category, index, subCategory, subIndex) => {
        const skills = { skill: "", key: uniqid(), edit: false };
        const practical = {
            companyName: "",
            position: "",
            tasks: [
                { task: "", key: uniqid(), edit: false },
                { task: "", key: uniqid(), edit: false },
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
        const task = { task: "", key: uniqid(), edit: false };
        let stateCopy = { ...this.state };
        let newCategory = {};
        let newSubCategory = {};
        if (category === "education") newCategory = education;
        if (category === "practical") newCategory = practical;
        if (category === "skills") newCategory = skills;
        if (!!subCategory) {
            newSubCategory = task;
            stateCopy[category][index][subCategory].splice(
                subIndex + 1,
                0,
                newSubCategory
            );
        } else {
            stateCopy[category].splice(index, 0, newCategory);
        }
        this.setState(stateCopy);
    };
    render() {
        const { contact, skills, education, practical } = this.state;
        return (
            <div className="App">
                <div id="cv-container">
                    <div id="cv-column-one">
                        <Contact
                            contact={contact}
                            handleFormChange={this.handleFormChange}
                            onFormSubmit={this.onFormSubmit}
                            onEditClick={this.onEditClick}
                        />
                        <Skills
                            skills={skills}
                            handleFormChange={this.handleFormChange}
                            onFormSubmit={this.onFormSubmit}
                            onEditClick={this.onEditClick}
                            onDeleteClick={this.onDeleteClick}
                            onDuplicateClick={this.onDuplicateClick}
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
                            handleFormChange={this.handleFormChange}
                            onFormSubmit={this.onFormSubmit}
                            onEditClick={this.onEditClick}
                            onDeleteClick={this.onDeleteClick}
                            onDuplicateClick={this.onDuplicateClick}
                        />
                        <Practical
                            practical={practical}
                            handleFormChange={this.handleFormChange}
                            onFormSubmit={this.onFormSubmit}
                            onEditClick={this.onEditClick}
                            onDeleteClick={this.onDeleteClick}
                            onDuplicateClick={this.onDuplicateClick}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
