import React from "react";

const PracticalExpForm = (props) => {
    const { practical, handleFormChange, onFormSubmit } = props;
    const { companyName, position, tasks, startDate, endDate } = practical;
    return (
        <div id="practical-container">
            <h3>Practical</h3>
            <form
                id="practical-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    onFormSubmit(e, "practical");
                }}
            >
                <label>
                    Company Name
                    <input
                        onChange={(e) => {
                            handleFormChange(e, "practical");
                        }}
                        type="text"
                        value={companyName}
                        id="companyNameInput"
                        name="companyName"
                        placeholder="Company Name"
                    ></input>
                </label>
                <label>
                    Position
                    <input
                        onChange={(e) => {
                            handleFormChange(e, "practical");
                        }}
                        type="text"
                        value={position}
                        id="positionInput"
                        name="position"
                        placeholder="Position"
                    ></input>
                </label>
                <label>
                    Tasks
                    <input
                        onChange={(e) => {
                            handleFormChange(e, "practical");
                        }}
                        type="text"
                        value={tasks}
                        id="tasksInput"
                        name="tasks"
                        placeholder="Tasks"
                    ></input>
                </label>
                <label>
                    Start Date
                    <input
                        onChange={(e) => {
                            handleFormChange(e, "practical");
                        }}
                        type="date"
                        value={startDate}
                        id="startDateInput"
                        name="startDate"
                    ></input>
                </label>
                <label>
                    End Date
                    <input
                        onChange={(e) => {
                            handleFormChange(e, "practical");
                        }}
                        type="date"
                        value={endDate}
                        id="endDateInput"
                        name="endDate"
                    ></input>
                </label>
                <button type="submit">Submit</button>
                <button>Add Another</button>
            </form>
        </div>
    );
};

export default PracticalExpForm;
