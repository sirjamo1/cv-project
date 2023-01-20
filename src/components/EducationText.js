import React from "react";

const EducationText = (props) => {
    const { education, educationEdit } = props;
    const { firstName, lastName, email, phone, edit } = education;

    return (
        <div id="education-text-container">
            <h3>Education</h3>
            <button onClick={(e) => educationEdit(e)}>edit</button>
        </div>
    );
};
export default EducationText;
