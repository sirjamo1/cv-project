import React from "react";
import SkillsForm from "./SkillsForm";
import SkillsText from "./SkillsText";
import { MdPlaylistAdd } from "react-icons/md";

const Skills = (props) => {
    const {
        skills,
        handleFormChange,
        onFormSubmit,
        onEditClick,
        onDeleteClick,
        onDuplicateClick,
    } = props;
    if (skills.length > 0) {
        return (
            <div className="skills-container">
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
    } else {
        return (
            <div className="skills-container">
                <h3>Skills</h3>
                <button onClick={() => onDuplicateClick("skills", 0)}>
                    <MdPlaylistAdd size={20} />
                </button>
            </div>
        );
    }
};

export default Skills;
