import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fecthData = () => {
    Axios.get("https://api.agify.io/?name=" + name).then((res) => {
      setPredictedAge(res.data);
    });
  };

  return (
    <div className="App">
      <input
        placeholder="Ex. Pedro..."
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fecthData} disabled={!name}>
        Predict Age
      </button>
      {predictedAge ? (
        <div>
          <h1>Name: {predictedAge.name} </h1>
          <h1>Predicted Age: {predictedAge.age} </h1>
          <h1>Count: {predictedAge.count} </h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
