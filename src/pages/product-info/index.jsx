import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import { useDispatch } from "react-redux";
import { getData } from "../../redux/cart-slice";
import toast from "react-hot-toast";

function ProductInfo() {
  const { id } = useParams();
  const { data } = useAxios(`product/${id}`);
  const dispatch = useDispatch();
  return (
    <div className="px-[10px] md:px-[30px] xl:px-[50px]">
      <Link to={"/"}>
        <div className=" mb-[20px] flex items-center">
          <p className="text-[14px] text-[#7E818C]">Bosh sahifa</p>
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ui-icon title-icon"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.18945 16.4983C8.91426 16.1887 8.94215 15.7146 9.25174 15.4394L13.1211 12L9.25173 8.56055C8.94215 8.28536 8.91426 7.81131 9.18945 7.50172C9.46464 7.19213 9.93869 7.16425 10.2483 7.43943L14.7483 11.4394C14.9084 11.5818 15 11.7858 15 12C15 12.2142 14.9084 12.4182 14.7483 12.5605L10.2483 16.5605C9.93869 16.8357 9.46464 16.8079 9.18945 16.4983Z"
              fill="black"
            ></path>
          </svg>
        </div>
      </Link>

      <div className="grid md:grid-cols-2 gap-4 p-3 bg-white rounded-lg shadow">
        <div className="flex flex-col gap-2">
          <h3 className="text-[16px] font-semibold text-[#1F2026]">
            {data.title}
          </h3>
          <div className="rounded-md overflow-hidden shadow-sm">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-[180px] object-contain"
            />
          </div>
          <button
            onClick={() => {
              dispatch(getData(data));
              toast.success("Product cartga qo'shildi");
            }}
            className="px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white text-sm font-medium rounded-lg transition duration-200"
          >
            Add to Cart
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <div className="px-2 py-1 border border-gray-200 rounded-md bg-gradient-to-r from-yellow-300 to-yellow-400 flex items-center justify-between text-xs">
            <p className="font-medium text-gray-900">Kuz yarmarkasi 🔥</p>
            <div className="flex bg-white rounded-full px-2 py-0.5 items-center gap-1 text-[10px] font-medium">
              ⌚ <span>196:21:05</span>
            </div>
          </div>

          <p className="text-sm font-bold text-gray-800">
            {data.price?.toLocaleString()} so'm
          </p>

          <div className="bg-[#f9fafb] rounded-md p-2 shadow-inner">
            <div className="flex justify-between bg-gray-200 rounded-md px-1 py-1 mb-2 text-[11px] font-medium">
              {["24 oy", "12 oy", "6 oy", "3 oy"].map((plan) => (
                <p
                  key={plan}
                  className="text-gray-600 hover:bg-white px-1 rounded cursor-pointer"
                >
                  {plan}
                </p>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <p className="bg-amber-300 text-black px-2 py-0.5 text-[12px] rounded">
                3 500 so'm
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ui-icon title-icon"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.18945 16.4983C8.91426 16.1887 8.94215 15.7146 9.25174 15.4394L13.1211 12L9.25173 8.56055C8.94215 8.28536 8.91426 7.81131 9.18945 7.50172C9.46464 7.19213 9.93869 7.16425 10.2483 7.43943L14.7483 11.4394C14.9084 11.5818 15 11.7858 15 12C15 12.2142 14.9084 12.4182 14.7483 12.5605L10.2483 16.5605C9.93869 16.8357 9.46464 16.8079 9.18945 16.4983Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
