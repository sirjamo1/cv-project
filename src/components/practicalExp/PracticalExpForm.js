import React from "react";

const PracticalExpForm = (props) => {
    const { practical, handleFormChange, onFormSubmit, i } = props;
    const { companyName, position, tasks, startDate, endDate } = practical;
    return (
        <div className="practical-form">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onFormSubmit(e, "practical", i);
                }}
            >
                <label>
                    Company Name
                    <input
                        onChange={(e) => {
                            handleFormChange(e, "practical", i);
                        }}
                        type="text"
                        value={companyName}
                        name="companyName"
                        placeholder="Company Name"
                    ></input>
                </label>
                <label>
                    Position
                    <input
                        onChange={(e) => {
                            handleFormChange(e, "practical", i);
                        }}
                        type="text"
                        value={position}
                        name="position"
                        placeholder="Position"
                    ></input>
                </label>
                <label>
                    Tasks
                    <input
                        onChange={(e) => {
                            handleFormChange(e, "practical", i);
                        }}
                        type="text"
                        value={tasks}
                        name="tasks"
                        placeholder="Tasks"
                    ></input>
                </label>
                <label>
                    Start Date
                    <input
                        onChange={(e) => {
                            handleFormChange(e, "practical", i);
                        }}
                        type="date"
                        value={startDate}
                        name="startDate"
                    ></input>
                </label>
                <label>
                    End Date
                    <input
                        onChange={(e) => {
                            handleFormChange(e, "practical", i);
                        }}
                        type="date"
                        value={endDate}
                        name="endDate"
                    ></input>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PracticalExpForm;
