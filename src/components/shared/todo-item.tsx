import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Todo } from "@/types/todo";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center space-x-3">
      <Checkbox
        id={`todo-${todo.id}`}
        checked={todo.isCompleted}
        onCheckedChange={() => onToggle(todo.id)}
      />

      <div className="flex-grow">
        <p
          className={`flex-grow text-lg font-semibold ${
            todo.isCompleted ? "text-gray-500 line-through" : ""
          }`}
        >
          {todo.text}
        </p>
        <p
          className={`text-sm ${todo.isCompleted ? "text-gray-500 line-through" : ""}`}
        >
          {todo.date.toDateString()}
        </p>
      </div>

      <Button variant="destructive" size="sm" onClick={() => onDelete(todo.id)}>
        Delete
      </Button>
    </li>
  );
}
