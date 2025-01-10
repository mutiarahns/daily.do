import { TaskList } from "./components/task-list";

const taskItem = [
  { id: 1, text: "Task 1", isCompleted: false },
  { id: 2, text: "Task 2", isCompleted: true },
  { id: 3, text: "Task 3", isCompleted: true },
];

export function App() {
  return (
    <div>
      <h1>Daily.do</h1>

      <p>A simple to-do app to track your daily task</p>

      <TaskList taskItem={taskItem} />
    </div>
  );
}
