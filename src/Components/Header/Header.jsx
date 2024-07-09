import "./header.css";
import ads from "../../assets/Online-ads-unscreen.gif";
import PricePlans from "../Price/PricePlans";
import MarketingStratigies from "../Marketing/MarketingStrategies";
import { useEffect } from "react";
const Header = () => {
  useEffect(() => {
    const handleWindowLoad = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Add event listener for window load
    window.addEventListener("load", handleWindowLoad);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  return (
    <>
      <div className="bg-black header overflow-hidden">
        <header className=" mx-auto w-[85vw]">
          <div className="main-header flex sm:flex-row flex-col justify-between ">
            <div className="left  mt-10 sm:w-[60%] mx-auto sm:mt-20 sm:px-0 sm:pt-0 pt-14 sm:p-10">
              <h1 className="header-h1 mt-4 sm:text-[55px] text-[25px]">
                <span className="word">
                  Empower the Value<span className="superscript">s</span>{" "}
                </span>
                <span className="word">of Advertisement</span>
              </h1>
              <p className="text-gray-300 text-[14px] sm:text-[20px] text-justify font-normal  w-auto sm:w-[40vw] mt-5 sm:mt-10">
                Unlock the power of creativity with our advertising expertise.
                From captivating campaigns to strategic branding solutions, we
                craft narratives that resonate and drive results.
              </p>
              <div className="sm:mt-10 mt-5">
                <button className="bg-red-600 px-4 py-3 rounded-md hover:bg-red-700 text-white">
                  Buy Ads
                </button>
              </div>
            </div>

            <div className="right sm:w-[40%] flex justify-end ">
              {/* <img src= {ads} alt="background" /> */}
              <img
                src="./Designer-removebg-preview.png"
                alt=""
                className=" xl:w-[28vw] lg:[w-28vw] md:w-[26vw] sm:w-[25vw] h-min my-auto"
              />
            </div>
          </div>
        </header>
        {/* <PricePlans /> */}
      </div>
      {/* <MarketingStratigies /> */}
    </>
  );
};

export default Header;
