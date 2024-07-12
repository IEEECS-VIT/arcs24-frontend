import React from "react";
import "../index.css";

export default function Part1() {
  return (
    <>
      <div className="div1">
        <img
          className="img1 h-[51.45891276864728vh] w-[46vw] mt-[15vh]"
          src="Group115.svg"
        />
        <div className="content1 ml-[12.6953125vw] mt-[3.7926675094816686vh]">
          <p className="p1 mt-[0.6321112515802781vh] font-source-serif text-3xl font-bold tracking-[0.2604166666666667vw]">
            <span className="t1 text-blurple">Date: </span>12th June
          </p>
          <p className="p1 mt-[0.6321112515802781vh] font-source-serif text-3xl font-bold tracking-[0.2604166666666667vw]">
            <span className="t1 text-blurple">Venue: </span>Foodys
          </p>
          <p className="p1 mt-[0.6321112515802781vh] font-source-serif text-3xl font-bold tracking-[0.2604166666666667vw]">
            <span className="t1 text-blurple">Price: </span>Rs 200 Only
          </p>
        </div>
      </div>
    </>
  );
}
