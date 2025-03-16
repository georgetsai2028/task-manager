//Displys a single todo,
//Shows name of todo and completion status
//Has a button to toggle done or not done
import { useState } from "react";

interface TodoListProps {
  id: number;
  label: string;
}
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoItem(props: TodoListProps) {
  const [checked, setChecked] = useState(false);
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleChecked() {
    setChecked((prev) => !prev);
  }

  return (
    <>
      <input
        id={props.id}
        type="checkbox"
        name="isCompleted"
        checked={checked}
        onChange={handleChecked}
      />
      <label className="todoLabel" htmlFor={props.id}>
        {props.label}
      </label>
    </>
  );
}
