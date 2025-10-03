import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaAngleDown, FaSearch, FaRegHeart } from "react-icons/fa";
import { Badge } from "antd";
import { Link } from "react-router-dom";
import { FaGlobeAsia } from "react-icons/fa";

import img from "../../assets/Img.svg";
import ss from "../../assets/ss.svg";
import phone from "../../assets/phone.svg";
import logo from "../../assets/zon.svg";
import category from "../../assets/Group.svg";
import { LuShoppingBag } from "react-icons/lu";
import { useSelector } from "react-redux";
function Header() {

  const { data } = useSelector((state) => state.cartSlice);
  const { like } = useSelector((state) => state.likeSlice);
  return (
    <>
      <header className="flex justify-between items-center h-[40px] px-[10px] md:px-[30px] xl:px-[50px]">
        <div className="flex gap-[45px]">
          <div className="flex gap-[8px] ">
            <FaMapMarkerAlt className="text-[#6682A9]" />
            <p className="text-[#C2CDDD] text-[14px] font-normal">Город</p>
            <p className="text-[#5D78FF] text-[14px] font-normal underline">
              Ташкент
            </p>
          </div>
          <div className="flex gap-[8px] cursor-pointer">
            <img src={img} alt="" />
            <p className="text-[#5D78FF] text-[14px] font-bold ">
              Продавайтена Zon.uz
            </p>
          </div>
          <div className="flex gap-[8px] cursor-pointer">
            <img src={ss} alt="" />
            <p className="text-[#6682A9] text-[14px] font-normal ">
              Покупать как юрлицо
            </p>
          </div>
          <div className="flex gap-[8px] items-center cursor-pointer">
            <p className="text-[#6682A9] text-[14px] font-normal">Помощь</p>
            <FaAngleDown className="text-[#C2CDDD] " />
          </div>
          <p className="text-[#6682A9] text-[14px] font-normal cursor-pointer">
            Контакты
          </p>
        </div>
        <div className="flex gap-[8px]">
          <img src={phone} alt="" />
          <p className="text-[#000000] text-[15px] font-bold">
            +998-78 555-35-00
          </p>
        </div>
      </header>
      <nav className="flex justify-between items-center h-[77px] border-t-1 border-b-1  border-solid border-[#C2CDDD]  mb-[16px] px-[10px] md:px-[30px] xl:px-[50px]">
        <div className="flex justify-between gap-[20px]">
          <img src={logo} alt="" />
          <div className="flex gap-[9px] px-[18px] py-[9px] border-1 border-solid border-[#011C47] rounded-[5px] ">
            <img src={category} alt="" />
            <p className="text-[#011C47] text-[16px] font-bold">Каталог</p>
          </div>
        </div>
        <div className="flex  items-center max-w-[700px]">
          <div className="flex-1 border-1 border-r-0 border-solid boder-[#6682A9] rounded-[5px] rounded-r-none pl-[13px] py-[7px] w-full">
            <input
              type="text"
              className="outline-none"
              placeholder="Найти товары"
            />
          </div>
          <div className="bg-[#D1DAE6] px-[13px] py-[11px] border-1 border-l-0 border-solid boder-[#6682A9] rounded-[5px] rounded-l-none">
            <FaSearch className="text-[#6682A9]" />
          </div>
        </div>

        <div className=" flex items-center gap-[20px]">
          <Badge count={like.length}>
            <Link to={"/like"}>
              <FaRegHeart className="text-[18px]  text-gray-500" />
            </Link>
          </Badge>

          <Badge count={data.length}>
            <Link to={"/cart"}>
              <LuShoppingBag className="text-[18px] text-gray-500" />
            </Link>
          </Badge>

          <div className="flex gap-[10px] items-center">
            <FaGlobeAsia />
            <p className="text-[#000000] font-bold text-base">RU</p>
          </div>

          <Link to={"/orders"} className="text-[15px] font-bold">
            <button className="w-[80px] h-[40px] bg-gray-300 hover:bg-gray-700 hover:text-white rounded-[5px]">
              Oders
            </button>
          </Link>

          <button className="bg-[#5D78FF] hover:bg-blue-800 text-[white] w-[82px] h-[40px] rounded-[5px]">
            Войти
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
