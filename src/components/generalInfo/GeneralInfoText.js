import React from "react";

const GeneralInfoText = (props) => {
   const { generalInfo, onEditClick } = props;
   const { firstName, lastName, email, phone, edit } = generalInfo;

    return (
        <div id="general-info-container">
            <h3>GeneralInfo</h3>
            <button onClick={(e) => onEditClick(e, "generalInfo")}>edit</button>
        </div>
    );
};
export default GeneralInfoText