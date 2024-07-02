import "../index.css";

function Yooho() {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <div className="animated-gradient absolute left-0 top-0 h-screen w-full"></div>
      <div className="relative">
        <img className="h-[50vh] w-[90vw] lg:h-[75vh] lg:w-[90vw]" src="/yoho.png" alt="Yoho" />
        <div className="absolute left-0 top-[-12vh] lg:top-0 box-border lg:flex lg:flex-col lg:flex-wrap font-rugen text-white w-full h-full">
          <div className="flex flex-col lg:hidden text-center w-full h-full">
            <span className="text-[2vh]">
              TWO CREATIVE
            </span>
            <span className="text-[2vh]">
              EVENTS FOR THE
            </span>
            <span className="text-[2vh]">
              NEXT WAVE OF
            </span>
            <span className="text-[2vh]">
              LOCAL TALENT
            </span>
          </div>
          <div className="text-overlay hidden lg:flex lg:flex-col lg:items-start text-left">
            <span className="rounded-xl pr-2 text-[8.35vh]">
              TWO
            </span>
            <span className="rounded-xl pr-2 text-[8.35vh]">
              CREATIVE
            </span>
            <span className="rounded-xl pr-2 text-[8.35vh]">
              EVENTS FOR THE
            </span>
            <span className="rounded-xl pr-2 text-[8.35vh]">
              NEXT
            </span>
            <span className="rounded-xl pr-2 text-[8.35vh]">
              WAVE OF
            </span>
            <span className="rounded-xl pr-2 text-[8.35vh]">
              LOCAL TALENT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yooho;
