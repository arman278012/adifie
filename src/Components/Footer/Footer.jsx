import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

export default function Footers() {
  return (
    // HTMLResult Skip Results Iframe
    // EDIT ON

    <div className=" mx-auto bg-black sm:p-0 px-3 py-1">
      <div className="p-5 bg-black rounded-none py-12 mt-5 border-b border-l border-r border-red-400 sm:w-[60vw] mx-auto rounded-b-[80px]">
        <div className="flex flex-col ">
          <h3 className="sm:text-[50px] text-[30px] leading-10 text-white w-full text-center font-bold">
            Subscribe{" "}
            <span className="sm:text-[62px] text-[30px]  font-thin font-sans text-gray-300">
              Newsletter
            </span>
          </h3>
          <div className="text-base text-gray-500 w-full  md:w-2/4 self-center text-center lg:pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>

        <div className="flex flex-row justify-between mt-4 b border-[1px] border-gray-600 rounded-full px-3 py-2 sm:w-[400px] sm:ml-[180px] focus:outline-none">
          <input
            className="px-2 py-2 rounded-2xl sm:w-auto w-[60%] bg-black text-white"
            type="text"
            placeholder="email@email.com"
          />
          <button className=" sm:w-auto w-[32%] px-5 py-2 bg-red-600 rounded-full text-white text-sm ">
            Subscribe
          </button>
        </div>
      </div>
      <footer className="relative pt-8 pb-6">
        <div className="container mx-auto w-[100vw] px-[50px]">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 ">
              <h4 className="text-3xl fonat-semibold text-white">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-white">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex gap-0 justify-center sm:justify-normal">
                <button
                  className="shadow-lg font-normal rounded-md flex bg-gray-500 h-8 w-8 items-center justify-center 
                  align-center outline-none focus:outline-none mr-2 group hover:bg-white transform transition-transform duration-300"
                  type="button"
                >
                  <FaXTwitter className="text-white transform transition-transform duration-300 group-hover:scale-125 group-hover:text-black" />
                </button>
                <button
                  className="  shadow-lg font-normal rounded-md flex bg-gray-500 h-8 w-8 items-center justify-center align-center 
                  outline-none focus:outline-none mr-2 group hover:bg-white"
                  type="button"
                >
                  <FaFacebookF
                    className="text-white transform transition-transform duration-300 group-hover:scale-125
                   group-hover:text-blue-600"
                  />
                </button>
                <button
                  className=" shadow-lg font-normal rounded-md flex bg-gray-500 h-8 w-8 items-center justify-center align-center 
                  outline-none focus:outline-none mr-2 group hover:bg-white"
                  type="button"
                >
                  <FaLinkedinIn
                    className="text-white transform transition-transform duration-300 group-hover:scale-125
                   group-hover:text-blue-400"
                  />
                </button>
                <button
                  className="shadow-lg font-normal flex rounded-md bg-gray-500 h-8 w-8 items-center justify-center align-center 
                  outline-none focus:outline-none mr-2 group hover:bg-white"
                  type="button"
                >
                  <IoLogoInstagram className="text-white transform transition-transform duration-300 group-hover:scale-125
                   group-hover:text-red-800" />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-300 text-sm font-bold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-300 hover:text-gray-600 block pb-2 text-sm"
                        
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-300 hover:text-gray-600  block pb-2 text-sm"
                   
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-300 hover:text-gray-600 block pb-2 text-sm"
                      
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-300 hover:text-gray-600 block pb-2 text-sm"
                       
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-300 text-sm font-bold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-300 hover:text-gray-600 block pb-2 text-sm"
                       
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-300 hover:text-gray-600 block pb-2 text-sm"
               
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-300 hover:text-gray-600 block pb-2 text-sm"
                   
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-300 hover:text-gray-600 block pb-2 text-sm"
                  
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-300 font-semibold py-1">
                Copyright © <span id="get-current-year">2024</span>
                <a
                  href=""
                  className="text-gray-500 hover:text-gray-800"
                  target="_blank"
                />{" "}
                Adifie
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
