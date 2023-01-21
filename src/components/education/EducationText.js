import React from "react";

const EducationText = (props) => {
    const { education, onEditClick, i } = props;
    const { schoolName, course, completionDate, key } = education;
    return (
        <div id="education-text-container">
          
            <div key={key}>
                <p>{schoolName ? schoolName : "School name"}</p>
                <p>{course ? course : "Course"}</p>
                <p>{completionDate ? completionDate : "year-month-day"}</p>
                <button onClick={() => onEditClick("education", i)}>
                    edit
                </button>
            </div>
        </div>
    );
};
export default EducationText;
