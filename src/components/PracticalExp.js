import React from "react";

const PracticalExp = () => {
    return (
        <div id="practical-container">
            <h3>practical</h3>
            <form id="practical-form">
                <label>Company Name</label>
                <input></input>
                <label>Position Title</label>
                <input></input>
                <label>Tasks</label>
                <input></input>
                <label>Start Date</label>
                <input type="date"></input>
                <label>End Date</label>
                <input type="date"></input>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default PracticalExp;
