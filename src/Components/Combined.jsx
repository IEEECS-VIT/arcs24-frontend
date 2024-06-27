import React from "react";
import Part1 from "./Part1";
import Part2 from "./Part2";

export default function Combined() {
  return (
    <>
      <img className="img9 absolute" src="/Ellipse1.svg" alt="" />
      <img
        className="img8 absolute ml-[79.42708333333333vw] h-[96.20733249051833vh]"
        src="/Ellipse2.svg"
        alt=""
      />
      <div className="d4 relative flex w-screen">
        <Part1 />
        <Part2 />
      </div>
    </>
  );
}
