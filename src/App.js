import React, { Component } from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";
import GeneralInfoText from "./components/GeneralInfoText";
import EducationForm from "./components/EducationForm";
import PracticalExpForm from "./components/PracticalExpForm";
import PracticalExpText from "./components/PracticalExpText";

import uniqid from "uniqid";
import "./App.css";
import EducationText from "./components/EducationText";

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
    handleGeneralChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(e.target.value);
        this.setState((prevState) => ({
            ...prevState,
            generalInfo: {
                ...prevState.generalInfo,
                [name]: value,
            },
        }));
    };
    onSubmitGeneral = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({
            ...prevState,
            generalInfo: {
                ...prevState.generalInfo,
                edit: false,
            },
            education: {
                ...prevState.education,
                edit: false,
            },

            practical: {
                ...prevState.practical,
                edit: false,
            },
        }));
        console.log(this.state);
    };
    generalEdit = (e) => {
        console.log("clicked edit");
        this.setState((prevState) => ({
            ...prevState,
            generalInfo: {
                ...prevState.generalInfo,
                edit: true,
            },
        }));
    };
    educationEdit = (e) => {
        console.log("clicked edit");
        this.setState((prevState) => ({
            ...prevState,
            education: {
                ...prevState.education,
                edit: true,
            },
        }));
    };
    practicalEdit = (e) => {
        console.log("clicked edit");
        this.setState((prevState) => ({
            ...prevState,
            practical: {
                ...prevState.practical,
                edit: true,
            },
        }));
    };
    handleEducationChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(e.target.value);
        this.setState((prevState) => ({
            ...prevState,
            education: {
                ...prevState.education,
                [name]: value,
            },
        }));
    };

    handlePracticalChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(e.target.value);
        this.setState((prevState) => ({
            ...prevState,
            practical: {
                ...prevState.practical,
                [name]: value,
            },
        }));
    };
    render() {
        const { generalInfo, education, practical } = this.state;
        return (
            <div className="App">
                <h1>Hello cv</h1>
                {generalInfo.edit === true ? (
                    <GeneralInfoForm
                        generalInfo={generalInfo}
                        handleGeneralChange={this.handleGeneralChange}
                        onSubmitGeneral={this.onSubmitGeneral}
                    />
                ) : (
                    <GeneralInfoText
                        generalInfo={generalInfo}
                        generalEdit={this.generalEdit}
                    />
                )}
                {education.edit === true ? (
                    <EducationForm
                        education={education}
                        handleEducationChange={this.handleEducationChange}
                        onSubmitGeneral={this.onSubmitGeneral}
                    />
                ) : (
                    <EducationText
                        education={education}
                        educationEdit={this.educationEdit}
                    />
                )}
                {practical.edit === true ? (
                    <PracticalExpForm
                        practical={practical}
                        handlePracticalChange={this.handlePracticalChange}
                        onSubmitGeneral={this.onSubmitGeneral}
                    />
                ) : (
                    <PracticalExpText
                        practical={practical}
                        practicalEdit={this.practicalEdit}
                    />
                )}
            </div>
        );
    }
}

export default App;
