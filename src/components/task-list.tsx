import { TaskListItem } from "./task-item.tsx";
import { TaskItem } from "../types/task.tsx";

type TaskListProps = {
  taskItem: TaskItem[];
};

export function TaskList({ taskItem }: TaskListProps) {
  return (
    <ul>
      {taskItem.map((item) => (
        <TaskListItem
          key={item.id}
          text={item.text}
          isCompleted={item.isCompleted}
        />
      ))}
    </ul>
  );
}
