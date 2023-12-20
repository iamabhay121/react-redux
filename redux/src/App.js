import { useState } from "react";
import "./App.css";
import { useGetPokemonByNameQuery } from "./services/pokemon";

function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  // const [count, setCount] = useState(0);

  // function Increment() {
  //   setCount(count + 1);
  // }

  // function Decrement() {
  //   setCount(count - 1);
  // }

  // const Increment = () => {
  //   setCount(count + 1);
  // };
  // const Decrement = () => {
  //   setCount(count - 1);
  // };

  return (
    // <div className="App">
    //   <h1>{count}</h1>
    //   <button onClick={Increment}> + </button>
    //   <br />
    //   <button onClick={Decrement}>- </button>
    // </div>

    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
}

export default App;
