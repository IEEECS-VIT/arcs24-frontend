import React from "react";

function Happie(){
    return(
        <div className="relative bg-[#01061B] h-screen overflow-hidden flex md:p-0 min-[500px]:p-6 p-5">
            <div className="absolute inset-y-0 left-0">
                <img src="Ellipse 5.svg" />
            </div>
            <div className="absolute inset-y-0 right-0">
                <img src ="Ellipse 6.svg" />
            </div>
            <div className="md:relative lg:left-[8vw] md:left-[6vw] md:top-[7vh] bg-[#474C78]/70 h-fit 2xl:w-1/4 xl:w-96 lg:w-80 md:w-72 rounded-3xl xl:p-7 md:-rotate-6 p-4 absolute w-11/12 top-[26vh] small:top-[25vh]">
                <p className="text-[#CDCFD7] font-source-serif 2xl:text-xl lg:text-lg font-semibold text-center small:text-sm">"The treasure hunt was a great way to team up and test our problem-solving skills. Cicada was epic!"</p>
                <p className="xl:mt-3 md:mt-1 text-[#CDCFD7] font-source-serif xl:text-base md:text-sm font-semibold small:text-xs"><img src="dp.svg" className="inline-block mr-3 w-10 h-10 small:w-7 small:h-7"/>Ashika From Team Zero</p>
            </div>
            <div className="relative 2xl:left-[17vw] xl:left-[15vw] lg:left-[13vw] md:left-[10vw] lg:top-[7vh] md:top-[10vh] md:block hidden">
                <img src="Meme 1.svg" className="lg:w-32 md:w-24"/>
            </div>
            <div className="md:relative 2xl:left-[27vw] lg:left-[22vw] md:left-[12vw] md:top-[7vh] bg-[#474C78]/70 h-fit 2xl:w-1/4 xl:w-96 lg:w-80 md:w-72 rounded-3xl xl:p-7 md:rotate-6 p-4 absolute w-11/12 small:top-[45vh] top-[44vh]">
                <p className="text-[#CDCFD7] font-source-serif 2xl:text-xl lg:text-lg font-semibold text-center small:text-sm">"Cicada combined excitement and strategy perfectly. I felt like a real-life detective!"</p>
                <p className="xl:mt-3 md:mt-1 text-[#CDCFD7] font-source-serif xl:text-base md:text-sm font-semibold small:text-xs"><img src="dp.svg" className="inline-block mr-3 w-10 h-10 small:w-7 small:h-7"/>Devika From Team X3M</p>
            </div>
            <div className="absolute lg:left-[8vw] md:left-[6vw] md:top-[70vh] bg-[#474C78]/70 h-fit 2xl:w-1/4 xl:w-96 lg:w-80 md:w-72 rounded-3xl p-4 md:rotate-6 w-11/12 top-[60vh] small:top-[61.5vh]">
                <p className="text-[#CDCFD7] font-source-serif 2xl:text-xl lg:text-lg font-semibold text-center small:text-sm">"The energy at HackBattle was incredible! Non-stop coding, innovation, and fun. Highly recommend!"</p>
                <p className="xl:mt-3 md:mt-1 text-[#CDCFD7] font-source-serif xl:text-base md:text-sm font-semibold small:text-xs"><img src="dp.svg" className="inline-block mr-3 w-10 h-10 small:w-7 small:h-7"/>Gourav From Team UwU</p>
            </div>
            <div className="absolute bottom-[10vh] 2xl:left-1/3 md:inline-block ml-56 xl:left-[30vw] lg:left-[25vw] md:left-[18vw] hidden">
                <img src="Meme 2.svg" className="lg:w-32 md:w-24"/>
            </div>
            <div className="absolute lg:left-[63vw] md:left-[60vw] md:top-[68vh] bg-[#474C78]/70 md:h-52 2xl:w-1/4 xl:w-96 lg:w-80 md:w-72 rounded-3xl xl:p-7 md:-rotate-6 p-4 w-11/12 h-fit small:top-[81vh] top-[79vh]">
                <p className="text-[#CDCFD7] font-source-serif 2xl:text-xl lg:text-lg font-semibold text-center small:text-sm">"HackBattle was an exhilarating experience! I learned so much and met some amazing people. Can't wait for the next one!"</p>
                <p className="xl:mt-3 md:mt-1 text-[#CDCFD7] font-source-serif xl:text-base md:text-sm font-semibold small:text-xs"><img src="dp.svg" className="inline-block mr-3 w-10 h-10 small:w-7 small:h-7"/>Aesh From Team Basanti</p>
            </div>

            <div className="items-center justify-center my-0 mx-auto flex">
                <div className="absolute left-[25vw] top-[15vh] md:block hidden">
                    <img src="Ellipse 7.svg" />
                </div>
                <div className="absolute w-72 md:h-10 rounded-3xl bg-[#F7F6F3] lg:left-[40vw] md:left-[35vw] md:top-[33vh] top-[2vh] h-8">
                    <p className="relative font-source-serif text-xl text-center text-[#01061B] md:top-0 -top-1">several people are typing<span className="text-3xl text-[#31F7C8]">...</span></p>
                </div>
                <div className="absolute md:top-[35vh] 2xl:left-[12vw] xl:left-[5vw] lg:left-[6vw] md:left-[5vw] md:p-7 top-[7vh] left-[2vw]">
                    <h1 className="text-[#F7F6F3] xl:text-6xl md:text-3xl font-rugen text-center text-2xl tall:text-3xl">OUR EVENTS LEAVE <br /> PARTICIPANTS IMPRESSED</h1>
                    <p className="font-source-serif font-semibold text-[#C1C2C4] 2xl:text-3xl lg:text-2xl md:text-xl text-center md:mt-4 small:hidden">Check it out for yourself. No keyboards were smashed in the making of this feature</p>
                </div>
            </div>
        </div>
    );
}

export default Happie;
