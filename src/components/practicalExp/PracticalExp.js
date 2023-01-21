import React from "react";
import PracticalExpForm from "./PracticalExpForm";
import PracticalExpText from "./PracticalExpText";

const Practical = (props) => {
    const { practical, handleFormChange, onFormSubmit, onEditClick } = props;

    return (
        <div>
            <h3>Practical</h3>
            {practical.map((practical, i) => {
                if (practical.edit === true) {
                    return (
                        <PracticalExpForm
                            key={practical.key}
                            i={i}
                            practical={practical}
                            handleFormChange={handleFormChange}
                            onFormSubmit={onFormSubmit}
                        />
                    );
                } else {
                    return (
                        <PracticalExpText
                            key={practical.key}
                            i={i}
                            practical={practical}
                            onEditClick={onEditClick}
                        />
                    );
                }
            })}
        </div>
    );
};

export default Practical;
