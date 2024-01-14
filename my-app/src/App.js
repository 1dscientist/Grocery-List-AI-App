import "./App.css";
import PromptBox from "./components/PromptBox.jsx";
import List from "./components/List.jsx";
import Delete from "./components/Delete.jsx";
import Copy from "./components/Copy.jsx";

function App() {
  

  return (
    <div className="App">
      <Copy/>
      <Delete />
      <List />
      <PromptBox />
    </div>
  );
}

export default App;
