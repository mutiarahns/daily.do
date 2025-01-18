import { TaskItem } from "@/types/todo";
import { CardItem } from "./card-item";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function Cardlist({
  tasks,
  state,
  onUpdate,
}: {
  tasks: TaskItem[];
  state: string;
  onUpdate: (id: number, task: TaskItem) => void;
}) {
  console.log(tasks);
  return (
    <ScrollArea className="h-[680px] w-[390px] rounded-md bg-gray-100 p-4">
      <div className="mb-2 flex items-center justify-between">
        <h1 className="text-lg font-semibold">{state}</h1>
        <Button variant="ghost">
          <Plus />
        </Button>
      </div>
      <CardItem tasks={tasks} onUpdate={onUpdate} />

      <Button variant="ghost" className="text-gray-500">
        <Plus />
        <p className="text-[12px]">Add Task</p>
      </Button>
    </ScrollArea>
  );
}
