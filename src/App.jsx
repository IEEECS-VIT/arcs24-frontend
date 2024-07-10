import React from "react";
import LandingPage from "./Components/LandingPage";
import Yooho from "./Components/Yooho";
import Combined from "./Components/Combined";
import Sponsors from "./Components/Sponsors";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"
import HackBattle from "./Components/HackBattle"

function App() {
  return (
    <main>
      <Navbar />

      <LandingPage />
      <Yooho />
      <Combined />
      <Sponsors />
      <Footer />
    </main>
  );
}

export default App;
