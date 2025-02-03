import { TaskManagementApp } from "@/components/shared/task-management-app";
import { getTasksFromStorage, setTaskToStorage } from "@/modules/task";
import { TaskItem } from "@/types/todo";
import { useEffect, useState } from "react";

export function Dashboard() {
  const [tasks, setTasks] = useState(getTasksFromStorage());

  useEffect(() => {
    setTaskToStorage(tasks);
  }, [tasks]);

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

  const updateTask = (id: number, task: TaskItem) => {
    setTasks(tasks.map((item) => (item.id === id ? task : item)));
  };

  return (
    <TaskManagementApp
      tasks={tasks}
      updateTask={updateTask}
      deleteTask={deleteTask}
      addNewTask={addNewTask}
    />
  );
}
