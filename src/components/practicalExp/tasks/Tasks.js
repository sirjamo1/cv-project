import React from "react";
import { MdPlaylistAdd } from "react-icons/md";
import TasksForm from "./TasksForm";
import TasksText from "./TasksText";
const Tasks = (props) => {
    const {
        tasks,
        onEditClick,
        onDeleteClick,
        onDuplicateClick,
        handleFormChange,
        onFormSubmit,
        i,
    } = props;
    console.log(tasks, i);
    if (tasks.length > 0) {
        return (
            <ul className="tasks-container">
                Tasks
                {tasks.map((eachTask, j) => {
                    if (eachTask.edit === false) {
                        return (
                            <TasksText
                                eachTask={eachTask}
                                i={i}
                                j={j}
                                onDuplicateClick={onDuplicateClick}
                                onDeleteClick={onDeleteClick}
                                onEditClick={onEditClick}
                            />
                        );
                    } else {
                        return (
                            <TasksForm
                                eachTask={eachTask}
                                i={i}
                                j={j}
                                handleFormChange={handleFormChange}
                                onFormSubmit={onFormSubmit}
                            />
                        );
                    }
                })}
            </ul>
        );
    } else {
        return (
            <ul className="tasks-container">
                Tasks
                <li>
                    <button
                        onClick={() =>
                            onDuplicateClick("practical", i, "tasks", 0)
                        }
                    >
                        <MdPlaylistAdd size={20} />
                    </button>
                </li>
            </ul>
        );
    }
};
export default Tasks;
