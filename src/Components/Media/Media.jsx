import { Link, NavLink } from "react-router-dom";
import { MdOutlineLocalMall } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const Media = () => {
  return (
    <div className="w-[85vw] mx-auto pt-[10vh] pb-[10vh]">
      <h1 className="text-[22px] sm:text-[32px] font-semibold mb-8 text-center">
       <span className="text-[#dc2626]">Browse</span>  Media by Genre
      </h1>
      <div className=" grid grid-cols-2 sm:grid-cols-6 gap-4">
        <NavLink to="/airport">
          <div className="max-w-sm mx-auto bg-[#000] shadow-lg rounded-lg overflow-hidden sm:w-[13vw] hover:shadow-xl transition-all duration-300 group hover:scale-100">
            <div className="flex flex-col items-center justify-center p-6 group">
              <div className="text-6xl text-red-500 mb-4">
                <img
                  src="airport.png"
                  alt=""
                  className="w-[80px] group-hover:scale-125 transition-all duration-300"
                />
              </div>
              <div className="text-white text-md font-semibold uppercase">Airport</div>
            </div>
          </div>
        </NavLink>

        <NavLink to='malls'>
          <div className="max-w-sm mx-auto bg-[#000] shadow-lg rounded-lg overflow-hidden sm:w-[13vw] hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col items-center justify-center p-6">
              <div className="text-6xl text-red-500 mb-4">
                <img
                  src="shopping-mall.png"
                  alt=""
                  className="w-[80px] group-hover:scale-125 transition-all duration-300"
                />
              </div>
              <div className="text-white text-md font-semibold uppercase">Malls</div>
            </div>
          </div>
        </NavLink>

        <NavLink to="cinema">
          <div className="max-w-sm mx-auto bg-[#000] shadow-lg rounded-lg overflow-hidden sm:w-[13vw] hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col items-center justify-center p-6">
              <div className="text-6xl text-red-500 mb-4">
                <img
                  src="cinema.png"
                  alt=""
                  className="w-[80px] group-hover:scale-125 transition-all duration-300"
                />
              </div>
              <div className="text-white text-md font-semibold uppercase">Cinema</div>
            </div>
          </div>
        </NavLink>

        <NavLink to="digital">
          <div className="max-w-sm mx-auto bg-[#000] shadow-lg rounded-lg overflow-hidden sm:w-[13vw] group">
            <div className="flex flex-col items-center justify-center p-6">
              <div className="text-6xl text-red-500 mb-4">
                <img
                  src="digital.png"
                  alt=""
                  className="w-[80px] group-hover:scale-125 transition-all duration-300"
                />
              </div>
              <div className="text-white text-md font-semibold uppercase">Digital</div>
            </div>
          </div>
        </NavLink>

        <NavLink to="magazine">
          <div className="max-w-sm mx-auto bg-[#000] shadow-lg rounded-lg overflow-hidden sm:w-[13vw] hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col items-center justify-center p-6">
              <div className="text-6xl text-red-500 mb-4">
                <img
                  src="magazine.png"
                  alt=""
                  className="w-[80px] group-hover:scale-125 transition-all duration-300"
                />
              </div>
              <div className="text-white text-md font-semibold uppercase">Magazine</div>
            </div>
          </div>
        </NavLink>

        <NavLink to="newspaper">
          <div className="max-w-sm mx-auto bg-[#000] shadow-lg rounded-lg overflow-hidden sm:w-[13vw] hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col items-center justify-center p-6">
              <div className="text-6xl text-red-500 mb-4">
                <img
                  src="newspaper.png"
                  alt=""
                  className="w-[80px] group-hover:scale-125 transition-all duration-300"
                />
              </div>
              <div className="text-white text-md font-semibold uppercase">Newspaper</div>
            </div>
          </div>
        </NavLink>

        <NavLink to="airplane">
          <div className="max-w-sm mx-auto bg-[#000] shadow-lg rounded-lg overflow-hidden sm:w-[13vw] hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col items-center justify-center p-6">
              <div className="text-6xl text-red-500 mb-4">
                <img
                  src="aeroplane.png"
                  alt=""
                  className="w-[80px] group-hover:scale-125 transition-all duration-300"
                />
              </div>
              <div className="text-white text-md font-semibold uppercase">Aeroplane</div>
            </div>
          </div>
        </NavLink>

        <NavLink to="Below-the-Line-Marketing">
          <div className="max-w-sm mx-auto bg-[#000] shadow-lg rounded-lg overflow-hidden sm:w-[13vw] hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col items-center justify-center p-6">
              <div className="text-6xl text-red-500 mb-4">
                <img
                  src="btl.png"
                  alt=""
                  className="w-[80px] group-hover:scale-125 transition-all duration-300"
                />
              </div>
              <div className="text-white text-md font-semibold uppercase">BTL</div>
            </div>
          </div>
        </NavLink>

        <NavLink to="outdoor">
          <div className="max-w-sm mx-auto bg-[#000] shadow-lg rounded-lg overflow-hidden sm:w-[13vw] hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col items-center justify-center p-6">
              <div className="text-6xl text-red-500 mb-4">
                <img
                  src="outdoor.png"
                  alt=""
                  className="w-[80px] group-hover:scale-125 transition-all duration-300"
                />
              </div>
              <div className="text-white text-md font-semibold uppercase">Outdoor</div>
            </div>
          </div>
        </NavLink>

        <NavLink to="radio">
          <div className="max-w-sm mx-auto bg-[#000] shadow-lg rounded-lg overflow-hidden sm:w-[13vw] hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col items-center justify-center p-6">
              <div className="text-6xl text-red-500 mb-4">
                <img
                  src="radio.png"
                  alt=""
                  className="w-[80px] group-hover:scale-125 transition-all duration-300"
                />
              </div>
              <div className="text-white text-md font-semibold uppercase">Radio</div>
            </div>
          </div>
        </NavLink>

        <NavLink to="sports">
          <div className="max-w-sm mx-auto bg-[#000] shadow-lg rounded-lg overflow-hidden sm:w-[13vw] hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col items-center justify-center p-6">
              <div className="text-6xl text-red-500 mb-4">
                <img
                  src="sport.webp"
                  alt=""
                  className="w-[80px] group-hover:scale-125 transition-all duration-300"
                />
              </div>
              <div className="text-white text-md font-semibold uppercase">Sports</div>
            </div>
          </div>
        </NavLink>

        <NavLink to="television">
          <div className="max-w-sm mx-auto bg-[#000] shadow-lg rounded-lg overflow-hidden sm:w-[13vw] hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col items-center justify-center p-6">
              <div className="text-6xl text-red-500 mb-4">
                <img
                  src="television.png"
                  alt=""
                  className="w-[80px] group-hover:scale-125 transition-all duration-300"
                />
              </div>
              <div className="text-white text-md font-semibold uppercase">Television</div>
            </div>
          </div>
        </NavLink>

        <NavLink to="influencer">
          <div className="max-w-sm mx-auto bg-[#000] shadow-lg rounded-lg overflow-hidden sm:w-[13vw] hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col items-center justify-center p-6">
              <div className=" text-red-500 mb-4">
                <img
                  src="infl.webp"
                  alt=""
                  className="w-[80px] group-hover:scale-125 transition-all duration-300"
                />
              </div>
              <div className="text-white text-md font-semibold uppercase">
                Influencers
              </div>
            </div>
          </div>
        </NavLink>

        <NavLink to="developers">
          <div className="max-w-sm mx-auto bg-[#000] shadow-lg rounded-lg overflow-hidden sm:w-[13vw] hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col items-center justify-center p-6">
              <div className=" text-red-500 mb-4">
                <img
                  src="developers.webp"
                  alt=""
                  className="w-[80px] group-hover:scale-125 transition-all duration-300"
                />
              </div>
              <div className="text-white text-md font-semibold uppercase">Developers</div>
            </div>
          </div>
        </NavLink>

        <NavLink to="designers">
          <div
            className="max-w-sm mx-auto bg-[#000] shadow-lg rounded-lg overflow-hidden sm:w-[13vw] 
          hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex flex-col items-center justify-center p-6">
              <div className=" text-red-500 mb-4">
                <img
                  src="designers.webp"
                  alt=""
                  className="w-[80px] group-hover:scale-125 transition-all duration-300"
                />
              </div>
              <div className="text-white text-md font-semibold uppercase">Designers</div>
            </div>
          </div>
        </NavLink>

        <NavLink to="studios">
          <div className="max-w-sm mx-auto bg-[#000] shadow-lg rounded-lg overflow-hidden sm:w-[13vw] hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col items-center justify-center p-6">
              <div className=" text-red-500 mb-4">
                <img
                  src="studio.webp"
                  alt=""
                  className="w-[80px] group-hover:scale-125 transition-all duration-300"
                />
              </div>
              <div className="text-white text-md font-semibold uppercase">Studios</div>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Media;

{
  /* <Link to="/airport">
          <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[95px] h-[95px] sm:py-10 sm:px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
            <i className="fa-solid fa-plane-departure fa-xl sm:fa-2xl mt-3"></i>
            <p className="mt-2">Airport</p>
          </div>
        </Link>
        <Link to="/cinema">
          <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[95px] h-[95px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
            <i className="fa-solid fa-film fa-xl sm:fa-2xl mt-3"></i>
            <p className="mt-2">Cinema</p>
          </div>
        </Link>
        <Link to="/digital">
          <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[95px] h-[95px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
            <i className="fa-solid fa-tv fa-xl sm:fa-2xl mt-3"></i>
            <p className="mt-2">Digital</p>
          </div>
        </Link>
        <Link to="/magazine">
          <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[95px] h-[95px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
            <i className="fa-solid fa-book fa-xl sm:fa-2xl mt-3"></i>
            <p className="mt-2">Magazine</p>
          </div>
        </Link>
        <Link to="/newspaper">
          <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[95px] h-[95px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
            <i className="fa-solid fa-newspaper fa-xl sm:fa-2xl mt-3"></i>
            <p className="mt-2 sm:text-[16px] text-[14px]">Newspaper</p>
          </div>
        </Link>
        <Link to="/airplane">
          <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[95px] h-[95px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
            <i className="fa-solid fa-plane-departure fa-xl sm:fa-2xl mt-3"></i>
            <p className="mt-2 ">Airplane</p>
          </div>
        </Link>
        <Link to="/Below-the-Line-Marketing">
          <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[95px] h-[95px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
            <i className="fa-solid fa-car fa-xl sm:fa-2xl mt-3"></i>
            <p className="mt-2">BTL</p>
          </div>
        </Link>
        <Link to="/outdoor">
          <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[95px] h-[95px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
            <i className="fa-solid fa-earth-america fa-xl sm:fa-2xl mt-3"></i>
            <p className="mt-2">Outdoor</p>
          </div>
        </Link>
        <Link to="/radio">
          <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[95px] h-[95px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
            <i className="fa-solid fa-radio fa-xl sm:fa-2xl mt-3"></i>
            <p className="mt-2">Radio</p>
          </div>
        </Link>
        <Link to="/sports">
          <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[95px] h-[95px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
            <i className="fa-solid fa-person-running fa-xl sm:fa-2xl mt-3"></i>
            <p className="mt-2">Sports</p>
          </div>
        </Link>
        <Link to="/television">
          <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[95px] h-[95px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
            <i className="fa-solid fa-tv fa-xl sm:fa-2xl mt-3"></i>
            <p className="mt-2">Television</p>
          </div>
        </Link>
        <Link to="/malls">
          <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[95px] h-[95px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
            <p>
            </p>
            <img src="mall-adify.mp4" alt="" className="w-[20px]"/>
            <p className="mt-2">Malls</p>
          </div>
        </Link>
        <Link to="/influencers">
          <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[95px] h-[95px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
            <i className="fa-brands fa-dhl fa-xl sm:fa-2xl mt-3"></i>
            <p className="mt-2">Influencers</p>
          </div>
        </Link>
        <Link to="/developers">
          <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[95px] h-[95px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
            <i className="fa-brands fa-dhl fa-xl sm:fa-2xl mt-3"></i>
            <p className="mt-2">Developers</p>
          </div>
        </Link>
        <Link to="/designers">
          <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[95px] h-[95px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
            <i className="fa-brands fa-dhl fa-xl sm:fa-2xl mt-3"></i>
            <p className="mt-2">Designers</p>
          </div>
        </Link>
        <Link to="/studios">
          <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[95px] h-[95px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
            <i className="fa-brands fa-dhl fa-xl sm:fa-2xl mt-3"></i>
            <p className="mt-2">Studios</p>
          </div>
        </Link> */
}
