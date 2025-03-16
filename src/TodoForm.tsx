//Handles adding new todo with an input form
function TodoForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  function TodoInput() {}
  return (
    <>
      <form className="input">
        <input
          type="input"
          className="inputForm"
          placeholder="Enter Task Here"
        />

        <button className="inputSubmit" type="submit"
      </form>
    </>
  );
}
export default TodoForm;
