import React, { Component } from "react";
import GeneralInfo from "./components/generalInfo/GeneralInfo";
import Education from "./components/education/Education";
import Practical from "./components/practicalExp/PracticalExp";
import uniqid from "uniqid";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            generalInfo: {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                edit: false,
            },
            education: [
                {
                    schoolName: "one",
                    course: "",
                    completionDate: "",
                    key: uniqid(),
                    edit: false,
                },
                {
                    schoolName: "two",
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
                    tasks: "",
                    startDate: "",
                    endDate: "",
                    key: uniqid(),
                    edit: false,
                },
            ],
        };
        this.onEditClick = this.onEditClick.bind(this);
    }
    handleFormChange = (e, category, index) => {
        const name = e.target.name;
        const value = e.target.value;
        let stateCopy = { ...this.state };
        !isNaN(index)
            ? (stateCopy[category][index][name] = value)
            : (stateCopy[category][name] = value);
        this.setState(stateCopy);
    };

    onFormSubmit = (e, category, index) => {
        e.preventDefault();
        this.onEditClick(category, index);
        console.log(this.state);
    };

    onEditClick = (category, index) => {
        let stateCopy = { ...this.state };
        !isNaN(index)
            ? (stateCopy[category][index].edit =
                  !stateCopy[category][index].edit)
            : (stateCopy[category].edit = !stateCopy[category].edit);
        this.setState(stateCopy);
    };

    render() {
        const { generalInfo, education, practical } = this.state;
        return (
            <div className="App">
                <h1>Hello cv</h1>
                <p>first name : {generalInfo.firstName}</p>
                <GeneralInfo
                    generalInfo={generalInfo}
                    handleFormChange={this.handleFormChange}
                    onFormSubmit={this.onFormSubmit}
                    onEditClick={this.onEditClick}
                />
                <Education
                    education={education}
                    handleFormChange={this.handleFormChange}
                    onFormSubmit={this.onFormSubmit}
                    onEditClick={this.onEditClick}
                />
                <Practical
                    practical={practical}
                    handleFormChange={this.handleFormChange}
                    onFormSubmit={this.onFormSubmit}
                    onEditClick={this.onEditClick}
                />
            </div>
        );
    }
}

export default App;
