import "./App.css";
import Character from "./components/Character";
import { characters } from "./data";

function App() {
  return (
    <div className="App">
      <h1 className="main-title">The Simpsons</h1>
      <div className="container">
        <Character name={characters[0].name} image={characters[0].image} />
      </div>
    </div>
  );
}

export default App;
