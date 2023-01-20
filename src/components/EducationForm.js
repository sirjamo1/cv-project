import React from "react";

const EducationForm = (props) => {
 // this.state = {input}
    const { education, handleEducationChange, onSubmitGeneral } = props;
    const { schoolName, course, completionDate, key } = education;
    console.log(key);
    return (
     
        <div id="education-container">
            <h3>Education</h3>
          
            <form id={key}
                className="education-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmitGeneral(e);
                }}
            >
                <label>School Name</label>
                <input
                    onChange={(e) => {
                        handleEducationChange(e);
                    }}
                    type="text"
                    value={schoolName}
                    id="schoolNameInput"
                    name="schoolName"
                    placeholder="School Name"
                ></input>
                <label>Course</label>
                <input
                    onChange={(e) => {
                        handleEducationChange(e);
                    }}
                    type="text"
                    value={course}
                    id="courseInput"
                    name="course"
                    placeholder="Course"
                ></input>
                <label>Completion Date</label>
                <input
                    onChange={(e) => {
                        handleEducationChange(e);
                    }}
                    type="date"
                    value={completionDate}
                    id="completionDateInput"
                    name="completionDate"
                ></input>
                <button type="submit">Submit</button>
                <button>Add Another</button>
            </form>
        </div>
    );
};

export default EducationForm;
