export type TaskItem = {
  id: number;
  taskName: string;
  taskDescription: string;
  isCompleted: boolean;
  createdDate: Date;
  priority: number;
  state: "todo" | "in progress" | "done";
};
