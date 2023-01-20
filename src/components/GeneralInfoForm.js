import React from "react";

const GeneralInfoForm = (props) => {
    const { generalInfo, onSubmitGeneral, handleGeneralChange } = props;
    const { firstName, lastName, email, phone, edit } = generalInfo;

    return (
        <div id="general-info-container">
            <h3>GeneralInfo</h3>
            <form
                id="general-info-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmitGeneral(e);
                }}
            >
                <label>First name</label>
                <input
                    onChange={(e) => {
                        handleGeneralChange(e);
                    }}
                    type="text"
                    value={firstName}
                    id="firstNameInput"
                    name="firstName"
                    placeholder="First Name"
                ></input>
                <label>Family name</label>
                <input
                    onChange={(e) => {
                        handleGeneralChange(e);
                    }}
                    type="text"
                    value={lastName}
                    id="lastNameInput"
                    name="lastName"
                    placeholder="Last Name"
                ></input>
                <label>E-mail</label>
                <input
                    onChange={(e) => {
                        handleGeneralChange(e);
                    }}
                    type="email"
                    value={email}
                    id="emailInput"
                    name="email"
                    placeholder="email"
                ></input>
                <label>Phone</label>
                <input
                    onChange={(e) => {
                        handleGeneralChange(e);
                    }}
                    type="number"
                    value={phone}
                    id="phoneInput"
                    name="phone"
                    placeholder="Phone number"
                ></input>
                <button type="submit">Submit</button>        
            </form>
        </div>
    );
};

export default GeneralInfoForm;
