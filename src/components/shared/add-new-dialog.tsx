import { TaskItem } from "@/types/todo";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AddNewForm } from "./add-new-from";

type AddNewDialogProps = {
  open: boolean;
  handleOpenDialog: (isOpened: boolean) => void;
  addNewTask: (task: TaskItem) => void;
};

export function AddNewDialog({
  open,
  handleOpenDialog,
  addNewTask,
}: AddNewDialogProps) {
  const onHandleSubmit = (values: TaskItem) => {
    console.log(values);
    addNewTask(values);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenDialog}>
      <DialogContent className="sm:max-w[425px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>Add a new task to your list.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <AddNewForm
            onSubmitTask={onHandleSubmit}
            handleCloseDialog={() => handleOpenDialog(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
