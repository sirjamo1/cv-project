import React from "react";

const EducationForm = (props) => {
    const { education, handleFormChange, onFormSubmit, i } = props;
    const { schoolName, course, completionDate, key } = education;
    return (
        <div className="education-form" key={key}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onFormSubmit(e, "education", i);
                }}
            >
                <label>
                    School Name
                    <input
                        onChange={(e) => {
                            handleFormChange(e, "education");
                        }}
                        type="text"
                        value={schoolName}
                        name="schoolName"
                        placeholder="School Name"
                    ></input>
                </label>
                <label>
                    Course
                    <input
                        onChange={(e) => {
                            handleFormChange(e, "education");
                        }}
                        type="text"
                        value={course}
                        name="course"
                        placeholder="Course"
                    ></input>
                </label>
                <label>
                    Completion Date
                    <input
                        onChange={(e) => {
                            handleFormChange(e, "education");
                        }}
                        type="date"
                        value={completionDate}
                        name="completionDate"
                    ></input>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EducationForm;
