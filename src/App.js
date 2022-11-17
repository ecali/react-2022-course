import "./App.css";
import Axios from "axios";
import { useState } from "react";
function App() {
  const [excuse, setExcuse] = useState("");

  const fetchExcuse = (category) => {
    Axios.get("https://excuser.herokuapp.com/v1/excuse/" + category).then(
      (res) => {
        setExcuse(res.data[0].excuse);
      }
    );
  };

  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button
        onClick={() => {
          fetchExcuse("party");
        }}
      >
        Party
      </button>
      <button
        onClick={() => {
          fetchExcuse("family");
        }}
      >
        Family
      </button>
      <button
        onClick={() => {
          fetchExcuse("office");
        }}
      >
        Office
      </button>
      <p>{excuse}</p>
    </div>
  );
}

export default App;
