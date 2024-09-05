import React, { useState, useRef, useEffect } from "react";
import Accordion from "./accordion";
import "../index.css";
import "../ieeecs.css";
const HackFaqItems = [
  {
    title: "What is ARCS?",
    content: (
      <>
        ARCS is the flagship event of IEEE-CS which has Hackbattle and Cicada
        <a
          href="#"
          className="text-blue-700 underline underline-offset-2 dark:text-blue-600"
        >
          documentation
        </a>{" "}
        for additional information.
      </>
    ),
  },
  {
    title: "Where can we register?",
    content: (
      <>
        Reach out to our dedicated support team via email at{" "}
        <a
          href="#"
          className="text-blue-700 underline underline-offset-2 dark:text-blue-600"
        >
          support@example.com
        </a>{" "}
        or call our toll-free number at 1-800-123-4567 during business hours.
      </>
    ),
  },
  {
    title: "When are the events?",
    content: (
      <>
        Please refer to our{" "}
        <a
          href="#"
          className="text-blue-700 underline underline-offset-2 dark:text-blue-600"
        >
          refund policy page
        </a>{" "}
        on the website for detailed information regarding eligibility,
        timeframes, and the process for requesting a refund.
      </>
    ),
  },
  {
    title: "Will OD's be provided to participants?",
    content: (
      <>
        Please refer to our{" "}
        <a
          href="#"
          className="text-blue-700 underline underline-offset-2 dark:text-blue-600"
        >
          refund policy page
        </a>{" "}
        on the website for detailed information regarding eligibility,
        timeframes, and the process for requesting a refund.
      </>
    ),
  },
];

const Faq = () => {
  const [selected, setSelected] = useState("HackBattle");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const getItems = () => {
    if (selected === "Cicada") {
      return CicadaFaqItems;
    }
    return HackFaqItems;
  };

  return (
    <div className="animated-gradient relative flex min-h-screen w-full flex-col items-center justify-around p-2 text-2xl sm:p-4 md:flex-row md:p-10">
      <div className="flex flex-col gap-4">
        <p className="font-rugen text-7xl text-[#F7F6F3]">FAQS</p>
        <div className="flex items-center justify-center gap-2"></div>
      </div>
      <Accordion items={getItems()} />
      <InfiniteMarquee />
    </div>
  );
};

const InfiniteMarquee = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden">
      <div className="marquee-container highlight whitespace-nowrap font-rugen text-5xl">
        <div className="marquee-content inline-block">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="px-4">
              DOUBLE THE EVENTS! DOUBLE THE FUN!
            </span>
          ))}
        </div>
        <div className="highlight marquee-content inline-block">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="px-4">
              DOUBLE THE EVENTS! DOUBLE THE FUN!
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
