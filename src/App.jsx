import React from "react";
import Part1 from "./components/Part1";
import Part2 from "./components/Part2";
function App() {
    return (
        <>
        <img className="img9 absolute" src="/Ellipse1.svg" alt=""/>
        <img className="img8 absolute ml-[79.42708333333333vw] h-[96.20733249051833vh]" src="/Ellipse2.svg" alt=""/>
        <div className="d4 flex w-screen relative">
            <Part1/>
            <Part2/>
        </div>
        </>
    )
}

export default App;
