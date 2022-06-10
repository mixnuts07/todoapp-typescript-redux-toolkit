import { useState } from "react";
import "../App.css";
import { Task } from "../Types";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskInput: React.FC<Props> = ({ tasks, setTasks }) => {
  const [inputTitle, setInputTitle] = useState("he");
  const [count, setCount] = useState(tasks.length + 1);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };
  const handleSubmit = () => {
    setCount(count + 1);
    const newTask: Task = {
      id: count,
      title: inputTitle,
      done: false,
    };
    setTasks([newTask, ...tasks]); // 新しい配列作成！！
    setInputTitle("end");
  };
  return (
    <div className="input-form">
      <div className="inner">
        <input
          type="text"
          className="input"
          onChange={handleInputChange}
          value={inputTitle}
        />
        <button onClick={handleSubmit} className="btn is-primary">
          追加
        </button>
        <p>{inputTitle}</p>
        <p>{count}</p>
      </div>
    </div>
  );
};

export default TaskInput;
