import React from "react";
import { MdOutlineMail, MdPhoneAndroid, MdPerson } from "react-icons/md";

const ContactForm = (props) => {
    const { contact, onFormSubmit, handleFormChange, i } = props;
    const { firstName, lastName, email, phone } = contact;

    return (

            <form id="contact-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    onFormSubmit(e, "contact", i);
                }}
            >
                <div id="contact-form-first-and-last">
                   <MdPerson /> <input
                        onChange={(e) => {
                            handleFormChange(e, "contact", i);
                        }}
                        type="text"
                        value={firstName}
                        id="firstNameInput"
                        name="firstName"
                        placeholder={firstName ? firstName : "First name"}
                    ></input>
                    <input
                        onChange={(e) => {
                            handleFormChange(e, "contact", i);
                        }}
                        type="text"
                        value={lastName}
                        id="lastNameInput"
                        name="lastName"
                        placeholder={lastName ? lastName : "Last Name"}
                    ></input>
                </div>
                <div>
                    <MdOutlineMail />
                    <input
                        onChange={(e) => {
                            handleFormChange(e, "contact", i);
                        }}
                        type="email"
                        value={email}
                        id="emailInput"
                        name="email"
                        placeholder={email ? email : "email"}
                    ></input>
                </div>
                <div>
                   <MdPhoneAndroid /> <input
                        onChange={(e) => {
                            handleFormChange(e, "contact", i);
                        }}
                        type="number"
                        value={phone}
                        id="phoneInput"
                        name="phone"
                        placeholder={phone ? phone : "Phone number"}
                    ></input>
                </div>

                <button type="submit">Submit</button>
            </form>
    );
};

export default ContactForm;
