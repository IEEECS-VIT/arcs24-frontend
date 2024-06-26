import React from "react";

function App() {
  return <main>
    <div className="relative w-1000 h-90">
      {/* Base image */}
      <img
        src="echoelipse.svg"
        alt="Base image"
        className="absolute w-[230px] [h-250px] object-cover top-[] left-[314px]"
      />
      
      {/* Overlapping image */}
      <img
        src="echo.svg"
        alt="Overlapping image"
        className="absolute top-[] left-[370px] w-[130px] h-[130px] object-cover rounded-full overflow-hidden"
      />
    </div>



    <div className="relative mt-[80px] ml-[600px] ">
      {/* Base image */}
      <img
        src="axureell.svg"
        alt="Base image"
        className="w-[250px] h-[250px] object-cover top-[300px] left-[330px]"
      />
      
      {/* Overlapping circular image */}
      <div className="absolute top-[80px] left-[80px] w-[130px] h-[130px] rounded-full overflow-hidden">
        <img
          src="axure.svg"
          alt="Overlapping circular image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    


    




    <div className="flex justify-center items-start h-screen ">
      <p className="text-center font-[1000] text-5xl tracking-[0.25em] font-sans text-[#F7F6F3]">
        OUR PREVIOUS <br></br>SPONSORS
      </p>
    </div>
  </main>;
}

export default App;