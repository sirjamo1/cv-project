import React from "react";

const PracticalExpText = (props) => {
    const { practical, onEditClick, i } = props;
    const { companyName, position, tasks, startDate, endDate } = practical;
    return (
        <div id="general-info-container">
            <h3>Practical text</h3>
            <button onClick={() => onEditClick("practical", i)}>edit</button>
        </div>
    );
};

export default PracticalExpText;
