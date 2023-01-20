import React from "react";

const EducationText = (props) => {
    const { education, onEditClick } = props;
    const { firstName, lastName, email, phone, edit } = education;

    return (
        <div id="education-text-container">
            <h3>Education</h3>
            <button onClick={(e) => onEditClick(e, "education")}>edit</button>
        </div>
    );
};
export default EducationText;
