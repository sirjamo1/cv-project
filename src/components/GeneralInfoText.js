import React from "react";

const GeneralInfoText = (props) => {
   const { generalInfo, generalEdit } = props;
   const { firstName, lastName, email, phone, edit } = generalInfo;

    return (
        <div id="general-info-container">
            <h3>GeneralInfo</h3>
            <button onClick={(e) => generalEdit(e)}>edit</button>
        </div>
    );
};
export default GeneralInfoText