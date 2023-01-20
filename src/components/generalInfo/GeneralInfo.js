import React from "react";
import GeneralInfoForm from "./GeneralInfoForm";
import GeneralInfoText from "./GeneralInfoText";

const GeneralInfo = (props) => {
    const { generalInfo, onFormSubmit, handleFormChange, onEditClick } = props;

    return (
        <div>
            {generalInfo.edit === true ? (
                <GeneralInfoForm
                    generalInfo={generalInfo}
                    handleFormChange={handleFormChange}
                    onFormSubmit={onFormSubmit}
                />
            ) : (
                <GeneralInfoText
                    generalInfo={generalInfo}
                    onEditClick={onEditClick}
                />
            )}
        </div>
    );
};

export default GeneralInfo;