type TaskItemProps = {
  text: string;
  isCompleted: boolean;
};

export function TaskListItem({ text, isCompleted }: TaskItemProps) {
  if (isCompleted) {
    return <li>👌🏻 {text}</li>;
  }

  return <li>❌ {text}</li>;
}
