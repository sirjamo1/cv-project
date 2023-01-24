import React from "react";

const EducationForm = (props) => {
    const { education, handleFormChange, onFormSubmit, i } = props;
    const { schoolName, course, completionDate, key } = education;
    return (
        <form
            className="education-form-card"
            key={key}
            onSubmit={(e) => {
                e.preventDefault();
                onFormSubmit(e, "education", i);
            }}
        >
            <label>
                <b>School : </b>
                <input
                    onChange={(e) => {
                        handleFormChange(e, "education", i);
                    }}
                    type="text"
                    value={schoolName}
                    name="schoolName"
                    placeholder="School Name"
                ></input>
            </label>
            <label>
                <b>Course : </b>
                <input
                    onChange={(e) => {
                        handleFormChange(e, "education", i);
                    }}
                    type="text"
                    value={course}
                    name="course"
                    placeholder="Course"
                ></input>
            </label>
            <label>
                <b>Completion Date : </b>
                <input
                    onChange={(e) => {
                        handleFormChange(e, "education", i);
                    }}
                    type="date"
                    value={completionDate}
                    name="completionDate"
                ></input>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default EducationForm;
