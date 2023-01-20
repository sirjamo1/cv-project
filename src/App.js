import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import PracticalExp from "./components/PracticalExp";
//import uniqid from "uniqid";
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
            },
            education: {
                schoolName: "",
                course: "",
                completionDate: "",
            },
            practical: {
                companyName: "",
                position: "",
                tasks: "",
                startDate: "",
                endDate: "",
            },
        };
    }
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

        console.log(this.state);
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
        const { firstName, lastName, email, phone } = this.state.generalInfo;
        const { schoolName, course, completionDate } = this.state.education;
        const { companyName, position, tasks, startDate, endDate } =
            this.state.practical;
        return (
            <div className="App">
                <h1>Hello cv</h1>
                <p>First name: {firstName}</p>
                <p>Last name: {lastName}</p>
                <p>email: {email}</p>
                <p>Phone: {phone}</p>
                <GeneralInfo
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    phone={phone}
                    handleGeneralChange={this.handleGeneralChange}
                    onSubmitGeneral={this.onSubmitGeneral}
                />
                <Education
                    schoolName={schoolName}
                    course={course}
                    completionDate={completionDate}
                    handleEducationChange={this.handleEducationChange}
                    onSubmitGeneral={this.onSubmitGeneral}
                />
                <PracticalExp
                    companyName={companyName}
                    position={position}
                    tasks={tasks}
                    startDate={startDate}
                    endDate={endDate}
                    handlePracticalChange={this.handlePracticalChange}
                    onSubmitGeneral={this.onSubmitGeneral}
                />
            </div>
        );
    }
}

export default App;
