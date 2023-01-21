import React from "react";

const EducationText = (props) => {
    const { education, onEditClick, onDeleteClick, onDuplicateClick, i } =
        props;
    const { schoolName, course, completionDate, key } = education;
    return (
        <div className="education-text" key={key}>
            <p>{schoolName ? schoolName : "School name"}</p>
            <p>{course ? course : "Course"}</p>
            <p>{completionDate ? completionDate : "year-month-day"}</p>
            <button onClick={() => onEditClick("education", i)}>Edit</button>
            <button onClick={() => onDuplicateClick("education", i + 1)}>
                Duplicate
            </button>
            <button onClick={() => onDeleteClick("education", i)}>
                Delete
            </button>
        </div>
    );
};
export default EducationText;
