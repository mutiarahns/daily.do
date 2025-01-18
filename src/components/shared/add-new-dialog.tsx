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
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (task: TaskItem) => void;
};

export function AddNewDialog({
  open,
  onOpenChange,
  onSubmit,
}: AddNewDialogProps) {
  const handleCloseDialog = () => {
    onOpenChange(false);
  };

  const onHandleSubmit = (values: TaskItem) => {
    console.log(values);
    onSubmit(values);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w[425px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>Add a new task to your list.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <AddNewForm
            onSubmitTask={onHandleSubmit}
            handleCloseDialog={handleCloseDialog}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
