//Displys a single todo,
//Shows name of todo and completion status
//Has a button to toggle done or not done
import { useState } from "react";

export default function TodoItem() {
  const [checked, setChecked] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleChecked() {
    setChecked(checked);
    if (checked) {
    }
  }

  return (
    <>
      <input type="checkbox" name="isCompleted" onChange={handleChecked} />
    </>
  );
}
