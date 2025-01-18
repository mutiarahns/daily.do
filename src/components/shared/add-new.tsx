import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AddNewDialog } from "./add-new-dialog";
import { TaskItem } from "@/types/todo";

export function AddNew({ onSubmit }: { onSubmit: (task: TaskItem) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="default" onClick={() => setOpen(true)}>
        <Plus />
        <p className="text-[12px]">Add Task</p>
      </Button>
      <AddNewDialog open={open} onOpenChange={setOpen} onSubmit={onSubmit} />
    </>
  );
}
