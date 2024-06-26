import React from "react";

function App() {
  return <main>
    <div className="relative w-full h-96">
      {/* Base image */}
      <img
        src="echoelipse.svg"
        alt="Base image"
        className="absolute w-[250px] [h-250px] object-cover"
      />
      
      {/* Overlapping image */}
      <img
        src="echo.svg"
        alt="Overlapping image"
        className="absolute top-[60px] left-[60px] w-[130px] h-[130px] object-cover rounded-full overflow-hidden"
      />
    </div>
    <div className="flex justify-center items-start h-screen">
      <p className="text-center font-[1000] text-5xl tracking-[0.25em] font-sans text-[#F7F6F3]">
        OUR PREVIOUS <br></br>SPONSORS
      </p>
    </div>
  </main>;
}

export default App;
