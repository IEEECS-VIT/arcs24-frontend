import { useState } from "react";
import Accordion from "./accordion";
import "../index.css";

const CicadaFaqItems = [
  {
    title: "What Cicada are supported?",
    content: (
      <>
        Our website is optimized for the latest versions of Chrome, Firefox,
        Safari, and Edge. Check our
        <a
          href="#"
          className="text-blue-700 underline underline-offset-2 dark:text-blue-600"
        >
          documentation
        </a>
        for additional information.
      </>
    ),
  },
  {
    title: "How can I contact customer support?",
    content: (
      <>
        Reach out to our dedicated support team via email at
        <a
          href="#"
          className="text-blue-700 underline underline-offset-2 dark:text-blue-600"
        >
          support@example.com
        </a>
        or call our toll-free number at 1-800-123-4567 during business hours.
      </>
    ),
  },
  {
    title: "What is the refund policy?",
    content: (
      <>
        Please refer to our
        <a
          href="#"
          className="text-blue-700 underline underline-offset-2 dark:text-blue-600"
        >
          refund policy page
        </a>
        on the website for detailed information regarding eligibility,
        timeframes, and the process for requesting a refund.
      </>
    ),
  },
];

const HackFaqItems = [
  {
    title: "What browsers are supported?",
    content: (
      <>
        Our website is optimized for the latest versions of Chrome, Firefox,
        Safari, and Edge. Check our
        <a
          href="#"
          className="text-blue-700 underline underline-offset-2 dark:text-blue-600"
        >
          documentation
        </a>
        for additional information.
      </>
    ),
  },
  {
    title: "How can I contact customer support?",
    content: (
      <>
        Reach out to our dedicated support team via email at
        <a
          href="#"
          className="text-blue-700 underline underline-offset-2 dark:text-blue-600"
        >
          support@example.com
        </a>
        or call our toll-free number at 1-800-123-4567 during business hours.
      </>
    ),
  },
  {
    title: "What is the refund policy?",
    content: (
      <>
        Please refer to our
        <a
          href="#"
          className="text-blue-700 underline underline-offset-2 dark:text-blue-600"
        >
          refund policy page
        </a>
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
    <div className="animated-gradient flex min-h-screen w-full flex-col items-center justify-around p-2 sm:p-4 md:flex-row md:p-10">
      <div className="flex flex-col gap-4">
        <p className="font-rugen text-7xl text-[#F7F6F3]">FAQS</p>
        <div className="flex items-center justify-center gap-2">
          <label>
            <input
              type="radio"
              name="faq"
              value="HackBattle"
              checked={selected === "HackBattle"}
              onChange={handleChange}
              className="hidden"
            />
            <span
              className={`cursor-pointer p-2 ${selected === "HackBattle" ? "bg-purple-600 text-[#F7F6F3]" : ""} rounded-xl border-2 border-purple-600 text-base`}
            >
              HackBattle
            </span>
          </label>
          <label>
            <input
              type="radio"
              name="faq"
              value="Cicada"
              checked={selected === "Cicada"}
              onChange={handleChange}
              className="hidden"
            />
            <span
              className={`cursor-pointer p-2 ${selected === "Cicada" ? "border-2 border-purple-600 bg-purple-600 text-[#F7F6F3]" : "border-2 border-purple-600"} rounded-xl text-base`}
            >
              Cicada
            </span>
          </label>
        </div>
      </div>
      <Accordion items={getItems()} />
    </div>
  );
};

export default Faq;