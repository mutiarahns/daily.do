import React from "react";
import { Todo } from "@/types/task";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { TodoItem } from "./todo-item";

export function TodoApp() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [newTodo, setNewTodo] = React.useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;

    setTodos([
      ...todos,
      { id: todos.length + 1, text: newTodo, isCompleted: false },
    ]);

    setNewTodo("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">daily.do</h1>

      <div className="flex gap-4">
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="What do you want to do?"
        />
        <Button onClick={addTodo}>Add</Button>
      </div>

      <ul className="mt-2 space-y-2">
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            onToggle={() => toggleTodo(item.id)}
            onDelete={() => deleteTodo(item.id)}
          />
        ))}
      </ul>
    </div>
  );
}
