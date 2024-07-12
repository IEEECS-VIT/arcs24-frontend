import React from "react";
import LandingPage from "./components/LandingPage";
import Yooho from "./components/Yooho";
import Combined from "./components/Combined";
import Sponsors from "./components/responsivedesign";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import HackBattle from "./components/HackBattle"
import Why from "./components/WhyShouldI"
import Happie from "./components/Happie"

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
