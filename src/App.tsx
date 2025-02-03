import { useEffect } from "react";
import { useState } from "react";
import { TaskManagementApp } from "./components/shared/task-management-app";
import { getTasksFromStorage, setTaskToStorage } from "./modules/task";
import { TaskItem } from "./types/todo";

export function App() {
  const [tasks, setTasks] = useState(getTasksFromStorage());

  useEffect(() => {
    setTaskToStorage(tasks);
  }, [tasks]);

  const updateTask = (id: number, todo: TaskItem) => {
    setTasks(tasks.map((item) => (item.id === id ? todo : item)));
  };

  const addNewTask = (task: TaskItem) => {
    console.log(task);
    const newTask = { ...task, id: tasks[tasks.length - 1].id + 1 };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    const task = tasks.find((task) => task.id === id);

    if (task) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  return (
    <div>
      <TaskManagementApp
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        addNewTask={addNewTask}
      />
    </div>
  );
}
