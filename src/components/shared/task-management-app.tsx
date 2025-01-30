import { useState } from "react";
import { TaskItem } from "@/types/todo";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Cardlist } from "./card-list";
import { AddNew } from "./add-new";
import { Plus } from "lucide-react";
import { Link } from "react-router";

const initialTasks: TaskItem[] = [
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

const taskStates = [
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

export function TaskManagementApp() {
  const [tasks, setTasks] = useState<TaskItem[]>(initialTasks);

  const updateTask = (id: number, todo: TaskItem) => {
    setTasks(tasks.map((item) => (item.id === id ? todo : item)));
  };

  const addNewTask = (task: TaskItem) => {
    console.log(task);
    const newTask = { ...task, id: tasks.length + 1 };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    const task = tasks.find((task) => task.id === id);

    if (task) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  return (
    <div className="max-w mx-auto mt-8 px-4 xl:max-w-7xl">
      <div className="mb-4 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <Link to="/about">
            <h1 className="mb-4 text-2xl font-bold">daily.do</h1>
          </Link>
          <AddNew addNewTask={addNewTask} buttonVariant="default">
            <Plus />
            <p className="text-[12px]">Add Task</p>
          </AddNew>
        </div>

        <p className="text-sm">
          <span className="text-gray-500">Daily.do</span> is a simple to-do app
          that helps you manage your daily tasks.
        </p>
      </div>

      <div className="flex flex-col gap-4 rounded-md p-4">
        <Separator />

        <ScrollArea className="whitespace-nowrap pb-10">
          <div className="flex gap-6">
            {taskStates.map((state) => (
              <Cardlist
                key={`card-${state}`}
                tasks={tasks
                  .filter((todo) => todo.state === state.key)
                  .reverse()}
                state={state.title}
                updateTask={updateTask}
                deleteTask={deleteTask}
              >
                <AddNew addNewTask={addNewTask} buttonVariant="ghost">
                  <Plus />
                </AddNew>
              </Cardlist>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
