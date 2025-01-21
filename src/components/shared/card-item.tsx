import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ChevronDown, ChevronsUp, ChevronUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectItem } from "@/components/ui/select";
import { TaskItem } from "@/types/todo";
import { DeleteTask } from "./delete-task";

type CardItemInterface = {
  tasks: TaskItem[];
  updateTask: (id: number, task: TaskItem) => void;
  deleteTask: (id: number) => void;
};

export function CardItem({ tasks, updateTask, deleteTask }: CardItemInterface) {
  const priorityMapping = (priority: number) => {
    switch (priority) {
      case 1:
        return (
          <div className="flex items-center space-x-2 text-sky-600">
            <ChevronDown className="h-4 w-4" />
            <Label className="text-[12px] font-semibold">Low Priority</Label>
          </div>
        );
      case 2:
        return (
          <div className="flex items-center space-x-2 text-orange-600">
            <ChevronUp className="h-4 w-4" />
            <Label className="text-[12px] font-semibold">Medium Priority</Label>
          </div>
        );
      case 3:
        return (
          <div className="flex items-center space-x-2 text-red-600">
            <ChevronsUp className="h-4 w-4" />
            <Label className="text-[12px] font-semibold">High Priority</Label>
          </div>
        );
      default:
        return "";
    }
  };

  const handleUpdateTask = (
    id: number,
    value: "todo" | "in progress" | "done",
  ) => {
    const task = tasks.find((task) => task.id === id);

    if (!task) return;

    task.state = value;
    updateTask(id, task);
  };

  return (
    <div className="grid-row-4 grid gap-2">
      {tasks.map((task) => {
        return (
          <Card key={task.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>{priorityMapping(task.priority)}</div>
                <DeleteTask task={task} deleteTask={deleteTask} />
              </div>
              <CardTitle className="text-sm">{task.taskName}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-500">{task.taskDescription}</p>
              <Separator className="px-4" />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <p className="text-[12px] text-gray-500">
                  {task.createdDate.toDateString()}
                </p>
              </div>

              <Select
                onValueChange={(value) =>
                  handleUpdateTask(
                    task.id,
                    value as "todo" | "in progress" | "done",
                  )
                }
              >
                <SelectTrigger className="w-[120px] text-gray-500">
                  <SelectValue placeholder="Move to..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todo">To Do</SelectItem>
                  <SelectItem value="in progress">In Progress</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                </SelectContent>
              </Select>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
