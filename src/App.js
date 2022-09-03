import useConnect from "./hooks/useConnect";
import "./App.css";
import Main from "./components/Main/Main";
import { useState } from "react";
function App() {
  const { data } = useConnect();

  return (
    <>
      <Main data={data?.tickets.sort((a, b) => a - b).splice(0, 3)} />
    </>
  );
}

export default App;
