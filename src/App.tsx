import "./App.css";
import { Country, Person } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Pedro"
        email="pedro@gmail.com"
        age={21}
        isMarried={true}
        friends={["jessica", "jake", "jerry", "jasmine"]}
        country = {Country.Brazil}
      />
    </div>
  );
}

export default App;
