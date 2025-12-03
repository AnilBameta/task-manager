import { useState } from "react";
import { TaskProvider, useTasks } from "./context/TaskContext";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";
import ThemeToggle from "./components/ThemeToggle";
import "./app.css";
import { DragDropContext } from "@hello-pangea/dnd";

function AppInner() {
  const { tasks, setTasks } = useTasks();  
  const [filter, setFilter] = useState("all");

  const filtered = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const reorderTasks = (result) => {
    if (!result.destination) return;

    const items = [...tasks];
    const [removed] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, removed);

    setTasks(items);
  };

  return (
    <div className="container">
      <div className="header">
      <h3>My To-Do List</h3>
      <ThemeToggle />
      </div>
      <TaskInput />
      <FilterButtons filter={filter} setFilter={setFilter} />
      
      {/* Wrap TaskList inside DragDropContext */}
      <DragDropContext onDragEnd={reorderTasks}>
        <TaskList filteredTasks={filtered} />
      </DragDropContext>
    </div>
  );
}


export default function App() {
  return (
    <TaskProvider>
      <AppInner />
    </TaskProvider>
  );
}
