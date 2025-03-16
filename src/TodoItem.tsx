//Displys a single todo,
//Shows name of todo and completion status
//Has a button to toggle done or not done
import { useState } from "react";

export default function TodoItem() {
  let task: string;
  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(checked);
    if (checked) {
    }
  }

  return (
    <>
      <input type="checkbox" name="isCompleted" onClick={handleChecked} />
    </>
  );
}
