
import React from "react";
import EducationForm from "./EducationForm";
import EducationText from "./EducationText";
import { MdPlaylistAdd } from "react-icons/md";

const Education = (props) => {
    const {
        education,
        handleFormChange,
        onFormSubmit,
        onEditClick,
        onDeleteClick,
        onDuplicateClick,
    } = props;
    if (education.length > 0) { 
    return (
        <div className="education-container">
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
        } else {
            return (
                <div className="education-container">
                    <h3>Education</h3>
                    <button
                        onClick={() => onDuplicateClick("education", 0)}
                    >
                        <MdPlaylistAdd size={20} />
                    </button>
                </div>
            );
        }
};

export default Education;
