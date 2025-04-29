import { useState } from "react";
import Navbar from "./components/Navbar";
import CanvasDisplay from "./components/CanvasDisplay";
import TextControl from "./components/TextControl";
import "./styles/App.css";

function App() {
  return (
    <>
      <h1>PostForge</h1>

      {/* <TextControl /> */}
      <CanvasDisplay />
    </>
  );
}

export default App;
