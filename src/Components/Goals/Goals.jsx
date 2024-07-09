const Goals = () => {
  return (
    <div className="w-[80vw] sm:mt-[10vh] mx-auto">
      <h1 className="sm:text-[32px] text-center text-[22px] text-gray-200 font-semibold flex justify-center textShadow-[#fff]">
        Achieve all your goals in one place
      </h1>
      <div className=" w-[120px] mx-auto mt-6">
        <a
          href="#_"
          className=" mx-auto relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-gray-700  rounded-md shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-600 group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute flex text-gray-300 border border-white items-center justify-center w-full h-full text-black-500 transition-all duration-300 transform group-hover:translate-x-full ease">
            Buy Ads
          </span>
          <span className="relative invisible">Buy Ads</span>
        </a>
      </div>
      <div className="ads-goal w-[75vw] mx-auto flex flex-col sm:mt-[10vh] mt-5">

        <div className="first w-full flex flex-col sm:gap-0 gap-10 sm:flex-row justify-between align-middle">
          {/* ==================  first */}
          <div className="first1 flex flex-col  justify-center align-middle">
            <div className="icon bg-red-600 rounded-full sm:h-20 p-6 sm:w-20 h-[70px] w-[70px] flex justify-center items-center mx-auto">
              <i className=" fa-regular fa-newspaper fa-2xl"></i>
            </div>
            <h3 className="text-[16px] sm:text-[22px] w-auto sm:w-[330px] mx-auto text-center font-semibold mt-5 text-white">
              Maximise leads and conversions
            </h3>
            <p className="text-[14px] sm:text-[18px] w-auto sm:w-[330px] mx-auto text-center mt-3 font-medium text-gray-300">
              Get better quality leads and enhance conversions.
            </p>
          </div>
          {/* =========  second */}
          <div className="first2 flex flex-col justify-center align-middle">
            <div className="icon bg-red-600 rounded-full sm:h-20 p-5 sm:w-20 h-[70px] w-[70px] flex justify-center items-center mx-auto">
              <i className="fa-solid fa-signal fa-2xl"></i>
            </div>
            <h3 className="text-[16px] text-white sm:text-[22px] w-auto sm:w-[330px] mx-auto text-center font-semibold mt-5">
              Increase online saless
            </h3>
            <p className="text-[14px] w-auto sm:w-[330px] mx-auto sm:text-[18px] text-center mt-3 font-medium text-gray-300">
              Show up where shoppers are and increase site traffic and sales.
            </p>
          </div>
          {/*================== third */}
          <div className="first3 flex flex-col justify-center align-middle">
            <div className="icon bg-red-600 rounded-full sm:h-20 p-5 pt-[22px] sm:w-20 h-[70px] w-[70px] flex justify-center items-center mx-auto">
              <i className="fa-solid fa-shop fa-2xl"></i>
            </div>
            <h3 className="text-[16px] text-white sm:text-[22px] w-auto sm:w-[330px] mx-auto text-center font-semibold mt-5">
              Drive in-store foot traffic
            </h3>
            <p className="text-[14px] w-auto sm:w-[330px] mx-auto sm:text-[18px] text-center mt-3 font-medium text-gray-300">
              Bring people through your doors and increase offline sales.
            </p>
          </div>
        </div>

        <div className="seond w-[50vw] flex-col sm:gap-0 gap-10 sm:flex-row mx-auto flex  mt-16">
          {/* ==================  first */}
          <div className="first1 flex flex-col  justify-center align-middle">
            <div className="icon bg-red-600 rounded-full sm:h-20 p-6 sm:w-20 h-[70px] w-[70px] flex justify-center items-center mx-auto">
              <i className="fa-solid fa-earth-americas fa-2xl"></i>
            </div>
            <h3 className="text-[16px] text-white sm:text-[22px] w-auto sm:w-[340px] mx-auto text-center font-semibold mt-5">
              Show  to more people
            </h3>
            <p className="text-[14px] sm:text-[18px] w-auto sm:w-[330px] mx-auto text-center mt-3 font-medium text-gray-300">
              Put your brand out there to increase reach and engagement.
            </p>
          </div>
          {/* =========  second */}
          <div className="first2 flex flex-col justify-center align-middle sm:ml-24 mml-0">
            <div className="icon bg-red-600 rounded-full sm:h-20 p-5 sm:w-20 h-[70px] w-[70px] flex justify-center items-center mx-auto">
              <i className="fa-solid fa-mobile fa-2xl "></i>
            </div>
            <h3 className="text-[16px] text-white sm:text-[22px] w-auto sm:w-[330px] mx-auto text-center font-semibold mt-5">
              Market your app to new users
            </h3>
            <p className="text-[14px]  mx-auto sm:text-[18px] text-center mt-3 font-medium text-gray-300">
              Put your app in front of the right users to drive downloads and engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;