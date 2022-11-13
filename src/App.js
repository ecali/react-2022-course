import "./App.css";

function App() {

  const age = 15;
  const isGreen = true;

  return (
    <div className="App">
      {age >= 18 ? <h1> Over Age </h1>: <h1>Under Age</h1>}
      <h1 style={{color: isGreen ? 'green' : 'red'}}> Text has a color </h1>
      {isGreen && <button> THIS IS A BUTTON </button>}
    </div>
  );
}

export default App;
