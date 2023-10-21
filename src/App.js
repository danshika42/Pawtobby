import "./App.css";
import petSitter from "./images/dog-sitter 1.svg";
import foodBowl from "./images/food-bowl 1.svg";
import daycare from "./images/day-care 1.svg";
import lead from "./images/lead 1.svg";
import profile from "./images/profile.jpeg";
import quotes from "./images/Quotes.svg";
import footer1 from "./images/footer-1.png";
import footer2 from "./images/footer-2.png";
import footer3 from "./images/footer-3.png";
import footer4 from "./images/footer-4.png";
import footer5 from "./images/footer-5.png";

function App() {
  return (
    <div className="m-auto max-w-[1590px]">
      <div className="h-[484px] bg-mobile-banner-bg bg-no-repeat lg:bg-banner-bg">
        <nav className="m-auto flex sm:w-[80%] justify-between p-8">
          <ul>
            <li>
              <a className="text-lg font-semibold opacity-80 sm:opacity-60" href="">
                Pawtobby
              </a>
            </li>
          </ul>
          <i className="fa-solid fa-bars flex text-2xl opacity-60 md:hidden"></i>
          <ul className="hidden w-[60%] justify-evenly font-medium opacity-80 md:flex">
            <li>
              <a className="text-[#F69946]" href="">
                Home
              </a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">
                Our Services{" "}
                <i class="fa-solid fa-sort-down ml-1 text-center align-text-top opacity-80"></i>
              </a>
            </li>
            <li>
              <a href="">Book Now</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Register</a>
            </li>
          </ul>
        </nav>
        <div className="md:w-[50%] mt-10 m-auto md:m-0  w-[60%]">
          <div className="m-auto  md:ml-[15rem] md:mt-[3rem] md:w-[50%]">
            <h1 className="mb-6 text-2xl font-semibold md:text-4xl">
              Book Online
            </h1>
            <p className="text-md">
              If you want someone to care for your pet when you’re away, pet
              sitters are a great choice.
            </p>
            <button className="mt-6 rounded-sm bg-[#F69946] px-4 py-1 text-white">
              Book Now <i className="fa-solid fa-angle-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
      <section className="sm:mt-16">
        <div className="m-auto w-[80%]">
          <h1 className="mb-10 text-center text-2xl sm:text-3xl  font-semibold opacity-80">
            Our Services
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col items-start rounded-sm bg-[#FFFAF5] p-6">
              <img className="m-auto" src={petSitter}></img>
              <h4 className="m-auto p-3 text-base sm-text-lg font-semibold opacity-80">
                Pet Sitting
              </h4>
              <div className="rounded-sm bg-[#F69946] px-4 py-1 text-white opacity-80">
                <button className="opacity-100 sm:text-base text-sm">Know More</button>
              </div>
            </div>
            <div className="flex flex-col items-start rounded-sm bg-[#FFFAF5] p-6">
              <img className="m-auto" src={foodBowl}></img>
              <h4 className="m-auto p-3 text-base sm-text-lg font-semibold opacity-80">
                Feeding
              </h4>
              <div className="rounded-sm bg-[#F69946] px-4 py-1 text-white opacity-80">
                <button className="opacity-100 sm:text-base text-sm">Know More</button>
              </div>
            </div>
            <div className="flex flex-col items-start rounded-sm bg-[#FFFAF5] p-6">
              <img className="m-auto" src={lead}></img>
              <h4 className="m-auto p-3 text-base sm-text-lg font-semibold opacity-80">
                Walking
              </h4>
              <div className="rounded-sm bg-[#F69946] px-4 py-1 text-white opacity-80">
                <button className="opacity-100 sm:text-base text-sm">Know More</button>
              </div>
            </div>
            <div className="flex flex-col items-start rounded-sm bg-[#FFFAF5] p-6">
              <img className="m-auto" src={daycare}></img>
              <h4 className="m-auto p-3 text-base sm-text-lg font-semibold opacity-80">
                Doggie daycare
              </h4>
              <div className="rounded-sm bg-[#F69946] px-4 py-1 text-white opacity-80">
                <button className="opacity-100 sm:text-base text-sm">Know More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-36 sm:mb-44 mt-16">
        <h1 className="mb-6 text-center text-2xl sm:text-3xl  font-semibold opacity-80">
          Testimonials
        </h1>
        <div className="m-auto grid w-[74%] sm:w-[74%] md:w-[80%] grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="rounded-md shadow-2xl">
            <div className="relative">
              <p className="mb-12 p-6 text-sm sm:text-base opacity-70">
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
              <p className="absolute top-[2.70rem] text-white">
                Rosalyn Newton
              </p>
            </div>
          </div>
          <div className="rounded-md shadow-2xl md:mt-[0] mt-[106px]">
            <div className="relative">
              <p className="mb-12 p-6 text-sm sm:text-base opacity-70">
                Simi and her partner looked after Zara for a week while we went
                on holiday. Zara enjoyed herself so much.Thank You.
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
          <div className="rounded-md sm:mt-[98px] shadow-2xl md:mt-[0] mt-[106px]">
            <div className="relative">
              <p className="mb-12 p-6 text-sm sm:text-base opacity-70">
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
              <p className="absolute top-[2.70rem] text-white">
                Rosalyn Newton
              </p>
            </div>
          </div>
          <div className="rounded-md shadow-2xl sm:mt-[98px] md:mt-[0] mt-[106px]">
            <div className="relative">
              <p className="mb-12 p-6 text-sm sm:text-base opacity-70">
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
              <p className="absolute top-[2.70rem] text-white">
                Rosalyn Newton
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-xs sm:text-base">
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
              <ul className="text-[0.76rem] sm:text-base">
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
    </div>
  );
}

export default App;
