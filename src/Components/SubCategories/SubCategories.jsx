import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../Slider/Slider";
import NavBar2 from "../Navbar/Navbar";
import Footers from "../Footer/Footer";
import parse from "html-react-parser";
import axios from "axios";
import { MdError } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdBasket } from "react-icons/io";
import Leads from "../Leads/Lead";
import { addToCart } from "../../redux/Slices/AddTocart/AddTocartSlice"; // Adjust the path as needed
import Loader from "../Loader/Loader";

const SubCategories = () => {
  const ids = useSelector((state) => state.idstore.id);
  const ids2 = useSelector((state) => state.airportId.id2);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [subCategory, setSubCategory] = useState([]);
  const dispatch = useDispatch();

  const url_main = import.meta.env.VITE_MAIN;
  const url_sub = import.meta.env.VITE_SUB;
  const [CinemaData, setData] = useState([]);
  const [getAds, setGetAds] = useState([]);

  const getIdFromArray = (ids) => {
    if (ids?.length === 0) {
      return [0];
    } else if (ids?.length === 1) {
      return ids[0];
    } else {
      return ids[ids?.length - 1];
    }
  };
  const getIdFromAirport = (ids) => {
    if (ids?.length === 0) {
      return null;
    } else if (ids?.length === 1) {
      return ids[0];
    } else {
      return ids[ids?.length - 1];
    }
  };

  const airportId = getIdFromAirport(ids2);
  const selectedId = getIdFromArray(ids);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${url_main}${airportId}/subcategory/${selectedId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const newData = await response.json();
        setData(newData);
      } catch (error) {
        setError(error.message || "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url_main, airportId, selectedId]);

  const getAllAdvertisement = async () => {
    try {
      const response = await axios.get(
        `https://api.assetorix.com:5500/adifie/listing/subcategory/${selectedId}/advertisement`
      );
      setGetAds(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url_sub}${selectedId}/advertisement`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const newData = await response.json();
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        setSubCategory(newData.subcategories);
      } catch (error) {
        setError(error.message || "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    getAllAdvertisement();
  }, [url_sub, selectedId]);

  const handleAddToCart = (ad) => {
    dispatch(
      addToCart({
        id: ad._id,
        title: ad.fullTitle,
        price: ad.price,
        // Add other necessary fields
      })
    );
  };
  if(loading){
    return(
      <Loader/>
    )
  }

  return (
    <>
      <NavBar2 />
      <div>
        <h1 className="sm:text-[32px] text-[22px] text-black font-semibold flex justify-center textShadow-[#fff] text-center sm:mt-5 sm:pt-0 pt-20 sm:px-0 px-2">
          {loading ? "Loading..." : CinemaData.fullTitle}
        </h1>
        <hr className="sep-3 mt-5" />
        <div className="advertisememnt sm:w-[80vw] w-auto mx-auto sm:mt-10 mt-0">
          <div className="sub-header flex sm:flex-row flex-col mb-10 rounded-xl">
            <div className="left sm:w-[60vw] w-[100vw] mx-auto">
              {!loading && <Slider images={CinemaData?.image} />}
              <p className="font-bold text-3xl text-center mt-10">
                Advertisement Types
              </p>
              <div className="flex flex-col sm:w-auto w-[90vw] mx-auto justify-end mb-10">
                {getAds?.map((ad) => {
                  const currencySymbol =
                    ad.currency === "INR"
                      ? "₹"
                      : ad.currency === "EUR"
                      ? "€"
                      : ad.currency === "USD"
                      ? "$"
                      : "";
                  return (
                    <div className="top-choice flex flex-col gap-3 relative border p-5" key={ad._id}>
                      <div className="image flex justify-center">
                        <div className="sm:w-[100%] w-[100%] justify-center items-center ">
                          {!loading && <Slider images={ad?.image} />}
                        </div>
                      </div>
                      <div className="ribbon-2 absolute text-white font-bold">
                        POPULAR
                      </div>
                      <p className="font-bold text-[#2f2c44] text-xl">
                        {ad.fullTitle}
                      </p>
                      <p className="font-semibold text-[#2f2c44] text-sm">
                        {ad.shortDescription}
                      </p>
                      <div className="w-full h-[1px] bg-gray-400 mt-2 mb-2"></div>
                      <div className="flex justify-between">
                        <div className="flex gap-1">
                          <MdError className="mt-1 text-green-500" />
                          <p className="font-semibold">Adify Offer</p>
                        </div>
                        <div>
                          <p className="font-semibold">
                            {currencySymbol} {ad?.price} {ad?.pricePostFix}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex gap-2 border border-[#4e3bc9] p-3 h-[40px] rounded-lg">
                          <IoEyeOutline className="mt-[1px] text-[#4e3bc9]" />
                          <button
                            onClick={() =>
                              navigate(
                                `/checkout/${ad._id}`
                              )
                            }
                            className="text-[12px] font-bold text-[#4e3bc9]"
                          >
                            EXECUTION DETAILS
                          </button>
                        </div>
                        <div className="flex gap-2 bg-[#c93b3b] h-[40px] justify-center items-center p-3 rounded-lg">
                          <IoMdBasket className="mt-[1px] text-white" />
                          <button
                            onClick={() => handleAddToCart(ad)}
                            className="text-[12px] font-bold text-white"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {subCategory?.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="card p-5 flex sm:flex-row flex-col rounded-md bg-gray-100 shadow-lg mt-8 sm:w-auto w-[80vw] mx-auto"
                  >
                    <img
                      className="h-[20vh] sm:w-[20vw] w-[70vw] bg-cover"
                      src={item.image[0]?.url}
                      alt=""
                    />
                    <div className="ml-8">
                      <h2 className="sm:text-[24px] text-[18px] text-gray-500 font-medium textShadow-[#fff] mt-3">
                        {item.title}
                      </h2>
                      <p className="text-gray-500">
                        {item.totalReach} Monthly Passenger
                      </p>
                      <p className="mt-4 text-[22px]">
                        <i
                          className="fa fa-tag text-red-500 mr-3"
                          aria-hidden="true"
                        ></i>{" "}
                        <span>Price ? </span> On Request
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="right sm:w-[40vw] mx-auto p-10 bg-black sm:mt-3 mt-10 rounded-3xl h-auto sm:ml-5">
              <h1 className="text-gray-200 sm:text-[18px] text-[16px]">
                About Advertising in {CinemaData.title}.
              </h1>
              <p className="text-gray-400 mt-3">
                {CinemaData.shortDescription}
              </p>
              <Leads type={"SUBCATEGORY"} typeID={CinemaData?._id} />
              <p className="text-white text-xl mt-5">
                <i className="fa-regular fa-calendar mr-2"></i> Extensive Ad
                Visibility {CinemaData.totalReach}
              </p>
              <div className="mt-6">
                <div className="border border-l-8 border-red-500 p-4">
                  {CinemaData.facts?.map((item, index) => (
                    <li className="text-white" key={index}>
                      {item.fact}
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="log_description w-[80vw] mx-auto sm:text-xl text-lg text-justify mb-10 mt-10">
          {loading
            ? "Loading..."
            : parse(`<p>${CinemaData.longDescription}</p>`)}
        </div>
        <Footers />
      </div>
    </>
  );
};

export default SubCategories;
