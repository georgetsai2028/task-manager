import { useState } from "react";

function App() {
  let name: string;
  let age: number;
  let isStudent: boolean;
  let hobbies: string[];
  let role: [number, string];
  const [count, setCount] = useState(0);

  type Person = {
    name: string;
    age?: number;
  };

  let bob: Person = {
    name: "Bob",
    age: 29,
  };

  return (
    <div>
      <p> Hello {bob.name}! </p>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default App;
