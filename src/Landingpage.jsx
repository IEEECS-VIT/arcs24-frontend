import React from "react";

function Landing() {
    return (
        <div className="relative bg-[#01061B] h-screen overflow-hidden">
            <div className="w-full text-center pt-6">
                <h1 className="text-red font-rugen">Nav bar here</h1>
            </div>
            <div className="absolute inset-0 z-0">
                <img className="w-6/12 absolute  left-5 bottom-40 z-10" src="public/Ellipse 2.svg" />
                <img className="w-3/12 absolute right-1 top-44 z-10" src="public/Ellipse 1.svg" />
            </div>
            
            <div className="relative text-center p-12 mt-14 z-20">
                <h1 className="text-white font-rugen text-9xl p-3">ARCS</h1>
                <p className="font-rugen text-white text-3xl px-0 py-2">OUR FLAGSHIP EVENTS</p>
                <p className="font-rugen text-white text-3xl">ARE <span className="bg-gradient-to-r from-[#DC55FF] from-25% via-[#D735B3] via-65% to-[#FF001F] to-100% text-transparent bg-clip-text">BACK</span></p>
            </div>
            <div className="relative flex justify-center gap-x-5 z-20 ">
                <button className="shadow-[#D9D9D9] shadow-md font-rugen text-white text-2xl border-2 border-[#7839EE] px-10 py-4 m-2 rounded-lg">Hackbattle</button>
                <button className="shadow-[#D9D9D9] shadow-md font-rugen text-white text-2xl border-2 border-[#7839EE] py-4 px-24 m-2 rounded-lg bg-[#422578]">Cicada</button>
            </div>
            <div className="absolute bottom-9 w-full border-dashed border-gray-400 border bg-gradient-to-r from-[#01061B] to-[#073543] via-100% rotate-3 h-8 z-20">
                <span className="text-white inline-block font-rugen whitespace-nowrap text-xl">EXCITING PRIZE POOL | INTERESTING SPEAKER SESSION | EXCITING PRIZE POOL | INTERESTING SPEAKER SESSION | EXCITING PRIZE POOL | INTERESTING SPEAKER SESSION</span>
            </div>
            <div className="absolute bottom-9 w-full bg-gradient-to-r from-[#CD29E9] via-[#682FED] to-[#9070f8] -rotate-3 h-8 opacity-90 backdrop-opacity-15 z-20">
                <span className="text-white inline-block font-rugen whitespace-nowrap text-xl">HACKBATTLE | CICADA | HACKBATTLE | CICADA | HACKBATTLE | CICADA | HACKBATTLE | CICADA | HACKBATTLE | CICADA | HACKBATTLE</span>
            </div>
        </div>
    );
}

export default Landing;
