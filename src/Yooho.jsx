import React from "react";
import "./index.css"; 

function Yooho() {
    return (
        <div className="flex items-center justify-center min-h-screen relative">
            <div className="animated-gradient w-full h-screen absolute top-0 left-0"></div>
            <div className="relative">
                <img className="w-[90vw] h-[78vh]" src="/yoho.png" alt="Yoho" />
                <div className="text-overlay absolute text-white font-rugen top-0 left-0 flex flex-wrap flex-col box-border">
                    <span className="sm:text-[8vh] md:text-[8vh] lg:text-[8.67vh] self-start relative mr-0">TWO</span>
                    <span className="sm:text-[8vh] md:text-[8vh] lg:text-[8.67vh] self-start relative mr-0">CREATIVE</span>
                    <span className="sm:text-[8vh] md:text-[8vh] lg:text-[8.67vh] self-start relative mr-0">EVENTS FOR THE</span>
                    <span className="sm:text-[8vh] md:text-[8vh] lg:text-[8.67vh] self-start relative mr-0">NEXT</span>
                    <span className="sm:text-[8vh] md:text-[8vh] lg:text-[8.67vh] self-start relative mr-0">WAVE OF</span>
                    <span className="sm:text-[8vh] md:text-[8vh] lg:text-[8.67vh] self-start relative mr-0">LOCAL TALENT</span>
                </div>
            </div>
        </div>
    );
}

export default Yooho;
