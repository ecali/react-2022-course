import { useState } from "react";
import "./App.css";

function App() {

  var [age, setAge] = useState(0);

  const increaseAge = () => {
    setAge(age + 1);
  }

  return (<div className="App">
    {age}
    <button onClick={increaseAge}>Increase Age</button>
  </div>);
}

export default App;
