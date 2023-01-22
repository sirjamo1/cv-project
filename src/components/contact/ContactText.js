import React from "react";
import {
    MdOutlineMail,
    MdPhoneAndroid,
    MdPerson,
    MdEdit,
} from "react-icons/md";

const ContactText = (props) => {
    const { contact, onEditClick } = props;
    const { firstName, lastName, email, phone } = contact;

    return (
        <div id="contact-text">
            <div>
                <MdPerson />
                <p>
                    {firstName ? firstName : "John"}{" "}
                    {lastName ? lastName : "Doe"}
                </p>
            </div>
            <div>
                <MdOutlineMail />
                <p>{email ? email : "john_doe@example.com"}</p>
            </div>
            <div>
                <MdPhoneAndroid />
                <p>{phone ? phone : "0404 040 404"}</p>
            </div>
            <button onClick={() => onEditClick("contact")}>
                <MdEdit size={20} />
            </button>
        </div>
    );
};
export default ContactText;
