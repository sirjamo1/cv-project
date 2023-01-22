import React from "react";
import SkillsForm from "./SkillsForm";
import SkillsText from "./SkillsText";

const Skills = (props) => {
    const {
        skills,
        handleFormChange,
        onFormSubmit,
        onEditClick,
        onDeleteClick,
        onDuplicateClick,
    } = props;

    return (
        <div id="skills-container">
            <h3>Skills</h3>
            {skills.map((skills, i) => {
                if (skills.edit === true) {
                    return (
                        <SkillsForm
                            key={skills.key}
                            skills={skills}
                            i={i}
                            handleFormChange={handleFormChange}
                            onFormSubmit={onFormSubmit}
                        />
                    );
                } else {
                    return (
                        <SkillsText
                            key={skills.key}
                            skills={skills}
                            onEditClick={onEditClick}
                            onDeleteClick={onDeleteClick}
                            onDuplicateClick={onDuplicateClick}
                            i={i}
                        />
                    );
                }
            })}
        </div>
    );
};

export default Skills;
