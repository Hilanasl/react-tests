import "./App.css";
import ResultDisplayer from "./Components/ResultDisplayer";
import Page from "./Components/Page";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      <ResultDisplayer getNewResult={() => "test"}></ResultDisplayer>
      <Page user={{ firstName: "John", lastName: "Doe" }} />
      <Counter />
    </div>
  );
}

export default App;
