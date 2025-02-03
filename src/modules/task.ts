import { initialTasks } from "@/data/initial-task-data";
import { TaskItem } from "@/types/todo";

export function getTasksFromStorage() {
  const storedTasks = localStorage.getItem("tasks");

  const parsedTasks = storedTasks ? JSON.parse(storedTasks) : initialTasks;

  const transformedTasks: TaskItem[] = parsedTasks.map((task: TaskItem) => ({
    ...task,
    createdDate: new Date(task.createdDate),
  }));

  return transformedTasks;
}

export function getTaskById(id: number) {
  const tasks = getTasksFromStorage();

  return tasks.find((task) => task.id === id);
}

export function setTaskToStorage(task: TaskItem[]) {
  localStorage.setItem("tasks", JSON.stringify(task));
}
