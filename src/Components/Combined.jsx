import React from "react";
import Part1 from "./Part1";
import Part2 from "./Part2";
import "../index.css"

export default function Combined() {
  return (
    <>
      <div className="d110 text-white">
        <Part1 />
        <Part2 />
      </div>
    </>
  );
}
