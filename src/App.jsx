import React from "react";
import LandingPage from "./Components/LandingPage";
import Yooho from "./Components/Yooho";
import Combined from "./Components/Combined";
import Sponsors from "./Components/responsivedesign";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"
import HackBattle from "./Components/HackBattle"
import Why from "./Components/WhyShouldI"
import Happie from "./Components/Happie"

function App() {
  return (
    <main>
      <Navbar />
      <LandingPage />
      <Yooho />
      <Combined />
      <Why />
      <Happie />
      <Footer />
    </main>
  );
}

export default App;
