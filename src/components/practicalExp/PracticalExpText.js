import React from "react";
import { MdEdit, MdPlaylistAdd, MdDeleteForever } from "react-icons/md";
import Tasks from "./tasks/Tasks";

const PracticalExpText = (props) => {
    const {
        practical,
        onEditClick,
        onDeleteClick,
        onDuplicateClick,
        handleFormChange,
        onFormSubmit,
        i,
    } = props;
    const { companyName, position, tasks, startDate, endDate } = practical;
    return (
        <div className="practical-text">
            <p>{companyName ? companyName : "Google"}</p>
            <p>{position ? position : "CEO"}</p>
            <Tasks
                tasks={tasks}
                onEditClick={onEditClick}
                onDeleteClick={onDeleteClick}
                onDuplicateClick={onDuplicateClick}
                handleFormChange={handleFormChange}
                onFormSubmit={onFormSubmit}
                i={i}
            />
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

/* <ul className="tasks-container">
                Tasks
                {tasks.map((eachTask, j) => {
                    if (eachTask.edit === false) {
                        return (
                            <li key={eachTask.key}>
                                {eachTask.task
                                    ? eachTask.task
                                    : `task ${j + 1}`}
                                <button
                                    onClick={() =>
                                        onEditClick("practical", i, "tasks", j)
                                    }
                                >
                                    <MdEdit size={10} />
                                </button>
                                <button
                                    onClick={() =>
                                        onDuplicateClick(
                                            "practical",
                                            i,
                                            "tasks",
                                            j
                                        )
                                    }
                                >
                                    <MdPlaylistAdd size={10} />
                                </button>
                                <button
                                    onClick={() =>
                                        onDeleteClick(
                                            "practical",
                                            i,
                                            "tasks",
                                            j
                                        )
                                    }
                                >
                                    <MdDeleteForever size={10} />
                                </button>
                            </li>
                        );
                    } else {
                        return (
                            <li key={eachTask.key}>
                                <input
                                    onChange={(e) => {
                                        handleFormChange(
                                            e,
                                            "practical",
                                            i,
                                            "tasks",
                                            j
                                        );
                                    }}
                                    type="text"
                                    value={eachTask.task}
                                    name="task"
                                    placeholder={
                                        eachTask.task
                                            ? eachTask.task
                                            : `task ${j + 1}`
                                    }
                                ></input>
                                <button
                                    onClick={(e) => {
                                        onFormSubmit(
                                            e,
                                            "practical",
                                            i,
                                            "tasks",
                                            j
                                        );
                                    }}
                                >
                                    <MdSave size={10} />
                                </button>
                            </li>
                        );
                    }
                })}
            </ul> */
