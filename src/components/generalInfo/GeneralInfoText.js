import React from "react";

const GeneralInfoText = (props) => {
    const { generalInfo, onEditClick } = props;
    const { firstName, lastName, email, phone, edit } = generalInfo;

    return (
        <div id="general-info-container">
            <h3>GeneralInfo</h3>
            <p>
                {firstName ? firstName : "John"} {lastName ? lastName : "Doe"}
            </p>
            <p>email : {email ? email : "john_doe@example.com"}</p>
            <p>Phone : {phone ? phone : "0404 040 404"}</p>
            <button onClick={() => onEditClick("generalInfo")}>edit</button>
        </div>
    );
};
export default GeneralInfoText;
