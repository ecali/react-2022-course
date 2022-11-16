import { useState } from "react";
import "./App.css";

function App() {
  const [textColor, setTextColor] = useState('black');

  return (
    <div className="App">
      <button onClick={() => setTextColor( textColor === 'red' ? 'black' : 'red')}>Show/Hide</button>
      <h1 style={{color: textColor}}>HI MY NAME IS PEDRO</h1>
    </div>
  );
}

export default App;
