import React from "react";

const PracticalExp = (props) => {
    const {
        companyName,
        position,
        tasks,
        startDate,
        endDate,
        handlePracticalChange,
        onSubmitGeneral,
    } = props;
    return (
        <div id="practical-container">
            <h3>Practical</h3>
            <form
                id="practical-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmitGeneral(e);
                }}
            >
                <label>Company Name</label>
                <input
                    onChange={(e) => {
                        handlePracticalChange(e);
                    }}
                    type="text"
                    value={companyName}
                    id="companyNameInput"
                    name="companyName"
                ></input>
                <label>Position</label>
                <input
                    onChange={(e) => {
                        handlePracticalChange(e);
                    }}
                    type="text"
                    value={position}
                    id="positionInput"
                    name="position"
                ></input>
                <label>Tasks</label>
                <input
                    onChange={(e) => {
                        handlePracticalChange(e);
                    }}
                    type="text"
                    value={tasks}
                    id="tasksInput"
                    name="tasks"
                ></input>
                <label>Start Date</label>
                <input
                    onChange={(e) => {
                        handlePracticalChange(e);
                    }}
                    type="date"
                    value={startDate}
                    id="startDateInput"
                    name="startDate"
                ></input>
                <label>End Date</label>
                <input
                    onChange={(e) => {
                        handlePracticalChange(e);
                    }}
                    type="date"
                    value={endDate}
                    id="endDateInput"
                    name="endDate"
                ></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PracticalExp;
