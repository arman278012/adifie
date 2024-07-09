import React, { useEffect, useState } from "react";
import NavBar2 from "../../Components/Navbar/Navbar";
import Footers from "../../Components/Footer/Footer";
import { useDispatch } from "react-redux";
import { idstorePush, airportIdPush } from "../../redux/Slices/IdStoreSlice/IdSlice";
import Slider from "../../Components/Slider/Slider";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Loader from "../../Components/Loader/Loader";

const Designers = () => {
    const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors
  const [subCategory, setSubCategory] = useState([]);

  const url_main = import.meta.env.VITE_MAIN;
  const [designersData, setdata] = useState([]);

  const handleDivClick = (id) => {
    dispatch(idstorePush(id));
  };


   // cinema id
   const designer_id = "66851496ed8b10a41ce3064a";
   dispatch(airportIdPush(designer_id));
 
   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch(`${url_main}${designer_id}`, {
           method: "GET",
           headers: {
             "Content-type": "application/json",
             "Access-Control-Allow-Origin": "*",
           },
         });
         if (!response.ok) {
           throw new Error("Failed to fetch data");
         }
         const newData = await response.json();
         setdata(newData.category);
         console.log(designersData);
         setSubCategory(newData.subcategories);
       } catch (error) {
         setError(error);
       } finally {
         setLoading(false);
       }
     };
     fetchData();
   }, []);

   if (loading) {
    return (
      <Loader/>
    );
  } else
  return (
    <>
        {" "}
        <NavBar2 />
        <div>
          <h1 className="sm:text-[32px] text-[22px] text-black font-semibold flex justify-center textShadow-[#fff] text-center sm:mt-5 sm:pt-0 pt-20">
            {designersData?.fullTitle}
          </h1>
          <hr className="sep-3 mt-5" />
          <div className="advertisememnt sm:w-[80vw] w-auto mx-auto sm:mt-10 mt-0">
            {/* sub header */}
            <div className="sub-header flex sm:flex-row flex-col mb-10  rounded-xl">
              <div className="left sm:w-[60vw] w-[100vw] mx-auto">
                <Slider images={designersData.image} />
                {/* different adertisement area  */}
                <Link to="/subpages">
                  {subCategory.map((item) => {
                    return (
                      <div
                        id={item._id}
                        className="card  p-5 flex sm:flex-row flex-col rounded-md bg-gray-100 shadow-lg mt-8 sm:w-auto w-[80vw] mx-auto"
                        onClick={() => handleDivClick(item._id)}
                      >
                        <img
                          className="h-[20vh]  sm:w-[20vw] w-[70vw] bg-cover"
                          src={item.image[0]?.url}
                          alt=""
                        />
                        <div className="ml-8">
                          <h2 className="sm:text-[24px] text-[18px] text-gray-500 font-medium textShadow-[#fff] mt-3">
                            {item.title}
                          </h2>
                          <p className="text-gray-500">
                            {item.totalReach} Monthely Passenger
                          </p>
                          <p className="mt-4 text-[22px]">
                            {" "}
                            <i
                              className="fa fa-tag  text-red-500 mr-3"
                              aria-hidden="true"
                            ></i>{" "}
                            <span>Price ? </span> On Request
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </Link>
              </div>
              <div className="right sm:w-[40vw]  mx-auto p-10 bg-black sm:mt-3 mt-10 rounded-3xl h-auto sm:ml-5">
                <h1 className="text-gray-200 sm:text-[18px] text-[16px]">
                  About Advertising in {designersData?.title}.
                </h1>
                <p className="text-gray-400 mt-3">
                  {designersData?.shortDescription}
                </p>
                <p className="text-gray-500 text-xl mt-5">
                  {" "}
                  <i className="fa-regular fa-calendar mr-2"></i>{" "}
                  {new Date(designersData?.createdAt).toLocaleString()}{" "}
                </p>
                <div className="mt-6">
                  <div className="border border-l-8 border-red-500 p-4 ">
                    {designersData.facts?.map((item, index) => (
                      <li className="text-white" key={index}>
                        {item.fact}
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="log_discription w-[80vw] mx-auto sm:text-xl text-lg text-justify mb-10 mt-10">
            {<p>{parse(designersData?.longDescription)}</p>}
          </div>
          <Footers />
        </div>
      </>
  )
}

export default Designers
