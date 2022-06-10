import "./App.css";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

const App: React.FC = () => {
  return (
    <div className="App">
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
