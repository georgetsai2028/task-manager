import { flexCenter } from "./App.css";
import { dark, light } from "./vars.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function App() {
  return (
    <div className={dark}>
      <div className={flexCenter}>
        <TodoItem id={1} label="buy groceries" />
      </div>
    </div>
  );
}

export default App;
