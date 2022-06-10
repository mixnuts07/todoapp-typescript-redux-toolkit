import { Task } from "../Types";
import "../App.css";
import { deleteTask, doneTask } from "../modules/tasksModule";
import { useDispatch } from "react-redux";

type Props = {
  task: Task;
};

const TaskItem: React.FC<Props> = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <li className={task.done ? "done" : ""}>
      <label>
        <input
          type="checkbox"
          className="checkbox-input"
          onClick={() => dispatch(doneTask(task))}
        />
        <span className="checkbox-label">{task.title}</span>
      </label>
      <button
        className="btn is-deleted"
        onClick={() => dispatch(deleteTask(task))}
      >
        削除
      </button>
    </li>
  );
};

export default TaskItem;
