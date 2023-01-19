import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo"
import Education from "./components/Education";
import PracticalExp from "./components/PracticalExp";
import "./App.css";

class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="App">
                <h1>Hello cv</h1>
                <GeneralInfo />
                <Education />
                <PracticalExp />
            </div>
        );
    }
}

export default App;
