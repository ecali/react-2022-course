import "./App.css";

function App() {
  return (
    <div className="App">
      <Job salary={9000} position="Senior SDE" company="Amazon" />
      <Job salary={12000} position="Senior SDE" company="Google" />
      <Job salary={10000} position="Project Manager" company="Netflix" />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h1>{props.position}</h1>
      <h2>{props.company}</h2>
      <h2>{props.salary}</h2>
    </div>
  );
};

export default App;
