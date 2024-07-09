import React from 'react'
import './PricePlans.css'

const PricePlans = () => {
    return (
        <div className='  bg-[#e5e7eb]'>

            <div className='max-w-7xl mx-auto flex sm:flex-row flex-col gap-10 p-10'>

                <div className='flex sm:w-[33%] w-[100%] flex-col gap-5 bg-white justify-center items-center shadow-2xl p-5'>
                    <div>
                        <img src="price1.jpg" alt=""
                            className='w-[200px]'
                        />
                    </div>
                    <div>
                        <p className='font-bold text-[40px] text-[#676363]'>Basic Plan</p>
                        <p className='font-bold text-[40px] text-[#676363]'>$100.00</p>
                    </div>
                    <div className='h-[1px] w-[200px] bg-gray-300'></div>
                    <div>
                        <p className='text-[#676363]'>Web Site Analysis</p>
                        <p className='text-[#676363]'>See Job Posting Stat</p>
                        <p className='text-[#676363]'>Post 1 Job</p>
                        <p className='text-[#676363]'>Edit Your Job Listings</p>
                    </div>
                    <div>
                        <button className="button text-white rounded-xl w-[100px] h-[40px] bg-blue-500 flex justify-center items-center font-bold hover:animation-move-around">
                            More Info
                        </button>
                    </div>
                </div>

                <div className='flex sm:w-[33%] w-[100%] flex-col gap-5 bg-white justify-center items-center shadow-2xl p-5'>
                    <div>
                        <img src="price1.jpg" alt=""
                            className='w-[200px]'
                        />
                    </div>
                    <div>
                        <p className='font-bold text-[40px] text-[#676363]'>Professional</p>
                        <p className='font-bold text-[40px] text-[#676363]'>$135.00</p>
                    </div>
                    <div className='h-[1px] w-[200px] bg-gray-300'></div>
                    <div>
                        <p className='text-[#676363]'>Web Site Analysis</p>
                        <p className='text-[#676363]'>See Job Posting Stat</p>
                        <p className='text-[#676363]'>Post 1 Job</p>
                        <p className='text-[#676363]'>Edit Your Job Listings</p>
                    </div>
                    <div>
                        <button className="text-white rounded-xl w-[100px] h-[40px] bg-blue-500 flex 
                        justify-center items-center font-bold button">
                            More Info
                        </button>
                    </div>
                </div>

                <div className='flex sm:w-[33%] w-[100%] flex-col gap-5 bg-white justify-center items-center shadow-2xl p-5'>
                    <div>
                        <img src="price1.jpg" alt=""
                            className='w-[200px]'
                        />
                    </div>
                    <div>
                        <p className='font-bold text-[40px] text-[#676363]'>Business</p>
                        <p className='font-bold text-[40px] text-[#676363]'>$160.00</p>
                    </div>
                    <div className='h-[1px] w-[200px] bg-gray-300'></div>
                    <div>
                        <p className='text-[#676363]'>Web Site Analysis</p>
                        <p className='text-[#676363]'>See Job Posting Stat</p>
                        <p className='text-[#676363]'>Post 1 Job</p>
                        <p className='text-[#676363]'>Edit Your Job Listings</p>
                    </div>
                    <div>
                        <button className="button text-white rounded-xl w-[100px] h-[40px] bg-blue-500 flex justify-center items-center font-bold hover:animation-move-around">
                            More Info
                        </button>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default PricePlans