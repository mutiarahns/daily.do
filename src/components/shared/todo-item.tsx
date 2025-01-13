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
    <li className="flex items-center space-x-2">
      <Checkbox
        id={`todo-${todo.id}`}
        checked={todo.isCompleted}
        onCheckedChange={() => onToggle(todo.id)}
      />
      <label
        htmlFor={`todo-${todo.id}`}
        className={`flex-grow ${
          todo.isCompleted ? "text-gray-500 line-through" : ""
        }`}
      >
        {todo.text}
      </label>
      <Button variant="destructive" size="sm" onClick={() => onDelete(todo.id)}>
        Delete
      </Button>
    </li>
  );
}
