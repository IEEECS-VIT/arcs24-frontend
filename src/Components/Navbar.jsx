import React, { useState, useEffect } from "react";
import "../index.css"

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    if (showMenu) {
      document.body.style.marginTop = "200px";
    } else {
      document.body.style.marginTop = "0"; 
    }

    return () => {
      document.body.style.marginTop = "0";
    };
  }, [showMenu]);

  return (
    <>

      <div className="fixed top-0 z-50 hidden items-center justify-center px-48 pt-4 md:flex md:w-screen">
        <img src="navbar.svg" className="w-full" alt="Navbar" />

        <nav className="absolute top-0 ml-[30vw] w-full px-48 pt-4">
          <ul className="mb-8 flex flex-row justify-center gap-x-10">
            <li>
              <a href="#" className="font-rugen text-base text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="font-rugen text-base text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="font-rugen text-base text-white">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </div>


      <div className="fixed top-0 z-50 flex w-full items-center justify-between px-4 pt-4 nav-mob md:bg-transparent md:hidden">
        <img src="logo.svg" alt="Logo" className="h-8" />
        <img src="menu.svg" alt="Menu" className="h-8 cursor-pointer" onClick={toggleMenu} />
      </div>

      {showMenu && (
        <div className="fixed top-12 left-0 z-40 w-full nav-mob text-white md:hidden">
          <nav className="px-4 py-2">
            <ul className="space-y-4">
              <li>
                <a href="#" className="block font-rugen text-base text-white text-center">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block font-rugen text-base text-white text-center">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block font-rugen text-base text-white text-center">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="block font-rugen text-base text-white text-center">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
