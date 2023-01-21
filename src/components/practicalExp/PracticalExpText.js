import React from "react";

const PracticalExpText = (props) => {
    const { practical, onEditClick, i } = props;
    const { companyName, position, tasks, startDate, endDate } = practical;
    return (
        <div id="general-info-container">
            <p>{companyName ? companyName : "Google"}</p>
            <p>{position ? position : "CEO"}</p>
            <p>{tasks ? tasks : "tasks need to be listed"}</p>
            <p>{startDate ? startDate : "year-month-day"}</p>
            <p>{endDate ? endDate : "year-month-day"}</p>
            <button onClick={() => onEditClick("practical", i)}>edit</button>
        </div>
    );
};

export default PracticalExpText;
