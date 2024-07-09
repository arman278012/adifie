import React, { useEffect, useState } from 'react'
import NavBar2 from '../Navbar/Navbar'
import { useParams } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';
import { MdOutlineErrorOutline } from "react-icons/md";
import axios from 'axios';
import Slider from '../Slider/Slider';
import Leads from '../Leads/Lead';
import Footers from '../Footer/Footer';
import { useSelector } from 'react-redux';

const SubAdetails = () => {

    const { aid } = useParams();
    const [adDetails, setAdDetails] = useState({})
    const [loading, setLoading] = useState(true);

    const items = useSelector((state) => state.cart.items);
    console.log("items", items);

    console.log(aid); // This should log the correct IDs

    const getDetails = async () => {
        try {
            const response = await axios.get(`https://api.assetorix.com:5500/adifie/listing/advertisement/${aid}`)
            setAdDetails(response.data)
            console.log(adDetails)
            setLoading(false)
        }
        catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getDetails()
    }, [])

    const currencySymbol = adDetails.currency === "INR" ? "₹" : adDetails.currency === "EUR" ? "€" : adDetails.currency === "USD" ? "$" : ""

    return (
        <div>
            <NavBar2 />
            <div className='max-w-6xl mx-auto flex justify-center gap-20 p-20'>

                <div>
                    <p className='font-semibold mb-10 text-xl text-[#172b4d]'>{adDetails.fullTitle}</p>
                    <div className='w-[400px] flex-col h-[400px] border border-gray-400 flex justify-center items-center'>
                        {
                            !loading &&
                            <Slider images={adDetails?.image} />
                        }

                        <div className='flex gap-4'>

                        </div>
                    </div>
                </div>

                <div className='w-[100%] flex flex-col gap-10'>

                    <div className='last flex gap-5 w-[100%]'>
                        <div className='flex w-max gap-2 border rounded-md py-4 px-4 justify-center relative shadow-lg'>
                            <p className='text-xl text-[#4e3bc9] font-bold'>{currencySymbol}
                                {
                                    adDetails.price > adDetails.salePrice ? adDetails.salePrice : adDetails.price
                                }
                            </p>
                            <p className='text-xl text-[red] font-bold line-through'>{adDetails.price}</p>
                            <p className='text-xl text-[gray] font-bold'>{adDetails.pricePostFix}</p>
                        </div>

                    </div>

                    <div className='2nd-upper'>
                        <div className='flex gap-2'>
                            <MdOutlineErrorOutline className='mt-[-1px] text-[30px] text-blue-500' />
                            <p className='text-sm font-bold'>{adDetails.shortDescription}</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3'>
                        {
                            adDetails?.facts?.map((fact) => (
                                <div className='upper flex gap-2'>
                                    <div className='w-full shadow-md px-10 py-2'>
                                        <p className='text-center font-bold text-xl'>{fact.title}</p>
                                        <p className='text-center font-semibold'>{fact.value}</p>
                                        {/* <div className='bg-gradient-to-b from-white via-green-500 to-white h-[2px] w-full'></div> */}
                                    </div>
                                </div>
                            ))
                        }
                        {/* <div className='bg-gradient-to-b from-white via-green-500 to-white h-[70px] w-[7px]'></div> */}
                    </div>

                </div>

            </div >
            <div className='sm:w-[50%] w-[100%] mx-auto'>
            <Leads type = {"ADVERTISEMENTTYPE"}  typeID = {adDetails._id}/>
            </div>
            <Footers/>
        </div>
    )
}

export default SubAdetails