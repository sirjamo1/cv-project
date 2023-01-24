import React from "react";
import TasksForm from "./TasksForm";

const PracticalExpForm = (props) => {
    const {
        practical,
        handleFormChange,
        onFormSubmit,
        i,
        onEditClick,
        onDeleteClick,
        onDuplicateClick,
    } = props;
    const { companyName, position, tasks, startDate, endDate } = practical;

    return (
        <form
            className="practical-form-card"
            onSubmit={(e) => {
                onFormSubmit(e, "practical", i);
            }}
        >
            <label>
                <b>Company : </b>
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
                <b>Position : </b>
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
            <TasksForm
                tasks={tasks}
                onEditClick={onEditClick}
                onDeleteClick={onDeleteClick}
                onDuplicateClick={onDuplicateClick}
                handleFormChange={handleFormChange}
                onFormSubmit={onFormSubmit}
                i={i}
            />
            <label>
                <b>Start Date : </b>
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
                <b>End Date : </b>
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
    );
};

export default PracticalExpForm;
