//Rercieve list of todos as props
//Maps over todos & renders each item, use an array method like map
import { useState } from "react";
import TodoForm from "./TodoForm";
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {}

  function addTask() {}

  function deleteTask(index) {}
  return (
    <div>
      <h1> Todo List</h1>
    </div>
  );
}

export default TodoList;
