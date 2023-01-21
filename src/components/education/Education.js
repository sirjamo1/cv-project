
import React from "react";
import EducationForm from "./EducationForm";
import EducationText from "./EducationText";

const Education = (props) => {
    const {
        education,
        handleFormChange,
        onFormSubmit,
        onEditClick,
        onDeleteClick,
        onDuplicateClick,
    } = props;
    return (
        <div id="education-container">
            <h3>Education</h3>
            {education.map((education, i) => {
                if (education.edit === true) {
                    return (
                        <EducationForm
                            key={education.key}
                            i={i}
                            education={education}
                            handleFormChange={handleFormChange}
                            onFormSubmit={onFormSubmit}
                        />
                    );
                } else {
                    return (
                        <EducationText
                            key={education.key}
                            i={i}
                            education={education}
                            onEditClick={onEditClick}
                            onDeleteClick={onDeleteClick}
                            onDuplicateClick={onDuplicateClick}
                        />
                    );
                }
            })}
        </div>
    );
};

export default Education;
