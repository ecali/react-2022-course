import "./App.css";
import { useCounter } from "./useCounter";

function App() {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <div className="App">
      <h2>{counter}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
