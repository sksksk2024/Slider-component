import { useState } from "react";
import { ReactComponent as NextArr } from "./../images/icon-next.svg";
import { ReactComponent as PrevArr } from "./../images/icon-prev.svg";
import Tanya from "./../images/image-tanya.jpg";
import John from "./../images/image-john.jpg";

function Card() {
  const [change, setChange] = useState(false);

  const persons = [
    {
      name: "Tanya Sinclair",
      role: "UX Engineer",
      perspective:
        "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
      image: Tanya,
      alt: "tanya's opinion",
    },
    {
      name: "John Tarkpor",
      role: "Junior Front-end Developer",
      perspective:
        "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
      image: John,
      alt: "john's opinion",
    },
  ];

  const currentPerson = change ? persons[1] : persons[0];

  const handlePrevNext = () => {
    setChange((prev) => !prev);
  };

  return (
    <div className="animate-fade 3xs:text-md xs:text-xl md:text-2xl 3xs:text-center xl:text-start py-64P max-w-container-lg">
      <div className="flex justify-center items-center 3xs:flex-col-reverse xl:flex-row 3xs:gap-4 xl:gap-0">
        <aside className="animate-walk flex flex-col justify-center items-start 3xs:w-3/4 md:w-1/2 z-50 relative xl:left-64I">
          <div className="relative flex flex-col justify-center items-center xl:justify-start xl:items-start 3xs:p-32P xl:px-0 xl:py-32P rounded-10BR">
            <div className="quote z-10 relative xl:left-64I"></div>
            <h1 className="text-dark-blue font-normal z-20">{currentPerson.perspective}</h1>
          </div>
          <div className="3xs:text-md md:text-lg flex items-start 3xs:flex-col xl:flex-row 3xs:gap-0 xl:gap-4 3xs:mx-auto xl:ml-0">
            <h2 className="text-black font-bold mx-auto">{currentPerson.name}</h2>
            <h3 className="text-grayish-blue">{currentPerson.role}</h3>
          </div>
        </aside>
        <div className="relative z-40 mx-auto xl:right-64I">
          <img
            className="animate-fade relative mx-auto 3xs:w-3/4 md:w-4/5 lg:w-full rounded-10BR z-40"
            src={currentPerson.image}
            alt={currentPerson.alt}
          />
          <div className="animate-bounceCombo relative bottom-64I xl:left-192I xl:bottom-80I z-50">
            <button
              className="hover-svg mr-2 w-48W h-48H xl:w-64W xl:h-64H bg-red btn btn-outline btn-xs hover:animate-bounce"
              aria-label="previous"
              onClick={handlePrevNext}
            >
              <PrevArr />
            </button>
            <button
              className="hover-svg w-48W h-48H xl:w-64W xl:h-64H bg-blue btn btn-outline btn-xs hover:animate-bounce"
              aria-label="next"
              onClick={handlePrevNext}
            >
              <NextArr />
            </button>
          </div>
          <div className="bg-img z-10 w-full h-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Card;