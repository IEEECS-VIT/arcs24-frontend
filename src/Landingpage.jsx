import React from "react";

function Landing(){
    return(
        
        <div className="bg-[#01061B] h-screen">
            <div className="w-1321 h-97 text-center "><h1 className="text-red font-rugen">Nav bar here</h1></div>
            <div className="absolute -inset-y-18 z-0 -inset-x-20 bottom-44 left-6">
                <img className=" object-cover w-5/12 " src="public/Ellipse 2.svg"></img>
            </div>
            <div className="text-center p-12 mt-14 ">

            <h1 className="text-white font-rugen text-9xl p-3 ">ARCS</h1>
            <p className="font-rugen text-white text-3xl px-0 py-2">OUR FLAGSHIP EVENTS </p>
            <p className="font-rugen text-white text-3xl  ">ARE <span className="bg-gradient-to-r from-[#DC55FF] from-25% via-[#D735B3] via-65% to-[#FF001F] to-100% text-transparent bg-clip-text">BACK</span></p>
            </div>
            <div className="absolute z-0 left-3/4  bottom-48 inset-x-30 inset-y-44">
            <img className="object-cover " src="public/Ellipse 1.svg" ></img>
            </div>
            
            <div className="flex justify-center  gap-x-5 ">
                <button className="shadow-[#D9D9D9] shadow-md font-rugen text-white text-2xl border-2 border-[#7839EE]  px-10 py-4 m-2 rounded-lg ">Hackbattle</button>
                <button className="shadow-[#D9D9D9] shadow-md font-rugen text-white text-2xl border-2 border-[#7839EE]  py-4 px-24 m-2 rounded-lg bg-[#422578]">Cicada</button>
            </div>
            <div className="absolute bottom-9 w-full border-dashed border-gray-400 border bg-gradient-to-r from-[#01061B] from-0%  to-[#073543] via-100% rotate-3 h-8 ">
            <span className="text-white inline-block  font-rugen whitespace-nowrap text-xl"> EXCITING PRIZE POOL | INTERESTING SPEAKER SESSION | EXCITING PRIZE POOL | INTERESTING SPEAKER SESSION | EXCITING PRIZE POOL | INTERESTING SPEAKER SESSION  </span>
            </div>

            <div className="absolute bottom-9 w-full bg-gradient-to-r from-[#CD29E9] from-0% via-[#682FED] via-45% to-[#9070f8] to-100% -rotate-3 h-8 opacity-90 backdrop-opacity-15 ">
            <span className="text-white inline-block  font-rugen whitespace-nowrap text-xl "> HACKBATTLE | CICADA | HACKBATTLE | CICADA | HACKBATTLE | CICADA | HACKBATTLE | CICADA | HACKBATTLE | CICADA | HACKBATTLE</span>
            </div>
           

        </div>

      

    )
}
export default Landing;