import { useState } from "react";
import { useTasks } from "../context/TaskContext";

export default function TaskInput() {
  const { addTask } = useTasks();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        className="search-box"
        placeholder="Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="search-button">+</button>
    </form>
  );
}
