import useConnect from "./hooks/useConnect";
import "./App.css";
import Main from "./components/Main/Main";
import { useState } from "react";
function App() {
  const { data } = useConnect();

  return (
    <>
      <Main data={data?.tickets.splice(0, 3)} />
    </>
  );
}

export default App;
