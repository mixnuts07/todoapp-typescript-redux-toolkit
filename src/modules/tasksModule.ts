import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../Types";

type State = {
  count: number;
  tasks: Task[];
};

const initialState: State = {
  count: 2,
  tasks: [
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
  ],
};

const tasksModule = createSlice({
  // name..Sliceを識別する名前
  name: "tasks",
  initialState,
  // reducers .. stateを更新する関数
  reducers: {
    // あるtaskが実行された時の引数はactionの中のpayloadに入る!
    addTask(state: State, action: PayloadAction<string>) {
      state.count++;
      const newTask: Task = {
        id: state.count,
        title: action.payload,
        done: false,
      };
      state.tasks = [newTask, ...state.tasks];
    },
    doneTask(state: State, action: PayloadAction<Task>) {
      const task = state.tasks.find((t) => t.id !== action.payload.id);

      if (task) {
        task.done = !task.done;
      }
      //   state.tasks = state.tasks.map((t) =>
      //     t.id === action.payload.id ? { ...t, done: !action.payload.done } : t
      //   );
    },
    deleteTask(state: State, action: PayloadAction<Task>) {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
  },
});
// reducers に登録した関数は各componentsからアクセスしやすいようにexport!!
// tasksModule.actions でこれらの関数にアクセス可能!!
export const { addTask, doneTask, deleteTask } = tasksModule.actions;
export default tasksModule;
