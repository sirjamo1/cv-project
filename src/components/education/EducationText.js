import React from "react";
import { MdEdit, MdPlaylistAdd, MdDeleteForever } from "react-icons/md";

const EducationText = (props) => {
    const { education, onEditClick, onDeleteClick, onDuplicateClick, i } =
        props;
    const { schoolName, course, completionDate, key } = education;
    return (
        <div className="education-text" key={key}>
            <p>{schoolName ? schoolName : "School name"}</p>
            <p>{course ? course : "Course"}</p>
            <p>{completionDate ? completionDate : "year-month-day"}</p>
            <div className="text-button-container">
                <button onClick={() => onEditClick("education", i)}>
                    <MdEdit size={20} />
                </button>
                <button onClick={() => onDuplicateClick("education", i + 1)}>
                    <MdPlaylistAdd size={20} />
                </button>
                <button onClick={() => onDeleteClick("education", i)}>
                    <MdDeleteForever size={20} />
                </button>
            </div>
        </div>
    );
};
export default EducationText;
