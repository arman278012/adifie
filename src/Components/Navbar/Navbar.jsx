import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./navbar.css";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaRadio } from "react-icons/fa6";
import { MdOutlineConnectingAirports } from "react-icons/md";
import { BsAirplaneFill, BsCart4 } from "react-icons/bs";
import { MdOutlineStoreMallDirectory } from "react-icons/md";
import { MdOutlineSportsHandball } from "react-icons/md";
import { FaPersonDotsFromLine } from "react-icons/fa6";
import { SiAffinitydesigner } from "react-icons/si";
import { CgStudio } from "react-icons/cg";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { PiTelevisionBold } from "react-icons/pi";
import { FaCarSide } from "react-icons/fa";
import { GiNewspaper } from "react-icons/gi";
import { IoMdPaper } from "react-icons/io";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../redux/Slices/AddTocart/AddTocartSlice";

export default function NavBar2() {
  const [navbar, setNavbar] = useState(false);
  const [user, setUser] = useState("");
  const [nouser, setnoUser] = useState(false);
  const cartCount = useSelector(selectCartCount);

  // const { items } = useSelector((state) => state.cart.items);

  // console.log("items",items);

  useEffect(() => {
    const loggedinuser = localStorage.getItem("User");
    if (loggedinuser) {
      setUser(loggedinuser);
      setnoUser(true);
    }
  }, []);

  return (
    <nav className="w-auto text-black sticky">
      <div className="sm:px-0  px-[5%] mx-auto bg-black md:items-center md:flex hh sm:flex sm:justify-between">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <p className="text-white ml-10 name text-5xl">Adifie</p>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 h-248px  rounded-md outline-none z-30"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <FaBars className="text-white text-2xl" />
                ) : (
                  <FaBars className="text-white text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={` pb-3 z-40 mt-0 h-screen sm:h-auto   sm:ml-[10rem] ml-0 md:block md:pb-0 md:mt-0 leading-7 ${
              navbar ? "block z-30" : "hidden z-30"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <div className="w-full ">
                <div className="flex flex-col  sm:flex-row justify-center w-auto ">
                  <Link to="/" className=" items-center">
                    <a className="flex sm:font-bold sm:pb-[26px] sm:mt-[30px] sm:mb-0 sm:text-base text-[18px] font-medium hover:text-red-600 link link-underline link-underline-black  text-white pl-6 pr-6">
                      Home
                    </a>
                  </Link>

                  {/* drop down ++++++++++++++++++++=========== */}
                  <div className="relative group sm:top-[28px] left-[-4px]">
                    <button className="dropbtn sm:my-0 sm:font-bold mr-auto sm:text-base text-[18px] sm:ml-8 font-medium hover:text-red-600 link link-underline link-underline-black text-white sm:pb-[27px] ml-[2px]">
                      Advertisements
                      <i className="fa fa-caret-down ml-2"></i>
                    </button>
                    <div className="dropdown-content pb-10 w-[80vw] sm:w-[60vw] absolute left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-white shadow-lg z-10">
                      <div className="row sm:pl-0 sm:pr-0 pr-[6%]">
                        {/* <!-- First row --> */}
                        <div className="column px-10 py-5 sm:flex sm:flex-row w-full sm:h-[40px] sm:ml-[25px] mb-4 sm:p-5 sm:mb-5">
                          <div className="sm:w-[25%] ">
                            <a
                              className="flex sm:pt-[20px] sm:pb-[10px] link-underline-drop link-underline-black-drop"
                              href="/cinema"
                            >
                              <span className="flex-shrink-0 sm:mt-1">
                                <PiTelevisionSimpleLight className="sm:text-2xl" />
                              </span>
                              <div className="flex flex-col ml-4 ">
                                <span className=" text-left sm:font-medium font-[400] leading-none sm:text-lg text-[14px]">
                                  Cinema
                                </span>

                                {/* <span className="text-left sm:text-sm text-[11px] font-normal text-gray-500 sm:w-[231px] sm:leading-[18.3px] leading-[14.3px] w-[177px] sm:mt-1 mt-2">
                Bill your ads in cinema houses and in movies.
              </span> */}
                              </div>
                            </a>
                          </div>
                          <div className="sm:w-[25%] ">
                            <a
                              className="flex sm:pt-[20px] pt-5 pb-2 sm:pb-[10px] link-underline-drop link-underline-black-drop"
                              href="/digital"
                            >
                              <span className="flex-shrink-0 sm:mt-1">
                                <HiOutlineGlobeAlt className="sm:text-2xl" />
                              </span>
                              <div className="flex flex-col ml-4">
                                <span className="text-left sm:font-medium font-[400] leading-none sm:text-lg text-[14px]">
                                  Digital Ads
                                </span>
                                {/* <span className="text-left sm:text-sm text-[11px] font-normal text-gray-500 sm:w-[231px] sm:leading-[18.3px] leading-[14.3px] w-[177px] sm:mt-1 mt-2">
                We offer ads on different websites and platforms for better marketing.
              </span> */}
                              </div>
                            </a>
                          </div>
                          <div className="sm:w-[25%]">
                            <a
                              className="flex sm:pt-[20px] sm:pb-[10px] link-underline-drop link-underline-black-drop"
                              href="/magazine"
                            >
                              <span className="flex-shrink-0 sm:mt-1">
                                <IoMdPaper className="sm:text-2xl" />
                              </span>
                              <div className="flex flex-col ml-4">
                                <span className="text-left sm:font-medium font-[400] leading-none sm:text-lg text-[14px]">
                                  Magazine
                                </span>
                                {/* <span className="text-left sm:text-sm text-[11px] font-normal text-gray-500 sm:w-[231px] sm:leading-[18.3px] leading-[14.3px] w-[177px] sm:mt-1 mt-2">
                Publish your ads in your favorite magazine with our help.
              </span> */}
                              </div>
                            </a>
                          </div>
                          <div className="sm:w-[25%]">
                            <a
                              className="flex sm:pt-[20px] sm:pb-[10px] link-underline-drop link-underline-black-drop"
                              href="/newspaper"
                            >
                              <span className="flex-shrink-0 sm:mt-1">
                                <GiNewspaper className="sm:text-2xl" />
                              </span>
                              <div className="flex flex-col ml-4">
                                <span className="text-left sm:font-medium font-[400] leading-none sm:text-lg text-[14px]">
                                  Newspaper
                                </span>
                                {/* <span className="text-left sm:text-sm text-[11px] font-normal text-gray-500 sm:w-[231px] sm:leading-[18.3px] leading-[14.3px] w-[177px] sm:mt-1 mt-2">
                Post your ads in different newspapers with our help and make your marketing better.
              </span> */}
                              </div>
                            </a>
                          </div>
                        </div>
                        {/* <!-- Second row --> */}
                        <div className="column px-10 py-5 sm:flex sm:flex-row w-full sm:h-[40px] sm:ml-[25px] sm:p-5 sm:mb-5">
                          <div className="sm:w-[25%]">
                            <a
                              className="flex sm:pt-[20px] sm:pb-[10px] link-underline-drop link-underline-black-drop"
                              href="/Below-the-Line-Marketing"
                            >
                              <span className="flex-shrink-0 sm:mt-1">
                                <FaCarSide className="sm:text-2xl" />
                              </span>
                              <div className="flex flex-col ml-4">
                                <span className="text-left sm:font-medium font-[400] leading-none sm:text-lg text-[14px]">
                                  BTL
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="sm:w-[25%]">
                            <a
                              className="flex sm:pt-[20px] sm:pb-[10px] link-underline-drop link-underline-black-drop"
                              href="/television"
                            >
                              <span className="flex-shrink-0 sm:mt-1">
                                <PiTelevisionBold className="sm:text-2xl" />
                              </span>
                              <div className="flex flex-col ml-4">
                                <span className="text-left sm:font-medium font-[400] leading-none sm:text-lg text-[14px]">
                                  Television
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="sm:w-[25%]">
                            <a
                              className="flex sm:pt-[20px] sm:pb-[10px] link-underline-drop link-underline-black-drop"
                              href="/television"
                            >
                              <span className="flex-shrink-0 sm:mt-1">
                                <FaGlobeAmericas className="sm:text-2xl" />
                              </span>
                              <div className="flex flex-col ml-4">
                                <span className="text-left sm:font-medium font-[400] leading-none sm:text-lg text-[14px]">
                                  Outdoor
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="sm:w-[25%]">
                            <a
                              className="flex sm:pt-[20px] sm:pb-[10px] link-underline-drop link-underline-black-drop"
                              href="/television"
                            >
                              <span className="flex-shrink-0 sm:mt-1">
                                <FaRadio className="sm:text-xl" />
                              </span>
                              <div className="flex flex-col ml-4">
                                <span className="text-left sm:font-medium font-[400] leading-none sm:text-lg text-[14px]">
                                  Radio
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>

                        {/* third row */}
                        <div className="column px-10 py-5 sm:flex sm:flex-row w-full sm:h-[40px] sm:ml-[25px] sm:mt-5 sm:p-5 sm:mb-5">
                          <div className="sm:w-[25%]">
                            <a
                              className="flex sm:pt-[20px] sm:pb-[10px] link-underline-drop link-underline-black-drop"
                              href="/airport"
                            >
                              <span className="flex-shrink-0 ">
                                <MdOutlineConnectingAirports className="sm:text-3xl text-xl" />
                              </span>
                              <div className="flex flex-col ml-4">
                                <span className="text-left sm:font-medium font-[400] leading-none sm:text-lg text-[14px]">
                                  Airport
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="sm:w-[25%]">
                            <a
                              className="flex sm:pt-[20px] sm:pb-[10px] link-underline-drop link-underline-black-drop"
                              href="/malls"
                            >
                              <span className="flex-shrink-0 sm:mt-[2px]">
                                <MdOutlineStoreMallDirectory className="sm:text-3xl" />
                              </span>
                              <div className="flex flex-col ml-4">
                                <span className="text-left sm:font-medium font-[400] leading-none sm:text-lg text-[14px]">
                                  Malls
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="sm:w-[25%]">
                            <a
                              className="flex sm:pt-[20px] sm:pb-[10px] link-underline-drop link-underline-black-drop"
                              href="/radio"
                            >
                              <span className="flex-shrink-0 sm:mt-1">
                                <BsAirplaneFill className="sm:text-2xl" />
                              </span>
                              <div className="flex flex-col ml-4">
                                <span className="text-left sm:font-medium font-[400] leading-none sm:text-lg text-[14px]">
                                  Airplane
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="sm:w-[25%]">
                            <a
                              className="flex sm:pt-[20px] sm:pb-[10px] link-underline-drop link-underline-black-drop"
                              href="/sports"
                            >
                              <span className="flex-shrink-0 sm:mt-1">
                                <MdOutlineSportsHandball className="sm:text-3xl" />
                              </span>
                              <div className="flex flex-col ml-4">
                                <span className="text-left sm:font-medium font-[400] leading-none sm:text-lg text-[14px]">
                                  Sports
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>

                        {/* fourth row */}
                        <div className="column px-10  py-5 sm:flex sm:flex-row w-full sm:h-[40px] sm:ml-[25px] sm:mt-5 sm:p-5 sm:mb-5">
                          <div className="sm:w-[25%]">
                            <a
                              className="flex sm:pt-[20px] sm:pb-[10px] link-underline-drop link-underline-black-drop"
                              href="/influencer"
                            >
                              <span className="flex-shrink-0 sm:mt-0">
                                <FaPersonDotsFromLine className="sm:text-3xl" />
                              </span>
                              <div className="flex flex-col ml-4">
                                <span className="text-left sm:font-medium font-[400] leading-none sm:text-lg text-[14px]">
                                  Influencers
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="sm:w-[25%]">
                            <a
                              className="flex sm:pt-[20px] sm:pb-[10px] link-underline-drop link-underline-black-drop"
                              href="/designers"
                            >
                              <span className="flex-shrink-0 sm:mt-1">
                                <SiAffinitydesigner className="sm:text-2xl" />
                              </span>
                              <div className="flex flex-col ml-4">
                                <span className="text-left sm:font-medium font-[400] leading-none sm:text-lg text-[14px]">
                                  Designers
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="sm:w-[25%]">
                            <a
                              className="flex sm:pt-[20px] sm:pb-[10px] link-underline-drop link-underline-black-drop"
                              href="/developers"
                            >
                              <span className="flex-shrink-0 sm:mt-1">
                                <MdOutlineDeveloperMode className="sm:text-2xl" />
                              </span>
                              <div className="flex flex-col ml-4">
                                <span className="text-left sm:font-medium font-[400] leading-none sm:text-lg text-[14px]">
                                  Developers
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="sm:w-[25%]">
                            <a
                              className="flex sm:pt-[20px] sm:pb-[10px] link-underline-drop link-underline-black-drop"
                              href="/studios"
                            >
                              <span className="flex-shrink-0 sm:mt-1">
                                <CgStudio className="sm:text-2xl" />
                              </span>
                              <div className="flex flex-col ml-4">
                                <span className="text-left sm:font-medium font-[400] leading-none sm:text-lg text-[14px]">
                                  Studios
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* dropdown end  =======================================================  */}

                  <Link to="/about">
                    <a className="flex sm:pb-[26px] font-bold sm:mt-[30px] items-center sm:ml-2  sm:mb-0 sm:text-base text-[18px]  hover:text-red-600 link link-underline link-underline-black  text-white pl-6 pr-6">
                      About
                    </a>
                  </Link>
                  <Link to="/contact">
                    <li className=" ml-1 font-bold sm:pb-[26px] sm:mt-[30px] sm:ml-2  sm:text-base text-[18px] link link-underline hover:text-red-600 link-underline-black  text-white   sm:w-28 sm:text-center ">
                      Contact
                    </li>
                  </Link>
                  {nouser ? (
                    <li className="ml-1 font-bold sm:pb-[26px] sm:mt-[30px] sm:ml-2  sm:text-base text-[18px] link link-underline hover:text-red-600 link-underline-black  text-white   sm:w-28 sm:text-center">
                      {user}
                    </li>
                  ) : (
                    <div className="flex sm:flex-row flex-col">
                      <Link to="/login">
                        <li className=" ml-1 font-bold sm:pb-[26px] sm:mt-[30px] sm:ml-2  sm:text-base text-[18px] link link-underline hover:text-red-600 link-underline-black  text-white   sm:w-28 sm:text-center ">
                          Login
                        </li>
                      </Link>
                      <Link to="/signup">
                        <li className=" ml-1 font-bold sm:pb-[26px] sm:mt-[30px] sm:ml-2  sm:text-base text-[18px] link link-underline hover:text-red-600 link-underline-black  text-white   sm:w-28 sm:text-center ">
                          SignUp
                        </li>
                      </Link>
                    </div>
                  )}
                  <Link to="/add-to-cart">
                    <li className="relative  font-bold sm:pb-[26px] sm:mt-[30px] sm:ml-2  sm:text-base text-[18px] link text-white   ml-6  sm:mr-10 sm:text-center ">
                      <p className="text-2xl relative"><BsCart4  /></p> 
                      <p className="absolute top-[-16px] left-4 font-bold bg-white rounded-full px-2 text-xs text-black leading-none py-1">{cartCount}</p>
                    </li>
                  </Link>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <a
        className=" fixed overflow-hidden  flex items-center justify-center  bg-white   border-red-600  h-10 pr-3 pl-3
          bg-[bubble-gum] rounded-full sm:bottom-[0.2rem] sm:top-auto top-[760px] sm:right-[1px] right-6  mr-4 mb-4
           border border-metal  text-silver hover:bg-bubble-gum z-50"
        href="http://wa.me/"
        target="_blank"
        rel="noreferrer"
      >
        <div className=" rounded-full bg-[#25D366]">
          <i className="fa-brands fa-whatsapp fa-2xl"></i>
        </div>
        <span className="text-sm  p-1 leading-none font-semibold">Chat</span>
      </a>
    </nav>
  );
}
