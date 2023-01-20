import React from "react";

const GeneralInfoForm = (props) => {
    const { generalInfo, onFormSubmit, handleFormChange } = props;
    const { firstName, lastName, email, phone, edit } = generalInfo;

    return (
        <div id="general-info-container">
            <h3>GeneralInfo</h3>
            <form
                id="general-info-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    onFormSubmit(e, "generalInfo");
                }}
            >
                <label>
                    First name
                    <input
                        onChange={(e) => {
                            handleFormChange(e, "generalInfo");
                        }}
                        type="text"
                        value={firstName}
                        id="firstNameInput"
                        name="firstName"
                        placeholder="First Name"
                    ></input>
                </label>
                <label>
                    Family name
                    <input
                        onChange={(e) => {
                            handleFormChange(e, "generalInfo");
                        }}
                        type="text"
                        value={lastName}
                        id="lastNameInput"
                        name="lastName"
                        placeholder="Last Name"
                    ></input>
                </label>
                <label>
                    E-mail
                    <input
                        onChange={(e) => {
                            handleFormChange(e, "generalInfo");
                        }}
                        type="email"
                        value={email}
                        id="emailInput"
                        name="email"
                        placeholder="email"
                    ></input>
                </label>
                <label>
                    Phone
                    <input
                        onChange={(e) => {
                            handleFormChange(e, "generalInfo");
                        }}
                        type="number"
                        value={phone}
                        id="phoneInput"
                        name="phone"
                        placeholder="Phone number"
                    ></input>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default GeneralInfoForm;
