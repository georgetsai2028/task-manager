//Rercieve list of todos as props
//Maps over todos & renders each item, use an array method like map
import { useState } from "react";
import TodoInput from "./TodoForm";
import { Todo } from "./model";

function TodoList() {
  const [todo, setTodo] = useState<string>("");
  const [todoArray, setTodoArray] = useState<Todo[]>([]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodoArray([
        ...todoArray,
        { id: Date.now(), todo: todo, isDone: false },
      ]);
      setTodo("");
    }
  };
  console.log(todoArray);

  return (
    <div>
      <h1> Todo List</h1>
      <TodoInput todo={todo} setTodo={setTodo} handleAddTask={handleAddTask} />
    </div>
  );
}

export default TodoList;
