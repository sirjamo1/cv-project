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
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        };
    }
    handleGeneralChange = (e) => {
    //  e.preventDefault();
    const name = e.target.name;
    const value = e.target.value

     console.log(e.target.value)
        this.setState( prevState => ({...prevState, [name]: value})
        
        );
    };
    onSubmitGeneral = (e) => {
        e.preventDefault();
    
        console.log(this.state)
    };
    render() {
        const {
            firstName,
            lastName,
            email,
            phone,
        } = this.state;
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
                <Education />
                <PracticalExp />
            </div>
        );
    }
}

export default App;
