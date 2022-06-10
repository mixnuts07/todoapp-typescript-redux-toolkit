import { Task } from "../Types";
import "../App.css";
type Props = {
  task: Task;
  handleDone: (task: Task) => void;
  handleDelete: (task: Task) => void;
};

const TaskItem: React.FC<Props> = ({ task, handleDone, handleDelete }) => {
  return (
    <li className={task.done ? "done" : ""}>
      <label>
        <input
          type="checkbox"
          className="checkbox-input"
          onClick={() => handleDone(task)}
        />
        <span className="checkbox-label">{task.title}</span>
      </label>
      <button className="btn is-deleted" onClick={() => handleDelete(task)}>
        削除
      </button>
    </li>
  );
};

export default TaskItem;
