import React from "react";

const PracticalExpText = (props) => {
    const { practical, practicalEdit } = props;
    const { companyName, position, tasks, startDate, endDate } = practical;
    return (
         <div id="general-info-container">
            <h3>Practical text</h3>
            <button onClick={(e) => practicalEdit(e)}>edit</button>
        </div>
    );
};

export default PracticalExpText;
