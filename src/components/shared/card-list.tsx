import { TaskItem } from "@/types/todo";
import { CardItem } from "./card-item";
import { ScrollArea } from "@/components/ui/scroll-area";

type CardListInterface = {
  children: React.ReactNode;
  tasks: TaskItem[];
  state: string;
  updateTask: (id: number, task: TaskItem) => void;
  deleteTask: (id: number) => void;
};

export function Cardlist({
  children,
  tasks,
  state,
  updateTask,
  deleteTask,
}: CardListInterface) {
  console.log(tasks);
  return (
    <ScrollArea className="h-[680px] w-[390px] rounded-md bg-gray-100 p-4">
      <div className="mb-2 flex items-center justify-between">
        <h1 className="text-lg font-semibold">{state}</h1>
        {children}
      </div>
      <CardItem tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </ScrollArea>
  );
}
