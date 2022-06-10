import React, { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import { Task } from "./Types";

const initialState: Task[] = [
  {
    id: 2,
    title: "次のTODO",
    done: false,
  },
  {
    id: 1,
    title: "最初のTODO",
    done: true,
  },
];

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState);
  return (
    <div className="App">
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
