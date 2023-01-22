import React from "react";
import ContactForm from "./ContactForm";
import ContactText from "./ContactText";

const Contact = (props) => {
    const { contact, onFormSubmit, handleFormChange, onEditClick } = props;

    return (
        <div id="contact-container">
            <h3>Contact</h3>
            {contact.edit === true ? (
                <ContactForm
                    contact={contact}
                    handleFormChange={handleFormChange}
                    onFormSubmit={onFormSubmit}
                />
            ) : (
                <ContactText
                    contact={contact}
                    onEditClick={onEditClick}
                />
            )}
        </div>
    );
};

export default Contact;
