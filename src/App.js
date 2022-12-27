import axios from "axios";
import { useState } from "react";
import "./App.css";
import Box from "./Box";

function App() {
  const [state, setState] = useState("");

  const handleState = (excuse) => {
    axios
      .get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
      .then((res) => {
        setState(res.data[0].excuse);
      });
  };

  return (
    <div className="App ">
      <h1 className="heading">Generate an Excuse</h1>
      <button className="btn" onClick={() => handleState("party")}>
        Party
      </button>
      <button className="btn" onClick={() => handleState("family")}>
        Family
      </button>
      <button className="btn" onClick={() => handleState("office")}>
        Office
      </button>
      <Box state={state} />
    </div>
  );
}

export default App;
