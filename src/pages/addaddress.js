import React from "react";
import { useState } from "react";
import { MdLocalShipping } from "react-icons/md";

import { useStateContext } from "@/context/StateContext";
const Addaddress = () => {
  //data
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const { cartItems, totalPrice, placeOrder } = useStateContext();
  const shippingFee = totalPrice / 2;
  const paymentOptions = ["payment after shipping", "online payment"];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullName, phoneNumber, province, district, streetAddress);
    placeOrder({
      fullName,
      phoneNumber,
      province,
      district,
      streetAddress,
    });
  };
  return (
    <div className="pt-12 mb-[100px]">
      <form onSubmit={handleSubmit}>
        <div className="flex w-[1200px] mx-auto">
          <div className="md:flex bg-gray-100 shadow-lg rounded-lg">
            <div>
              <h2
                style={{
                  fontSize: "30px",
                }}
                className="text-red-500 font-medium px-[20px]"
              >
                Delivery Address Information
              </h2>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name"
                  style={{
                    width: "300px",
                    margin: "8px",
                    padding: "10px",
                    fontSize: "30px",
                  }}
                />
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Phone Number"
                  style={{
                    width: "300px",
                    margin: "8px",
                    padding: "10px",
                    fontSize: "30px",
                  }}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="text"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  placeholder="Province/City"
                  style={{
                    width: "300px",
                    margin: "8px",
                    padding: "10px",
                    fontSize: "30px",
                  }}
                />
                <input
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  placeholder="District"
                  style={{
                    width: "300px",
                    margin: "8px",
                    padding: "10px",
                    fontSize: "30px",
                  }}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="text"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  placeholder="Street Address"
                  style={{
                    width: "620px",
                    margin: "8px",
                    padding: "10px",
                    fontSize: "30px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mx-5 w-max">
            <div className="mx-auto bg-gray-100 shadow-lg rounded-lg">
              <div className="md:flex">
                <div className="px-5 py-2">
                  <div className="text-red-500">
                    <h2 className="text-xl font-medium mb-3">Order summary</h2>
                  </div>

                  <div className="grid grid-cols-2 font-mono">
                    <div className="text-lg font-medium mr-1">
                      <span className="text-gray-400">Bill total: </span>
                    </div>
                    <div className="text-lg font-medium ml-1">
                      <span className="font-bold">${totalPrice}</span>
                    </div>
                    <div className="text-lg font-medium mr-1">
                      <span className="text-gray-400">Shipping Fee: </span>
                    </div>
                    <div className="text-lg font-medium ml-1">
                      <span className="font-bold">${shippingFee}</span>
                    </div>
                    <div className="text-lg font-medium mr-1">
                      <span className="text-gray-400">Total payment:</span>
                    </div>
                    <div className="text-lg font-medium ml-1">
                      <span className="font-bold text-red-500">
                        ${totalPrice + shippingFee}
                      </span>
                    </div>
                  </div>
                  <div className="text-red-500 flex mt-2">
                    <div className="pt-2 mx-2">
                      <MdLocalShipping size={20} />
                    </div>
                    <h2 className="text-xl font-medium mb-3">Payment method</h2>
                  </div>
                  <div className="col-span-2">
                    <select name="payment_method" id="payment_method">
                      {paymentOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="py-5">
                    <button type="submit" className="btn">
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addaddress;
