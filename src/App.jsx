import React from "react";
import Advice from "./components/Advice";

function App() {
  return (
    <div className="bg-[#1f2632] h-screen flex flex-col items-center justify-center">
      <Advice />
      <div className="absolute bottom-4">
        <p className="text-white text-sm">Developed by mairo</p>
      </div>
    </div>
  );
}

export default App;
