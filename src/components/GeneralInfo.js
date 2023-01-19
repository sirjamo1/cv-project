import React from "react";

const GeneralInfo = (props) => {
    const {
        firstName,
        lastName,
        email,
        phone,
        onSubmitGeneral,
        handleGeneralChange,
    } = props;

    return (
        <div id="general-info-container">
            <h3>GeneralInfo</h3>
            <form
                id="general-info-form"
                onSubmit={(e) => {
                    onSubmitGeneral(e);
                }}
            >
                <label>First name</label>
                <input
                    onChange={(e) => {
                        handleGeneralChange(e);
                    }}
                    type="text"
                    value={firstName || ""}
                    id="firstNameInput"
                    name="firstName"
                ></input>
                <label>Family name</label>
                <input
                    onChange={(e) => {
                        handleGeneralChange(e);
                    }}
                    type="text"
                    value={lastName || ""}
                    id="lastNameInput"
                    name="lastName"
                ></input>
                <label>E-mail</label>
                <input
                    onChange={(e) => {
                        handleGeneralChange(e);
                    }}
                    type="email"
                    value={email || ""}
                    id="emailInput"
                    name="email"
                ></input>
                <label>Phone</label>
                <input
                    onChange={(e) => {
                        handleGeneralChange(e);
                    }}
                    type="number"
                    value={phone || ""}
                    id="phoneInput"
                    name="phone"
                ></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default GeneralInfo;
