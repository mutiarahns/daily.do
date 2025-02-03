import { useEffect, useState } from "react";
import { TaskItem } from "@/types/todo";
import { Plus } from "lucide-react";
import { Link, Outlet } from "react-router";
import { AddNew } from "@/components/shared/add-new";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getTasksFromStorage, setTaskToStorage } from "@/modules/task";

export function LayoutRoute() {
  const [tasks, setTasks] = useState(getTasksFromStorage());

  useEffect(() => {
    setTaskToStorage(tasks);
  }, [tasks]);

  const addNewTask = (task: TaskItem) => {
    console.log(task);
    const newTask = { ...task, id: tasks.length + 1 };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="max-w mx-auto flex min-h-screen flex-col px-4 py-8 xl:max-w-7xl">
      <header className="mb-4 flex flex-col justify-between">
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
      </header>

      <ScrollArea className="flex-[1]">
        <Outlet />
      </ScrollArea>

      <footer>
        <p className="pt-5 text-center text-sm">
          Copyright © {new Date().getFullYear()} Daily.do. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
