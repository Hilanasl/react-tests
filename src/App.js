import "./App.css";
import ResultDisplayer from "./Components/ResultDisplayer";
import Page from "./Components/Page";

function App() {
  return (
    <div className="App">
      <ResultDisplayer getNewResult={() => "test"}></ResultDisplayer>
      <Page user={{ firstName: "John", lastName: "Doe" }} />
    </div>
  );
}

export default App;
