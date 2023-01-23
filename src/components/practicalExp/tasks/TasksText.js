import { MdEdit, MdPlaylistAdd, MdDeleteForever } from "react-icons/md";

const TasksText = (props) => {
    const { eachTask, onEditClick, onDeleteClick, onDuplicateClick, i, j } =
        props;

    return (
        <li key={eachTask.key}>
            {eachTask.task ? eachTask.task : `task ${j + 1}`}
            <button onClick={() => onEditClick("practical", i, "tasks", j)}>
                <MdEdit size={10} />
            </button>
            <button
                onClick={() => onDuplicateClick("practical", i, "tasks", j)}
            >
                <MdPlaylistAdd size={10} />
            </button>
            <button onClick={() => onDeleteClick("practical", i, "tasks", j)}>
                <MdDeleteForever size={10} />
            </button>
        </li>
    );
};
export default TasksText;
