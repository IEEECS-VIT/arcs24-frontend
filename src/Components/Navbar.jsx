export default function Navbar() {
  return (
    <div className="none fixed top-0 z-50 items-center justify-center px-48 pt-4 md:flex md:w-screen  ">
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
          <li>
            <a href="#" className="font-rugen text-base text-white">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
