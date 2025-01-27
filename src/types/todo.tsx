export type TaskItemState = "todo" | "in-progress" | "done";

export type TaskItem = {
  id: number;
  taskName: string;
  taskDescription: string;
  isCompleted: boolean;
  createdDate: Date;
  priority: number;
  state: TaskItemState;
};
