import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Home from "./Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <Home />
    </React.Fragment>
  );
}

export default App;
