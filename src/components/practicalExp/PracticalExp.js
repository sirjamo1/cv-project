import React from "react";
import PracticalExpForm from "./PracticalExpForm";
import PracticalExpText from "./PracticalExpText";

const Practical = (props) => {
    const { practical, handleFormChange, onFormSubmit, onEditClick } = props;

    return (
        <div>
            {practical.edit === true ? (
                <PracticalExpForm
                    practical={practical}
                    handleFormChange={handleFormChange}
                    onFormSubmit={onFormSubmit}
                />
            ) : (
                <PracticalExpText
                    practical={practical}
                    onEditClick={onEditClick}
                />
            )}
        </div>
    );
};

export default Practical;
