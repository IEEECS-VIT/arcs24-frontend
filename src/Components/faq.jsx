import React, { useState } from "react";
import Accordion from "./accordion";
import "../index.css";
import "../ieeecs.css";

const HackFaqItems = [
  {
    title: "What is ARCS?",
    content: (
      <>
        ARCS is the flagship event of IEEE-CS which has Hackbattle and Cicada as
        its two main events. It is a platform for students to showcase their
        technical skills and knowledge.
      </>
    ),
  },
  {
    title: "Where can we register?",
    content: (
      <>
        Registrations are open! Visit the gravitas website to register for{" "}
        <a
          href="https://gravitas.vit.ac.in/events/e748d506-415c-4166-b45f-7485c25406aa"
          className="underline"
        >
          HackBattle
        </a>{" "}
        and{" "}
        <a
          href="https://gravitas.vit.ac.in/events/5387f16e-b092-470a-b918-e89307526ebf"
          className="underline"
        >
          Cicada
        </a>
      </>
    ),
  },
  {
    title: "When are the events?",
    content: (
      <>
        ARCS will be hosted during pre-gravitas. Hackbattle is on 25-26th of
        September and Cicada is on 22nd of September.
      </>
    ),
  },
  {
    title: "Will OD's be provided to participants?",
    content: (
      <>
        Yes, OD's will be provided to all participants of both the events for
        the whole duration of the event.
      </>
    ),
  },
];

const Faq = () => {
  const [selected, setSelected] = useState("HackBattle");
  const [activeIndex, setActiveIndex] = useState(null); // State to track the active FAQ

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle the active FAQ
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
      <Accordion
        items={getItems()}
        activeIndex={activeIndex}
        onClick={handleAccordionClick}
      />
      <InfiniteMarquee />
    </div>
  );
};

const InfiniteMarquee = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden" id="faqs">
      <div className="marquee-container-right whitespace-nowrap font-rugen text-3xl sm:text-4xl md:text-5xl">
        <div className="marquee-content inline-block">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="px-4">
              DOUBLE THE EVENTS! DOUBLE THE FUN!
            </span>
          ))}
        </div>
        <div className="marquee-content inline-block">
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
