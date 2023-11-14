import React from "react";
import petSitter from "../images/dog-sitter 1.svg";
import foodBowl from "../images/food-bowl 1.svg";
import daycare from "../images/day-care 1.svg";
import lead from "../images/lead 1.svg";

function Services() {
  return (
    <section className="sm:mt-16">
      <div className="m-auto w-[80%]">
        <h1 className="mb-10 text-center text-2xl font-semibold  opacity-80 sm:text-3xl">
          Our Services
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-start rounded-sm bg-[#FFFAF5] p-6">
            <img className="m-auto" src={petSitter}></img>
            <h4 className="sm-text-lg m-auto p-3 text-base font-semibold opacity-80">
              Pet Sitting
            </h4>
            <div className="rounded-sm bg-[#F69946] px-4 py-1 text-white opacity-80">
              <button className="text-sm opacity-100 sm:text-base">
                Know More <i className="fa-solid fa-angle-right ml-2"></i>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start rounded-sm bg-[#FFFAF5] p-6">
            <img className="m-auto" src={foodBowl}></img>
            <h4 className="sm-text-lg m-auto p-3 text-base font-semibold opacity-80">
              Feeding
            </h4>
            <div className="rounded-sm bg-[#F69946] px-4 py-1 text-white opacity-80">
              <button className="text-sm opacity-100 sm:text-base">
                Know More <i className="fa-solid fa-angle-right ml-2"></i>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start rounded-sm bg-[#FFFAF5] p-6">
            <img className="m-auto" src={lead}></img>
            <h4 className="sm-text-lg m-auto p-3 text-base font-semibold opacity-80">
              Walking
            </h4>
            <div className="rounded-sm bg-[#F69946] px-4 py-1 text-white opacity-80">
              <button className="text-sm opacity-100 sm:text-base">
                Know More <i className="fa-solid fa-angle-right ml-2"></i>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start rounded-sm bg-[#FFFAF5] p-6">
            <img className="m-auto" src={daycare}></img>
            <h4 className="sm-text-lg m-auto p-3 text-base font-semibold opacity-80">
              Doggie daycare
            </h4>
            <div className="rounded-sm bg-[#F69946] px-4 py-1 text-white opacity-80">
              <button className="text-sm opacity-100 sm:text-base">
                Know More <i className="fa-solid fa-angle-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
