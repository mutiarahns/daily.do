export type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

export type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};
