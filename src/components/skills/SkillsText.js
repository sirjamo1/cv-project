import React from "react";
import { MdEdit, MdPlaylistAdd, MdDeleteForever } from "react-icons/md";

const SkillsText = (props) => {
    const { skills, onEditClick, onDeleteClick, onDuplicateClick, i } = props;
    const { skill, key } = skills;
    return (
        <div className="skills-text" key={key}>
            <h4>{skill ? skill : "Skill"}</h4>
            <div className="text-button-container">
                <button onClick={() => onEditClick("skills", i)}>
                    <MdEdit size={20} />
                </button>
                <button onClick={() => onDuplicateClick("skills", i + 1)}>
                    <MdPlaylistAdd size={20} />
                </button>
                <button onClick={() => onDeleteClick("skills", i)}>
                    <MdDeleteForever size={20} />
                </button>
            </div>
        </div>
    );
};
export default SkillsText;
