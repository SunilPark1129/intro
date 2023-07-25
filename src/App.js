import "./global.css";
import Greeting from "./components/Greeting";
import School from "./components/School";
import Hobby from "./components/Hobby";
import Strength from "./components/Strength";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="App">
      <Greeting />
      <School />
      <Hobby />
      <Strength />
      <Contact />
    </main>
  );
}

export default App;
