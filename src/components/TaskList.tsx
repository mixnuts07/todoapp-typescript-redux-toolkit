import { Task } from "../Types";
import TaskItem from "./TaskItem";
import "../App.css";
// useSelector .. tasksをstateから読み込む必要がある
// (moduleのstateを読み込める)
import { useSelector } from "react-redux";
import { RootState } from "../rootReducer";

const TaskList: React.FC = () => {
  const { tasks } = useSelector((state: RootState) => state.tasks);
  return (
    <div className="inner">
      {tasks.length <= 0 ? (
        "登録されたTODOはありません"
      ) : (
        <ul className="task-list">
          {tasks.map((task) => {
            return <TaskItem task={task} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
