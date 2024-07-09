
const Business = () => {
  return (
    <div className="bg-gray-200 sm:w-[85vw] w-auto mx-auto mb-20">
      <h1 className="sm:text-[32px] text-[26px] font-semibold text-black text-center sm:px-0 px-2">
        <span className="text-[#dc2626]">Super Charge</span>  Your Business <br /> with our ads</h1>
      <div className="flex sm:flex-row sm:gap-0 gap-10 flex-col justify-between align-middle md:w-[83vw] sm:w-[100vw] w-[100vw] mx-auto mt-10">
        <div className="banner1 flex flex-col w-auto sm:w-80 sm:mr-8">
          <div className="up rounded-t-full sm:mb-2 w-[-webkit-fill-available !important]">
            <img className="bg-cover rounded-t-full sm:h-[50vh] h-[350px] mx-auto" src="./add1.jpg" alt="ads 1" />
          </div>
          <div className="bottom rounded-lg sm:p-8 p-4 bg-none sm:bg-white w-[90vw] sm:w-auto mx-auto">
            <h2 className="font-semibold sm:text-[16px] text-[14px] text-black">Exposure Express</h2>
            <p className="sm:text-[14px] text-[12px] text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam exercitationem nisi ipsa architecto eius illum?</p>
            <p>Read more</p>
          </div>
        </div>

        <div className="banner1 flex flex-col w-auto sm:w-80 sm:mr-8">
          <div className="up rounded-t-full sm:mb-2 w-[-webkit-fill-available !important]">
            <img className="bg-cover rounded-t-full sm:h-[50vh] h-[350px] mx-auto" src="./ads3.jpg" alt="ads 1" />
          </div>
          <div className="bottom rounded-lg sm:p-8 p-4 bg-none sm:bg-white w-[90vw] sm:w-auto mx-auto">
            <h2 className="font-semibold sm:text-[16px] text-[14px] text-black">Exposure Express</h2>
            <p className="sm:text-[14px] text-[12px] text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam exercitationem nisi ipsa architecto eius illum?</p>
            <p>Read more</p>
          </div>
        </div>

        <div className="banner1 flex flex-col w-auto sm:w-80 sm:mr-8">
          <div className="up rounded-t-full sm:mb-2 w-[-webkit-fill-available !important]">
            <img className="bg-cover rounded-t-full sm:h-[50vh] h-[350px] mx-auto" src="./ads2.jpg" alt="ads 1" />
          </div>
          <div className="bottom rounded-lg sm:p-8 p-4 bg-none sm:bg-white w-[90vw] sm:w-auto mx-auto">
            <h2 className="font-semibold sm:text-[16px] text-[14px] text-black">Exposure Express</h2>
            <p className="sm:text-[14px] text-[12px] text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam exercitationem nisi ipsa architecto eius illum?</p>
            <p>Read more</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Business