import "../index.css";

function Yooho() {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <div className="animated-gradient absolute left-0 top-0 h-screen w-full"></div>
      <div className="relative">
        <img className="h-[75vh] w-[90vw]" src="/yoho.png" alt="Yoho" />
        <div className="text-overlay absolute left-0 top-0 box-border flex flex-col flex-wrap font-rugen text-white">
          <span className="relative mr-0 self-start rounded-xl pr-2 sm:text-[8vh] md:text-[8vh] lg:text-[8.35vh]">
            TWO
          </span>
          <span className="relative mr-0 self-start rounded-xl pr-2 sm:text-[8vh] md:text-[8vh] lg:text-[8.35vh]">
            CREATIVE
          </span>
          <span className="relative mr-0 self-start rounded-xl pr-2 sm:text-[8vh] md:text-[8vh] lg:text-[8.35vh]">
            EVENTS FOR THE
          </span>
          <span className="relative mr-0 self-start rounded-xl pr-2 sm:text-[8vh] md:text-[8vh] lg:text-[8.35vh]">
            NEXT
          </span>
          <span className="relative mr-0 self-start rounded-xl pr-2 sm:text-[8vh] md:text-[8vh] lg:text-[8.35vh]">
            WAVE OF
          </span>
          <span className="relative mr-0 self-start rounded-xl pr-2 sm:text-[8vh] md:text-[8vh] lg:text-[8.35vh]">
            LOCAL TALENT
          </span>
        </div>
      </div>
    </div>
  );
}

export default Yooho;
