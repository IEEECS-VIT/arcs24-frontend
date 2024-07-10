import React from "react";
import LandingPage from "./Components/LandingPage";
import Yooho from "./Components/Yooho";
import Combined from "./Components/Combined";
import Sponsors from "./Components/Sponsors";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <main>
      <Navbar />

      <LandingPage />
      <Yooho />
      <Combined />
      <Sponsors />
      
    </main>
  );
}

export default App;
