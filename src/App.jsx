import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  return (
    <>
      <h1>app component</h1>
      <Square />
    </>
  );
}

export function Square() {
  return <button className="square">X</button>;
}