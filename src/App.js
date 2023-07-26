import { useRef } from "react";
import "./global.css";
import Greeting from "./components/Greeting";
import School from "./components/School";
import Hobby from "./components/Hobby";
import Strength from "./components/Strength";
import Contact from "./components/Contact";
import Process from "./components/Process";
import Background from "./components/Background";
function App() {
  const ref = useRef(null);

  return (
    <main className="App" ref={ref}>
      <Background />
      <Process mainRef={ref} />
      <Greeting />
      <School />
      <Hobby />
      <Strength />
      <Contact />
    </main>
  );
}

export default App;
