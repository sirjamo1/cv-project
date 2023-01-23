import { MdSave } from "react-icons/md";

const TasksForm = (props) => {
    const { eachTask, handleFormChange, onFormSubmit, i, j } = props;
    return (
        <li key={eachTask.key}>
            <input
                onChange={(e) => {
                    handleFormChange(e, "practical", i, "tasks", j);
                }}
                type="text"
                value={eachTask.task}
                name="task"
                placeholder={eachTask.task ? eachTask.task : `task ${j + 1}`}
            ></input>
            <button
                onClick={(e) => {
                    onFormSubmit(e, "practical", i, "tasks", j);
                }}
            >
                <MdSave size={10} />
            </button>
        </li>
    );
};
export default TasksForm;
