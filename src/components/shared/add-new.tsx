import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AddNewDialog } from "./add-new-dialog";
import { TaskItem } from "@/types/todo";

type AddNewProps = {
  children: React.ReactNode;
  addNewTask: (task: TaskItem) => void;
  buttonVariant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
};

export function AddNew({ children, addNewTask, buttonVariant }: AddNewProps) {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = (isOpened: boolean) => {
    setOpen(isOpened);
  };

  return (
    <>
      <Button variant={buttonVariant} onClick={() => setOpen(true)}>
        {children}
      </Button>
      <AddNewDialog
        open={open}
        handleOpenDialog={handleOpenDialog}
        addNewTask={addNewTask}
      />
    </>
  );
}
