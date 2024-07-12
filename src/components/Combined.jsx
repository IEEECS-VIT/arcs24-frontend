import React from "react";
import Part1 from "./Part1";
import Part2 from "./Part2";
import "../index.css"

export default function Combined() {
  return (
    <>
      
      <div className="d4 relative flex w-screen animated-gradient">
      <div className="absolute inset-y-0 left-0">
                <img src="Ellipse 5.svg" />
            </div>
            <div className="absolute inset-y-0 right-0">
                <img src ="Ellipse 6.svg" />
            </div>
        <Part1 />
        <Part2 />
      </div>
    </>
  );
}
