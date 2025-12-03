import { Droppable } from "@hello-pangea/dnd";
import TaskItem from "./TaskItem";

export default function TaskList({ filteredTasks }) {
  return (
    <Droppable droppableId="task-list">
      {(provided) => (
        <ul
          className="task-list"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {filteredTasks.map((task, index) => (
            <TaskItem key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}
