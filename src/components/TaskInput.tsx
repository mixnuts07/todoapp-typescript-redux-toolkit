import { useState } from "react";
import "../App.css";
import { addTask } from "../modules/tasksModule";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

type FormData = {
  title: string;
};

const TaskInput: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, reset } = useForm<FormData>();
  const [inputTitle, setInputTitle] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };
  const handleOnSubmit = (data: FormData) => {
    dispatch(addTask(data.title));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} className="input-form">
      <div className="inner">
        <input
          type="text"
          className="input"
          onChange={handleInputChange}
          value={inputTitle}
          placeholder="TODOを入力してね"
          ref={register({
            required: "タイトルは必ず入力してね",
            minLength: { value: 3, message: "タイトルは３文字以上！" },
            maxLength: { value: 10, message: "タイトルは8文字以下！" },
          })}
        />
        <button className="btn is-primary">追加</button>
        {errors.title && (
          <span className="error-message">{errors.title.message}</span>
        )}
      </div>
    </form>
  );
};

export default TaskInput;
