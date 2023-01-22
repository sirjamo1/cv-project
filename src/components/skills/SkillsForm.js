import React from "react";

const SkillsForm = (props) => {
    const { skills, handleFormChange, onFormSubmit, i } = props;
    const { skill, key } = skills;
    return (
        // <div className="skills-form" key={key}>
            <form
                className="skills-form"
                key={key}
                onSubmit={(e) => {
                    e.preventDefault();
                    onFormSubmit(e, "skills", i);
                }}
            >
                <input
                    onChange={(e) => {
                        handleFormChange(e, "skills", i);
                    }}
                    type="text"
                    value={skill}
                    name="skill"
                    placeholder={skill ? skill : "Skill"}
                ></input>
                <button type="submit">Submit</button>
            </form>
        // </div>
    );
};

export default SkillsForm;
