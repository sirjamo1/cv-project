import { MdPlaylistAdd, MdDeleteForever } from "react-icons/md";

const TasksForm = (props) => {
    const { tasks, handleFormChange, onDeleteClick, onDuplicateClick, i } =
        props;
if (tasks.length > 0) {
    return (
        <ul className="tasks-form-container">
            <b>Tasks : </b>
            {tasks.map((eachTask, j) => {
                return (
                    <li key={eachTask.key}>
                        <input
                            onChange={(e) => {
                                handleFormChange(e, "practical", i, "tasks", j);
                            }}
                            type="text"
                            value={eachTask.task}
                            name="task"
                            placeholder={
                                eachTask.task ? eachTask.task : `task ${j + 1}`
                            }
                        ></input>
                        <button
                            onClick={(e) =>                        
                                onDuplicateClick("practical", i, "tasks", j, e)
                            }
                        >
                            <MdPlaylistAdd size={14} />
                        </button>
                        <button className="delete-button"
                            onClick={() =>
                                onDeleteClick("practical", i, "tasks", j)
                            }
                        >
                            <MdDeleteForever size={14} />
                        </button>
                    </li>
                );
            })}
        </ul>
    );
        } else {return (
            <ul className="tasks-container">
                <b>Tasks :</b>
                <li>
                    <button
                        onClick={(e) =>
                            onDuplicateClick("practical", i, "tasks", 0, e)
                        }
                    >
                        <MdPlaylistAdd size={20} />
                    </button>
                </li>
            </ul>
        );}
};
export default TasksForm;
