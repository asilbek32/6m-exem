import axios from "axios";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllData } from "../../redux/cart-slice";
import toast from "react-hot-toast";

function BuyProduct() {
  const nameRef = useRef();
  const surnaemRef = useRef();
  const adressRef = useRef();
  const phoneNumberRef = useRef();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.cartSlice);
  const buy = (e) => {
    e.preventDefault();

    const orderData = {
      name: nameRef.current.value,
      surnaem: surnaemRef.current.value,
      adress: adressRef.current.value,
      phone_number: phoneNumberRef.current.value,
      date: Date.now,
      price: data.reduce((sum, item) => sum + item.userPrice, 0),
      products: [...data],
    };

    axios({
      url: "https://68de6779d7b591b4b78f6e25.mockapi.io/order",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: orderData,
    })
      .then((res) => {
        console.log(res);
        toast.success("Buyurtma qabul qilindi");
        dispatch(deleteAllData());
      })
      .catch((error) => console.log(error));

    nameRef.current.value = "";
    surnaemRef.current.value = "";
    adressRef.current.value = "";
    phoneNumberRef.current.value = "";
  };

  return (
    <div className="px-[10px] md:px-[30px] xl:px-[50px]">
      <form
        onSubmit={buy}
        className="flex flex-col gap-4 max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6"
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-2 text-center">
          Place Your Order
        </h2>

        <input
          type="text"
          ref={nameRef}
          name="name"
          placeholder="Name"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          ref={surnaemRef}
          name="surname"
          placeholder="Surname"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          ref={adressRef}
          name="adress"
          placeholder="Address"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          ref={phoneNumberRef}
          name="phone_number"
          placeholder="Phone number"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg py-2 transition duration-200"
        >
          Buy
        </button>
      </form>
    </div>
  );
}
export default BuyProduct;
