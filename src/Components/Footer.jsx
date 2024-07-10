import "../index.css";

function Footer() {
  return (
    <div className="relative left-0 top-0 h-screen w-full font-source-serif">
      <div className="flex flex-col lg:hidden w-full h-full animated-gradient">
        <p className="highlight font-rugen text-[6.6vw]">DOUBLE THE FUN: H</p>
        <div className="flex mt-8 mx-16">
      
        <div className="w-[90vw] text-[2vh]">
          <p>
            We're IEEE-CS Innovators, where curiosity fuels our events.
            </p>
            <p>
            From cutting-edge tech talks to hands-on workshops, we're on a mission to push the boundaries of what's possible in the world of computer science.
          </p>
          <br />
          <p>
            Have any questions about our upcoming happenings?
            Reach out to us! We're here to guide you through
            every step of the way.
          </p>
        </div>
        
        </div>
        <div className="w-full flex justify-center mt-8 text-[2vh]">
        <form className="w-full mx-3.5 ">
          <div className="flex ">
            <label htmlFor="name" className="w-36 text-justify justify-center inline-flex text-white border border-b-white border-t-0 rounded-b-full">Name</label>
            <input
              type="text" id="name" name="name"
              className="w-full rounded-b-full ml-4 border bg-[#01061B] text-white border-b-white border-t-0"
              required
            />
          </div>
          <div className="flex mt-3">
            <label htmlFor="email" className="w-36 text-justify justify-center inline-flex text-white border border-b-white border-t-0 rounded-b-full">Email-Id</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-b-full ml-4 border bg-[#01061B] text-white border-b-white border-t-0"
              required
            />
          </div>
          <div className="mb-4 flex mt-3 ">
            <label htmlFor="message" className="w-36 inline-flex text-white mb-2 border border-b-white border-t-0 rounded-b-full text-justify justify-center">Message</label>
            <input
              name="message"
              className="w-full rounded-b-full ml-4 border bg-[#01061B] text-white border-b-white border-t-0"
              required
            />
          </div>
          <div className="flex justify-center my-7">
            <button
              type="submit"
              className="mt-2 mb-4 w-1/4 p-3 bg-button text-background font-bold rounded-full shadow-md hover:bg-indigo-500 transition-colors"
            >
              Send
            </button>
          </div>
        </form>
        </div>
        <hr></hr>
        <div className="flex ml-16 mt-4 text-[2vh]">
          <div>
          <ul>
            <li>Instagram</li>
            <li>X</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
          </ul>
          </div>
        
        <div className="inline-flex ml-16">
          <ul>
            <li>Work</li>
            <br />
            <li>About</li>
            <br />
            <li>VIT, Vellore Campus, </li>
            <li>Tiruvalam Rd, Katpadi,</li>
            <li>Vellore, Tamil Nadu 632014</li>
          </ul>
          </div>
        </div>
      </div>
      <div className="hidden md:block animated-gradient">
        <p className="highlight font-rugen text-[3.85vw]">TWO EVENTS, DOUBLE THE FUN: H</p>
        <div className=" flex mt-32 mx-32">
      
        <div className="w-[46vw] text-[3.5vh]">
          <p>
            We're IEEE-CS Innovators, where curiosity fuels our events.
            From cutting-edge tech talks to hands-on workshops, we're on a mission to push the boundaries of what's possible in the world of computer science.
          </p>
          <br />
          <p>
            Have any questions about our upcoming happenings?
            Reach out to us! We're here to guide you through
            every step of the way.
          </p>
        </div>
        <div className="inline-flex ml-44 text-[3vh]">
          <ul>
            <li>Instagram</li>
            <li>X</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Work</li>
            <li>About</li>
            <li>VIT, Vellore Campus, </li>
            <li>Tiruvalam Rd, Katpadi,</li>
            <li>Vellore, Tamil Nadu 632014</li>
          </ul>
        </div>
        </div>
        <div className="w-full flex justify-center mt-24">
        <form className="w-1/3 text-[3vh]">
          <div className="flex">
            <label htmlFor="name" className="w-36 text-justify justify-center inline-flex text-white mb-2 border border-b-white border-t-0 rounded-b-full">Name</label>
            <input
              type="text" id="name" name="name"
              className="w-full rounded-b-full ml-4 border bg-[#01061B] text-white border-b-white border-t-0"
              required
            />
          </div>
          <div className="flex mt-6">
            <label htmlFor="email" className="w-36 text-justify justify-center inline-flex text-white mb-2 border border-b-white border-t-0 rounded-b-full">Email-Id</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-b-full ml-4 border bg-[#01061B] text-white border-b-white border-t-0"
              required
            />
          </div>
          <div className="mb-4 flex mt-6">
            <label htmlFor="message" className="w-36 inline-flex text-white mb-2 border border-b-white border-t-0 rounded-b-full text-justify justify-center">Message</label>
            <input
              name="message"
              className="w-full rounded-b-full ml-4 border bg-[#01061B] text-white border-b-white border-t-0"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-12 mb-8 w-1/4 p-3 bg-button text-background font-bold rounded-full shadow-md hover:bg-indigo-500 transition-colors"
            >
              Send
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
