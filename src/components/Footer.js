import React from 'react'
import footer1 from "../images/footer-1.png";
import footer2 from "../images/footer-2.png";
import footer3 from "../images/footer-3.png";
import footer4 from "../images/footer-4.png";
import footer5 from "../images/footer-5.png";

function Footer() {
  return (
    <footer className="text-xs sm:text-sm">
        <div className="bg-[#FFFAF5] p-8  sm:p-12">
          <div className="m-auto sm:flex w-[80%] justify-between ">
            <div className="">
              <a
                className="text-base sm:text-lg font-semibold opacity-90"
                href="https://boostedusa.com/"
              >
                Pawtobby
              </a>
            </div>
            <div className="">
              <h2 className="mb-4 mt-4 sm:mt-0 text-base sm:text-lg font-semibold opacity-90">Explore</h2>
              <ul className="text-[0.76rem] sm:text-sm">
                <li className="mb-2">
                  <a href="#">About Us</a>
                </li>
                <li className="mb-2">
                  <a href="#">Our Services</a>
                </li>
                <li className="mb-2">
                  <a href="#">Book Now</a>
                </li>
                <li className="mb-2">
                  <a href="#">FAQs</a>
                </li>
                <li className="mb-2">
                  <a href="#">Contact Us</a>
                </li>
                <li className="mb-2">
                  <a href="#">Quick Start Guide</a>
                </li>
                <li className="mb-2">
                  <a href="#">Accessibility Statement</a>
                </li>
              </ul>
            </div>
            <div className="sm:w-[35%] s-[45%]">
              <h2 className="mb-4 text-base sm:text-lg font-semibold opacity-90 mt-4 sm:mt-0">
                Pawtobby
              </h2>
              <p className="mb-4">
                The live-in pet sitters are experienced, mature and trustworthy
                pet lovers. So you can enjoy your holiday or break knowing your
                pet and your property are in safe hands.
              </p>
              <p>Central Rd, Leeds LS1 6DE, United Kingdom</p>
            </div>
          </div>
        </div>

        <div className="m-auto sm:flex w-[80%] justify-between p-6">
          <div className="text-xs sm:font-bold">
            <p>
              &copy; 2023{" "}
              <a className="text-[#F69946]" href="https://boostedusa.com/">
                Pawtobby
              </a>
              .All Rights Reserved.{" "}
              <a
                className="text-[#F69946]"
                href="https://boostedusa.com/pages/terms-of-service"
              >
                Terms of Services
              </a>
              . Built by Anshika Dubey
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center">
            <div className="mr-[10px] h-[20px] w-[30px]">
              <img className="h-full w-full" src={footer1} alt="" />
            </div>
            <div className="mr-[10px] h-[20px] w-[30px]">
              <img className="h-full w-full" src={footer2} alt="" />
            </div>
            <div className="mr-[10px] h-[20px] w-[30px]">
              <img className="h-full w-full" src={footer3} alt="" />
            </div>
            <div className="mr-[10px] h-[20px] w-[30px]">
              <img className="h-full w-full" src={footer4} alt="" />
            </div>
            <div className="mr-[10px] h-[20px] w-[30px]">
              <img className="h-full w-full" src={footer5} alt="" />
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer