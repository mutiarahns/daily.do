import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  getTaskById,
  getTasksFromStorage,
  setTaskToStorage,
} from "@/modules/task";
import { TaskItemState } from "@/types/todo";
import { ArrowLeftIcon, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

export function TaskDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(getTaskById(Number(params.id)));

  if (!task) {
    navigate("/");
  }

  useEffect(() => {
    const storedTasks = getTasksFromStorage();
    const updatedTask = storedTasks.map((item) =>
      item.id === task?.id ? task : item,
    );
    setTaskToStorage(updatedTask);
  }, [task]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!task) {
      return null;
    }

    const formData = new FormData(e.currentTarget);

    const newTask = {
      ...task,
      taskName: formData.get("taskName") as string,
      taskDescription: formData.get("taskDescription") as string,
      priority: Number(formData.get("priority") as string),
      state: formData.get("state") as TaskItemState,
    };

    console.log(newTask);

    setTask(newTask);
    navigate("/");
  };

  const handleCompleteTask = (isCompleted: boolean) => {
    if (!task) {
      return null;
    }

    setTask({ ...task, isCompleted });
  };

  return (
    <div className="max-w mx-auto flex min-h-screen flex-col px-4 pt-8 xl:max-w-3xl">
      <header className="flex flex-row items-center justify-between rounded-md bg-white p-4">
        <div className="flex items-center space-x-2 text-sm">
          <Button
            onClick={() => (window.location.href = "/")}
            variant={"ghost"}
            className="z-50 p-0 text-sm text-gray-700 hover:bg-transparent"
          >
            <ArrowLeftIcon />
          </Button>
          <p>Task Detail</p>
        </div>

        <div className="flex items-center space-x-2">
          {!task?.isCompleted && (
            <div>
              <Button
                onClick={() => handleCompleteTask(true)}
                variant="outline"
                className="h-8 px-4 py-2 hover:border-green-500 hover:bg-green-100 hover:text-green-700"
              >
                <Check />
                <p className="text-[12px]">Mark complete</p>
              </Button>
            </div>
          )}

          {task?.isCompleted && (
            <div>
              <Button
                onClick={() => handleCompleteTask(false)}
                variant="outline"
                className="h-8 border-green-500 bg-green-100 px-4 py-2 text-green-700 hover:bg-green-100 hover:text-green-700"
              >
                <Check />
                <p className="text-[12px]">Completed</p>
              </Button>
            </div>
          )}
        </div>
      </header>

      <Separator />

      <ScrollArea className="flex-[1] rounded-sm bg-white">
        <form onSubmit={handleSubmit} className="space-y-5 p-4">
          <Input
            name="taskName"
            defaultValue={task?.taskName}
            placeholder="Input title"
            className="border-0 text-2xl font-bold outline-none md:text-2xl"
          />

          <div className="flex flex-row">
            <div className="basis-1/3">
              <p className="px-4 text-[12px] text-slate-400">Priority</p>
            </div>
            <div className="basis-2/3">
              <Select defaultValue={String(task?.priority)} name="priority">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Low</SelectItem>
                  <SelectItem value="2">Medium</SelectItem>
                  <SelectItem value="3">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="basis-1/3">
              <p className="px-4 text-[12px] text-slate-400">State</p>
            </div>
            <div className="basis-2/3">
              <Select defaultValue={String(task?.state)} name="state">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todo">To Do</SelectItem>
                  <SelectItem value="in-progress">Inprogress</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="basis-1/3">
              <p className="px-4 text-[12px] text-slate-400">Description</p>
            </div>
            <div className="basis-2/3">
              <Textarea
                name="taskDescription"
                rows={6}
                defaultValue={task?.taskDescription}
                placeholder="Input description"
                className="resize-none"
              />
            </div>
          </div>

          <div className="flex flex-row justify-between gap-8 pt-5">
            <Button size="sm" variant={"outline"} className="w-full">
              <Link to={"/"}>Cancel</Link>
            </Button>
            <Button type="submit" size="sm" className="w-full">
              Submit changes
            </Button>
          </div>
        </form>
      </ScrollArea>

      <footer className="pb-8">
        <p className="pt-5 text-center text-sm">
          Copyright © {new Date().getFullYear()} Daily.do. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
