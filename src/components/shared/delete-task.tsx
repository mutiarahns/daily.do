import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertConfirmation } from "./alert-confirmation";

import { Trash2 } from "lucide-react";
import { TaskItem } from "@/types/todo";

type DeleteTaskInterface = {
  task: TaskItem;
  deleteTask: (id: number) => void;
};

export function DeleteTask({ task, deleteTask }: DeleteTaskInterface) {
  const [open, setOpen] = useState(false);

  const handleOpenConfirmationAlert = (isOpened: boolean) => {
    setOpen(isOpened);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon-xs"
        tint="red"
        onClick={() => setOpen(true)}
      >
        <Trash2 />
      </Button>

      <AlertConfirmation
        open={open}
        title="Are you sure you want to delete this task?"
        description="This action cannot be undone. Please confirm that you want to delete this task."
        handleOpenDialog={handleOpenConfirmationAlert}
        handleDeleteTask={() => deleteTask(task.id)}
      />
    </>
  );
}
