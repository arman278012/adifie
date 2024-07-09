import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
import { ImCheckmark } from "react-icons/im";

const MarketingStratigies = () => {
    return (
        <div className='bg-white'>
            <div className='max-w-7xl mx-auto flex sm:flex-row flex-col gap-10 p-10 '>
            
                <div className='sm:w-[50%]'>
                    <img src="photo4.jpg" alt=""
                        className='w-[500px]'
                    />
                </div>

                <div className='sm:w-[50%] w-full flex flex-col gap-10'>
                    <p className='font-bold text-gray-500'>WHAT WE OFFER</p>
                    <div className='sm:leading-[55px] leading-[45px]'>
                        <p className='font-bold sm:text-[50px] text-[35px]'>Marketing</p>
                        <p className='font-bold sm:text-[50px] text-[35px]'>Strategies And</p>
                        <p className='font-bold sm:text-[50px] text-[35px]'>Advertising</p>
                    </div>

                    <div>
                        <p className=' text-gray-400'>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-5'>
                            <ImCheckmark className='mt-[6px] font-bold text-[#397cf2]' />
                            <p className='text-xl font-bold'>Visitor Conversion Rate</p>
                        </div>

                        <div className='flex gap-5'>
                            <ImCheckmark className='mt-[6px] font-bold text-[#397cf2]' />
                            <p className='text-xl font-bold'>Keyword Analysis</p>
                        </div>

                        <div className='flex gap-5'>
                            <ImCheckmark className='mt-[6px] font-bold text-[#397cf2]' />
                            <p className='text-xl font-bold'>Web Site Optimization</p>
                        </div>
                    </div>

                    <div>
                        <button className="button text-white rounded-xl w-[200px] p-4 bg-blue-500 flex justify-center items-center font-bold hover:animation-move-around">
                            More About Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketingStratigies