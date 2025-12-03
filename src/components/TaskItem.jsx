import { Draggable } from "@hello-pangea/dnd";
import { useTasks } from "../context/TaskContext";
import { IoTrashBin } from 'react-icons/io5';

export default function TaskItem({ task, index }) {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`task-item ${task.completed ? "completed" : ""}`}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <p>{task.text}</p>
         
            <IoTrashBin 
          size={20} // Icon size in pixels
          onClick={() => deleteTask(task.id)}
        //   className={isDarkMode ? 'dark-mode-icon' : 'light-mode-icon'} 
        />
        </li>
      )}
    </Draggable>
  );
}
