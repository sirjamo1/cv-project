import React from "react";

const EducationForm = (props) => {
 // this.state = {input}
    const { education, handleFormChange, onFormSubmit } = props;
    const { schoolName, course, completionDate, key } = education;
    console.log(key);
    return (
        <div id="education-container">
            <h3>Education</h3>

            <form
                id={key}
                className="education-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    onFormSubmit(e, "education");
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
                        id="schoolNameInput"
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
                        id="courseInput"
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
                        id="completionDateInput"
                        name="completionDate"
                    ></input>
                </label>
                <button type="submit">Submit</button>
                <button>Add Another</button>
            </form>
        </div>
    );
};

export default EducationForm;
