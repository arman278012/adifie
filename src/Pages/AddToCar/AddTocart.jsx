import React from "react";
import { useSelector } from "react-redux";
import NavBar2 from "../../Components/Navbar/Navbar";
import Footers from "../../Components/Footer/Footer";

const AddTocart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <NavBar2 />
      <div className="w-[90vw] mx-auto">
        <h2 className="text-center my-10 sm:text-4xl text-xl font-bold">
          <span className="text-red-600">Items</span> in Cart
        </h2>
        {cartItems?.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          <div className="border shadow-md w-[40vw] p-10 rounded-md">
            <ul>
              {cartItems?.map((item) => (
                <li key={item?.id}>
                  <p className="font-semibold text-lg">{item?.title}</p>
                  <div className="flex justify-start align-middle my-4">
                  <p className="font-semibold text-gray-500 mr-4">
                      Quantity: 
                    </p>
                    <input className="border p-2 rounded-md" type="number" contentEditable = "true" value={item?.quantity} />
                   
                  </div>
                  <p className="font-semibold text-gray-500">
                    Price: {item?.price}
                  </p>
                  <button id= {item?.id} className="border rounded-full px-3 py-2 bg-red-500 text-white font-bold  mt-5 shadow-md">Generate Invoice</button>
                </li>
                
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footers />
    </div>
  );
};

export default AddTocart;
