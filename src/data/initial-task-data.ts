import { TaskItem } from "@/types/todo";

export const initialTasks: TaskItem[] = [
  {
    id: 1,
    taskName: "Deploy your new project in one-click.",
    taskDescription: "Deploy your new project in one-click.",
    isCompleted: false,
    createdDate: new Date(),
    priority: 1,
    state: "todo",
  },
  {
    id: 2,
    taskName: "Deploy your new project in one-click.",
    taskDescription: "Deploy your new project in one-click.",
    isCompleted: false,
    createdDate: new Date(),
    priority: 1,
    state: "todo",
  },
  {
    id: 3,
    taskName: "Deploy your new project in one-click.",
    taskDescription: "Deploy your new project in one-click.",
    isCompleted: false,
    createdDate: new Date(),
    priority: 1,
    state: "todo",
  },
  {
    id: 4,
    taskName: "Deploy your new project in one-click.",
    taskDescription: "Deploy your new project in one-click.",
    isCompleted: false,
    createdDate: new Date(),
    priority: 2,
    state: "in-progress",
  },
  {
    id: 5,
    taskName: "Deploy your new project in one-click.",
    taskDescription: "Deploy your new project in one-click.",
    isCompleted: false,
    createdDate: new Date(),
    priority: 3,
    state: "done",
  },
];

export const taskStates = [
  {
    key: "todo",
    title: "To-Do",
  },
  {
    key: "in-progress",
    title: "In Progress",
  },
  {
    key: "done",
    title: "Done",
  },
];
