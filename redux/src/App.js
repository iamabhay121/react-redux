import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // function Increment() {
  //   setCount(count + 1);
  // }

  // function Decrement() {
  //   setCount(count - 1);
  // }

  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={Increment}> + </button>
      <br />
      <button onClick={Decrement}>- </button>
    </div>
  );
}

export default App;
