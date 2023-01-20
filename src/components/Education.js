import React from "react";

const Education = (props) => {
  const {
      schoolName,
      course,
      completionDate,
      onSubmitGeneral,
      handleEducationChange,
  } = props;
    return (
        <div id="education-container">
            <h3>Education</h3>

           <form
                id="education-form"
                onSubmit={(e) => {

                    e.preventDefault();
                    onSubmitGeneral(e)
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
                </form>
        </div>
    );
};

export default Education;
