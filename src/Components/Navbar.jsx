import React, { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div className="fixed top-0 z-50 hidden w-full items-center justify-center px-48 pt-4 lg:flex">
        <img src="navbar.svg" className="w-full" alt="Navbar"></img>
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
      <div className="fixed top-0 z-50 flex w-full items-center justify-between px-4 pt-4 lg:hidden">
        <img src="logo.svg" alt="Logo" className="h-8" />{" "}
        <img src="menu.svg" alt="Menu" className="h-8" onClick={toggleMenu} />{" "}
      </div>
    </>
  );
}
