//Handles adding new todo with an input form
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (e: React.FormEvent) => void;
}

const TodoInput: React.FC<Props> = ({ todo, setTodo, handleAddTask }) => {
  return (
    <>
      <form className="input" onSubmit={handleAddTask}>
        <input
          type="input"
          value={todo}
          className="inputForm"
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter Task Here"
        />

        <button className="inputSubmit" type="submit">
          {" "}
          Submit
        </button>
      </form>
    </>
  );
};
export default TodoInput;
