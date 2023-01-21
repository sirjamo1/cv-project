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
    onFormSubmit = (e, category, index) => {
        e.preventDefault();
        console.log(category);
        if (category === "generalInfo") {
            this.onGeneralEditClick(category);
        } else {
            this.onEditClick(category, index);
        }
        console.log(this.state);
    };
    onGeneralEditClick = (category) => {
        let stateCopy = { ...this.state };
        let item = { ...stateCopy[category] };
        item.edit = !item.edit;
        stateCopy[category] = item;
        this.setState(stateCopy);
    };
    onEditClick = (category, index) => {
        let stateCopy = { ...this.state };
        let items = [...stateCopy[category]];
        let item = { ...items[index] };
        item.edit = !item.edit;
        items[index] = item;
        stateCopy[category] = items;
        console.log(stateCopy);
        this.setState(stateCopy);

        console.log(this.state, "after edit");
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
                    onGeneralEditClick={this.onGeneralEditClick}
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
