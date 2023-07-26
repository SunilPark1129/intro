import "./global.css";
import Greeting from "./components/Greeting";
import School from "./components/School";
import Hobby from "./components/Hobby";
import Strength from "./components/Strength";
import Contact from "./components/Contact";
import Background from "./components/Background";
import Progress from "./components/Progress";
function App() {
  return (
    <main className="App">
      {/* background svg images */}
      <Background />

      {/* scroll progress bar */}
      <Progress />

      {/* main sections */}
      <Greeting />
      <School />
      <Hobby />
      <Strength />
      <Contact />
    </main>
  );
}

export default App;
