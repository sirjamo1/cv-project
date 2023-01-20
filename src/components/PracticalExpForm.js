import React from "react";

const PracticalExpForm = (props) => {
    const { practical, handlePracticalChange, onSubmitGeneral } = props;
    const { companyName, position, tasks, startDate, endDate } = practical;
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
                    placeholder="Company Name"
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
                    placeholder="Position"
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
                    placeholder="Tasks"
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
                <button>Add Another</button>
            </form>
        </div>
    );
};

export default PracticalExpForm;
