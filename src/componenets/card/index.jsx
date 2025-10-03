import React from "react";
import toast from "react-hot-toast";
import { FaHeart, FaRegHeart, FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteLike, getDataLike } from "../../redux/like-slice";
import { getData } from "../../redux/cart-slice";
import { Link } from "react-router-dom";

function Card(props) {
  const dispatch = useDispatch();
  const { title, price, image, id } = props;
  const { like } = useSelector((state) => state.likeSlice);

  const isLiked = like.find((value) => value.id === id);

  return (
    <>
      <Link to={`/product/${id}`}>
        <div className="shadow p-3">
          <div className="relative">
            <img src={image} alt="" className="h-[204px]" />
            {Boolean(isLiked) ? (
              <FaHeart
                onClick={() => {
                  dispatch(deleteLike(id));
                  toast.success("Sevimlilardan o'chirildi");
                }}
                className="absolute top-2 right-2 cursor-pointer text-[red]"
              />
            ) : (
              <FaRegHeart
                onClick={() => {
                  dispatch(getDataLike(props));
                  toast.success("Sevimlilarga qo'shildi");
                }}
                className="absolute top-2 right-2 cursor-pointer"
              />
            )}
          </div>

          <div className="h-[100px] flex  justify-between flex-col">
            <div>
              <h1 className="text-base text-[#000000] font-normal mb-[11px]">
                {title}
              </h1>
            </div>

            <div className="flex justify-between">
              <h2>{price.toLocaleString()} so'm</h2>

              <button
                onClick={() => {
                  dispatch(getData(props));
                  toast.success("Product cartga qo'shildi");
                }}
                className="flex items-center justify-center w-[38px] h-[38px]  rounded-full border-1 boder-solid border-[#DDDDDD]"
              >
                <FaCartPlus className="text-green-400" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
