import React from "react";
import heroImg from "../../assets/Link.png";
import imgsss from "../../assets/img.png";
import docZon from "../../assets/docZon.png";
import food from "../../assets/food.png";
import { useAxios } from "../../hooks/useAxios";
import Card from "../../componenets/card";

function Home() {
  const { data } = useAxios("product");
  console.log(data);
  

  return (
    <div className="px-[10px] md:px-[30px] xl:px-[50px]">
      <main className="mb-[12px]">
        <div className="mb-[13px]">
          <img src={heroImg} alt="" />
        </div>
        <div className="grid grid-cols-4">
          <div className="flex flex-col items-center gap-[8px] px-[20px] py-[19px] bg-[#EEEEEE] rounded-[5px] max-w-[265px]">
            <h3 className="text-[#000000] text-[18px] font-bold ">
              Добро пожаловать!
            </h3>
            <p className="text-[#000000] text-[14px] font-normal max-w-[223px] text-center">
              Войдите, чтобы оставлять отзывы и пользоваться другими функциями
              авторизованных пользователей.
            </p>
            <button className="bg-[#5D78FF] hover:bg-blue-600 w-full h-[40px] text-white rounded-[5px]">
              Войти в личный кабинет
            </button>
          </div>
          <div className="flex items-center justify-center px-[20px] py-[19px] bg-[#D1DAE6] rounded-[5px] max-w-[265px]">
            <h3 className="text-[#6682A9] text-[18px] font-bold text-center">
              Покупать как юрлицо
            </h3>
            <img src={imgsss} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center gap-[8px] px-[20px] py-[19px] bg-[#DBE1FF] rounded-[5px] max-w-[265px]">
            <img src={docZon} alt="" />
            <h3 className="text-[#000000] text-[18px] font-bold text-center">
              Электронный документооборот
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-[8px] px-[20px] py-[19px] bg-gradient-to-b from-[#671ABF] via-[#A03291] to-[#D24089] rounded-[5px] max-w-[265px]">
            <img src={food} alt="" />
            <h3 className="text-[#FFFFFF] text-[18px] font-bold text-center">
              Онлайн меню для ресторанов и гостиниц
            </h3>
          </div>
        </div>
      </main>

      <div>
        <h2 className="text-[#000000] text-[24px] font-medium mb-[21px]">
          Популярные
        </h2>
        <div className="grid  grid-cols-6 gap-[8px]">
          {data.map((value) => <Card key={value.id} {...value}/>)}
        </div>
      </div>
    </div>
  );
}

export default Home;
