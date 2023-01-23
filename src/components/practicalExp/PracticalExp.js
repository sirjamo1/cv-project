import React from "react";
import PracticalExpForm from "./PracticalExpForm";
import PracticalExpText from "./PracticalExpText";
import { MdPlaylistAdd } from "react-icons/md";

const Practical = (props) => {
    const {
        practical,
        handleFormChange,
        onFormSubmit,
        onEditClick,
        onDeleteClick,
        onDuplicateClick,
    } = props;
    if (practical.length > 0) {
        return (
            <div className="practical-container">
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
                                onDeleteClick={onDeleteClick}
                                onDuplicateClick={onDuplicateClick}
                                handleFormChange={handleFormChange}
                                onFormSubmit={onFormSubmit}
                            />
                        );
                    }
                })}
            </div>
        );
    } else {
        return (
            <div className="practical-container">
                <h3>Practical</h3>
                <button onClick={() => onDuplicateClick("practical", 0)}>
                    <MdPlaylistAdd size={20} />
                </button>
            </div>
        );
    }
};

export default Practical;
