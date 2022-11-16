import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, seInputValue] = useState("");

  const handleInputChange = (event) => {
    seInputValue(event.target.value);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleInputChange}  />
      {inputValue}
    </div>
  );
}

export default App;
