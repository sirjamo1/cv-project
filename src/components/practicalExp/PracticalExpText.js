import React from "react";

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
            <button onClick={() => onEditClick("practical", i)}>Edit</button>
            <button onClick={() => onDuplicateClick("practical", i)}>
                Duplicate
            </button>
            <button onClick={() => onDeleteClick("practical", i)}>
                Delete
            </button>
        </div>
    );
};

export default PracticalExpText;
