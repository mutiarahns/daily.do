import { TaskItem } from "@/types/todo";
import { Separator } from "@/components/ui/separator";
import { ScrollBar } from "@/components/ui/scroll-area";
import { Cardlist } from "./card-list";
import { AddNew } from "./add-new";
import { Plus } from "lucide-react";
import { taskStates } from "@/data/initial-task-data";

type TaskManagementAppInterface = {
  tasks: TaskItem[];
  updateTask: (id: number, task: TaskItem) => void;
  deleteTask: (id: number) => void;
  addNewTask: (task: TaskItem) => void;
};

export function TaskManagementApp({
  tasks,
  updateTask,
  deleteTask,
  addNewTask,
}: TaskManagementAppInterface) {
  return (
    <div className="flex flex-col gap-4 rounded-md">
      <Separator />

      <div className="flex gap-6">
        {taskStates.map((state) => (
          <Cardlist
            key={`card-${state.key}`}
            tasks={tasks.filter((todo) => todo.state === state.key).reverse()}
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
    </div>
  );
}
