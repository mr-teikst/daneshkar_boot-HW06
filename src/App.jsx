import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToggleText from "./components/ToggleText";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToggleText />
    </>
  );
}

export default App;
