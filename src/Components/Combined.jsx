import React from "react";
import Part1 from "./Part1";
import Part2 from "./Part2";
import "../index.css"

export default function Combined() {
  return (
    <>
    <img className="d56 absolute" src="Ellipse1.svg"/>
    <img className="d57 absolute right-0" src="Ellipse2.svg"/>
      <div className="d110 text-white relative">
        <Part1 />
        <Part2 />
      </div>
    </>
  );
}
