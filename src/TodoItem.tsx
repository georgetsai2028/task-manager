//Displys a single todo,
//Shows name of todo and completion status
//Has a button to toggle done or not done
import { useState } from "react";

interface TodoListProps {
  id: string;
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

  function addTask() {
    if (newTask.trim() === "") return;
    setTasks([
      ...tasks,
      { id: tasks.length + 1, text: newTask, completed: false },
    ]);
    setNewTask("");
  }

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
