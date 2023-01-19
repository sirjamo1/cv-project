import React from "react";

const Education = () => {
    return (
        <div id="education-container">
            <h3>Education</h3>
            <form id="education-form">
                <label>School Name</label>
                <input></input>
                <label>Course</label>
                <input></input>
                <label>Date of Completion</label>
                <input type="date"></input>
               <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default Education;
