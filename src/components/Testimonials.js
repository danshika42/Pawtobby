import React from "react";
import profile from "../images/profile.jpeg";
import quotes from "../images/Quotes.svg";

function Testimonials() {
  return (
    <section className="mb-36 mt-16 sm:mb-44">
      <h1 className="mb-6 text-center text-2xl font-semibold  opacity-80 sm:text-3xl">
        Testimonials
      </h1>
      <div className="m-auto grid w-[74%] grid-cols-1 gap-6 sm:w-[74%] sm:grid-cols-2 md:w-[80%] md:grid-cols-4">
        <div className="rounded-md shadow-2xl">
          <div className="relative">
            <p className="mb-12 p-6 text-sm opacity-70 sm:text-base">
              They are very polite people. Left my dog with them for eight
              nights, received pictures and updates everyday.
            </p>
            <img
              className="absolute right-[0.90rem] top-[7rem] w-[86px] opacity-[0.5]"
              src={quotes}
            ></img>
          </div>
          <div className="relative flex h-[50%] flex-col items-center rounded-b-md bg-[#F69946]">
            <div className="absolute top-[-3rem]">
              <img
                className="h-[88px] w-[88px] rounded-[50%] border-[4px] border-white"
                src={profile}
              ></img>
            </div>
            <p className="absolute top-[2.70rem] text-white">Rosalyn Newton</p>
          </div>
        </div>
        <div className="mt-[106px] rounded-md shadow-2xl md:mt-[0]">
          <div className="relative">
            <p className="mb-12 p-6 text-sm opacity-70 sm:text-base">
              Simi and her partner looked after Zara for a week while we went on
              holiday. Zara enjoyed herself so much.Thank You.
            </p>
            <img
              className="absolute right-[0.90rem] top-[7rem] w-[86px] opacity-[0.5]"
              src={quotes}
            ></img>
          </div>
          <div className="relative flex h-[50%] flex-col items-center rounded-b-md bg-[#F69946]">
            <div className="absolute top-[-3rem]">
              <img
                className="h-[88px] w-[88px] rounded-[50%] border-[4px] border-white"
                src={profile}
              ></img>
            </div>
            <p className="absolute top-[2.70rem] text-white">Terri Britton</p>
          </div>
        </div>
        <div className="mt-[106px] rounded-md shadow-2xl sm:mt-[98px] md:mt-[0]">
          <div className="relative">
            <p className="mb-12 p-6 text-sm opacity-70 sm:text-base">
              They are very polite people. Left my dog with them for eight
              nights, received pictures and updates everyday.
            </p>
            <img
              className="absolute right-[0.90rem] top-[7rem] w-[86px] opacity-[0.5]"
              src={quotes}
            ></img>
          </div>
          <div className="relative flex h-[50%] flex-col items-center rounded-b-md bg-[#F69946]">
            <div className="absolute top-[-3rem]">
              <img
                className="h-[88px] w-[88px] rounded-[50%] border-[4px] border-white"
                src={profile}
              ></img>
            </div>
            <p className="absolute top-[2.70rem] text-white">Rosalyn Newton</p>
          </div>
        </div>
        <div className="mt-[106px] rounded-md shadow-2xl sm:mt-[98px] md:mt-[0]">
          <div className="relative">
            <p className="mb-12 p-6 text-sm opacity-70 sm:text-base">
              They are very polite people. Left my dog with them for eight
              nights, received pictures and updates everyday.
            </p>
            <img
              className="absolute right-[0.90rem] top-[7rem] w-[86px] opacity-[0.5]"
              src={quotes}
            ></img>
          </div>
          <div className="relative flex h-[50%] flex-col items-center rounded-b-md bg-[#F69946]">
            <div className="absolute top-[-3rem]">
              <img
                className="h-[88px] w-[88px] rounded-[50%] border-[4px] border-white"
                src={profile}
              ></img>
            </div>
            <p className="absolute top-[2.70rem] text-white">Rosalyn Newton</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
