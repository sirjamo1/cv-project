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
            education: {
                schoolName: "",
                course: "",
                completionDate: "",
                key: uniqid(),
                edit: false,
            },

            practical: {
                companyName: "",
                position: "",
                tasks: "",
                startDate: "",
                endDate: "",
                edit: false,
            },
        };
    }
    // onDuplicateClick = () => {
    //     this.setState((prevState) => ({
    //         ...prevState,
    //     }));
    // };
    handleFormChange = (e, category) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(e.target.value);
        this.setState((prevState) => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                [name]: value,
            },
        }));
    };
    onFormSubmit = (e, category) => {
        e.preventDefault();
        this.setState((prevState) => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                edit: false,
            },
        }));
        console.log(this.state);
    };
    onEditClick = (e, category) => {
        console.log("clicked edit");
        this.setState((prevState) => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                edit: true,
            },
        }));
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
