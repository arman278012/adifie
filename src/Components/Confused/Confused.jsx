
const Confused = () => {
    return (
        <div className="w-[85vw] mx-auto flex sm:flex-row flex-col sm:mt-0 mt-10">
            <div className="left sm:flex-col flex-row my-auto justify-center align-middle ">
                <h2 className="sm:text-[32px] text-[22px] font-bold text-center">Confused ?</h2>
                <h2 className="sm:text-[28px] text-[18px] font-semibold text-center">We can help you plan the perfect campaign!</h2>
                <p className="mb-10 text-[16px] sm:text-[24px] font-semibold text-center">Connect with us to find, plan and place your next promotion.</p>
                <div className="sm:w-[30vw] w-auto mx-auto flex justify-center">
                    <a href="#_" className="mt-5 relative px-5 py-4 font-medium text-white group">
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-red-700 group-hover:bg-red-500 group-hover:skew-x-12"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-red-500 group-hover:bg-red-700 group-hover:-skew-x-12"></span>
                        <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-red-600 -rotate-12"></span>
                        <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-red-400 -rotate-12"></span>
                        <span className="relative font-medium">Consult About Advertisements</span>
                    </a>
                </div>
            </div>
            <div className="right ">
                <img className="sm:h-[460px]" src="image.png" alt="thinking" />
            </div>
        </div>
    )
}

export default Confused