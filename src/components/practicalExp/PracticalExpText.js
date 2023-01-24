import React from "react";
import { MdEdit, MdPlaylistAdd, MdDeleteForever } from "react-icons/md";

const PracticalExpText = (props) => {
    const {
        practical,
        onEditClick,
        onDeleteClick,
        onDuplicateClick,
        i,
    } = props;
    const { companyName, position, tasks, startDate, endDate } = practical;
    return (
        <div className="practical-text-card">
            <p>
                <b>Company :</b> {companyName ? companyName : "Google"}
            </p>
            <p>
                <b>Position :</b> {position ? position : "CEO"}
            </p>
            <ul className="tasks-text-container">
                <b>Tasks :</b>
                {tasks.map((eachTask, j) => {
                    return (
                        <li key={eachTask.key}>
                            {eachTask.task ? eachTask.task : `task ${j + 1}`}
                        </li>
                    );
                })}
            </ul>
            <p>
                <b>Start Date :</b> {startDate ? startDate : "year-month-day"}
            </p>
            <p>
                <b>End Date :</b> {endDate ? endDate : "year-month-day"}
            </p>
            <div className="text-button-container">
                <button onClick={() => onEditClick("practical", i)}>
                    <MdEdit size={20} />
                </button>
                <button onClick={() => onDuplicateClick("practical", i)}>
                    <MdPlaylistAdd size={20} />
                </button>
                <button
                    className="delete-button"
                    onClick={() => onDeleteClick("practical", i)}
                >
                    <MdDeleteForever size={20} />
                </button>
            </div>
        </div>
    );
};

export default PracticalExpText;

