import React from "react";
import { MdEdit, MdPlaylistAdd, MdDeleteForever } from "react-icons/md";

const PracticalExpText = (props) => {
    const { practical, onEditClick, onDeleteClick, onDuplicateClick, i } =
        props;
    const { companyName, position, tasks, startDate, endDate } = practical;
    return (
        <div className="practical-text">
            <p>{companyName ? companyName : "Google"}</p>
            <p>{position ? position : "CEO"}</p>
            <p>{tasks ? tasks : "tasks need to be listed"}</p>
            <p>{startDate ? startDate : "year-month-day"}</p>
            <p>{endDate ? endDate : "year-month-day"}</p>
            <div className="text-button-container">
                <button onClick={() => onEditClick("practical", i)}>
                    <MdEdit size={20} />
                </button>
                <button onClick={() => onDuplicateClick("practical", i)}>
                    <MdPlaylistAdd size={20} />
                </button>
                <button onClick={() => onDeleteClick("practical", i)}>
                    <MdDeleteForever size={20} />
                </button>
            </div>
        </div>
    );
};

export default PracticalExpText;
