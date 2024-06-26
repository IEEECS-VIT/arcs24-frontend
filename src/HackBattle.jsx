import React from "react";

function HackBattle(){
    return(
        <div className="relative bg-[#01061B] h-screen overflow-hidden bottom-[2vh]">
            <h1 className="relative text-white text-center mt-16 font-rugen text-5xl">HACKBATTLE</h1>
            <img className="w-4/12 absolute  left-10 bottom-64 z-10" src="public/Ellipse 3.svg" />
            <img className="w-3/12 absolute right-52 top-52 z-10" src="public/Ellipse 4.svg" />
            <div className="relative flex text-center pr-12 pl-12 justify-center bottom-20 flex-wrap">
                <img className="w-2/3 h-2/5 mt-28 z-20 mb-24"src="public/Hack.svg" />
            </div>
            <p className="relative text-[#B5B1B1] font-source-serif left-[19vw] mt-4 bottom-48">CODE<span className="ml-[42vw]">COMPETE</span><span className="ml-[8vw]">SUCCEED</span></p>
            <div className="pl-80 pr-80 relative text-center bottom-44">
                <p className="relative text-[#848484] font-source-serif">AGENDA</p>
                <p className="relative mt-4 text-[#B5B1B1] font-source-serif text-2xl">Dive into <span className="text-[#F7F6F3]">HackBattle</span>,
                <br /> 
                an exhilarating event for all enthusiasts of technology and creativity. Whether you're a <span className="text-[#F7F6F3]">seasoned</span> coder, a designer, a strategist, or simply passionate about innovation, HackBattle <span className="text-[#F7F6F3]">welcomes</span> you. Collaborate with <span className="text-[#F7F6F3]">diverse</span> talents, tackle exciting challenges, and unleash your potential. With hands-on workshops, <span className="text-[#F7F6F3]">mentorship</span> from industry experts, and incredible <span className="text-[#F7F6F3]">prizes</span> up for grabs, this is your chance to learn, grow, and make a mark. Ready to be part of something <span className="text-[#F7F6F3]">extraordinary? Register</span> now and let's create the future together!
                </p>
            </div>
        </div>
    );
}

export default HackBattle;
