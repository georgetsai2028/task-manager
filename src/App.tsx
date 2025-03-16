import { flexCenter, inputStyle } from "./App.css";
import { dark, light } from "./vars.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function App() {
  return (
    <div className={dark}>
      <div className={flexCenter}>
        <div className={inputStyle}>
          <TodoForm />
        </div>
        <TodoItem id={1} label="buy groceries" />
      </div>
    </div>
  );
}

export default App;
