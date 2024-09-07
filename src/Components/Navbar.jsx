import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { title: "Home", href: "#hero" },
    { title: "About", href: "#about" },
    { title: "Events", href: "#events" },
    { title: "FAQ", href: "#faqs" },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Explicitly close the mobile menu
    setShowMenu(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="fixed top-0 z-50 hidden items-center justify-center px-48 pt-4 md:flex md:w-screen">
        <img src="navbar.svg" className="w-full" alt="Navbar" />
        <nav className="absolute top-[20px] ml-[30vw] w-full px-48 pt-4">
          <ul className="mb-8 flex flex-row justify-center gap-x-10">
            {menuItems.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="font-rugen text-base text-white hover:text-gray-300"
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`fixed left-0 top-0 z-50 flex w-full items-center justify-between px-4 py-4 md:hidden`}
      >
        <img src="logo.svg" alt="Logo" className="h-8" />
        <motion.button
          className="h-8 cursor-pointer"
          aria-expanded={showMenu}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
        >
          <img src="menu.svg" alt="Menu" />
        </motion.button>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            id="mobile-menu"
            className="fixed left-0 top-0 z-40 h-screen w-screen bg-[#01061B] text-white md:hidden"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <nav className="flex h-full items-center justify-center">
              <ul className="space-y-8">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.title}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={item.href}
                      className="block text-center font-rugen text-2xl text-white"
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                    >
                      {item.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
