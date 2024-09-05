import React from "react";
import LandingPage from "./Components/LandingPage";
import Yooho from "./Components/Yooho";
import Combined from "./Components/Combined";
import Combined2 from "./Components/Combined2";
import Sponsors from "./Components/responsivedesign";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HackBattle from "./Components/HackBattle";
import Why from "./Components/WhyShouldI";
import Happie from "./Components/Happie";
import Faq from "./Components/faq";
import WhatIsArcs from "./Components/whatisarcs";

function App() {
  return (
    <main>
      <Navbar />
      <LandingPage />
      <WhatIsArcs/>
      <Yooho />
      <Combined/>
      <Combined2/>
      <Why />
      <Happie />
      <Faq />
      {/* <Footer /> */}
    </main>
  );
}

export default App;
