import React from "react";
import telegram from "../../assets/telegram.png";
import payme from "../../assets/payme.png";
import click from "../../assets/click.png";

function Footerr() {
  return (
    <div className="grid grid-cols-4 gap-[10px] px-[10px] md:px-[30px] xl:px-[50px] mt-[40px]">
      <div className="p-[26px] border-1 border-solid border-[#E9E9E9] rounded-[8px]">
        <h3 className="text-[16px] font-bold text-[#222222] mb-[16px]">
          Контакты
        </h3>
        <div className="mb-[6px]">
          <h4 className="text-[#6682A9] text-[16px] font-normal mb-[6px]">
            Call-центр
          </h4>
          <p className="text-[#222222] text-[16px] font-normal translate-x-[15px]">
            +998-78 555-35-00
          </p>
        </div>
        <div>
          <h4 className="text-[#6682A9] text-[16px] font-normal mb-[6px]">
            Эл. почта
          </h4>
          <p className="text-[#222222] text-[16px] font-normal translate-x-[15px]">
            info@zon.uz
          </p>
        </div>
        <div>
          <h4 className="text-[#6682A9] text-[16px] font-normal mb-[6px]">
            График работы
          </h4>
          <div className="flex justify-between">
            <p className="text-[#222222] text-[16px] font-normal translate-x-[15px]">
              В будние
            </p>
            <p className="text-[#222222] text-[16px] font-normal">
              с 09:00 до 18:00
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#222222] text-[16px] font-normal translate-x-[15px]">
              Суббота
            </p>
            <p className="text-[#222222] text-[16px] font-normal">
              с 09:00 до 18:00
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between ">
        <div className="px-[26px] pt-[26px] pb-[21px] border-1 border-solid border-[#E9E9E9] rounded-[5px]">
          <h3 className="text-[16px] font-bold text-[#222222] mb-[11px]">
            Мы в социальных сетях
          </h3>
          <div className="flex justify-between items-center">
            <img src={telegram} alt="" className="w-[40px]" />
            <img src={telegram} alt="" className="w-[40px]" />
            <img src={telegram} alt="" className="w-[40px]" />
            <img src={telegram} alt="" className="w-[40px]" />
          </div>
        </div>
        <div className="px-[26px] pt-[26px] pb-[21px] border-1 border-solid border-[#E9E9E9] rounded-[5px]">
          <div className="mb-[5px]">
            <div className="flex items-center justify-between ">
              <img src={payme} alt="payme" />
              <img src={click} alt="click" />
            </div>
            <h4 className="text-center text-[15.88px] text-[#222222] font-normal">
              Интренет магазин Zon.uz 2017-2024. Все права защищены
            </h4>
          </div>
        </div>
      </div>
      <div className="p-[26px] border-1 border-solid border-[#E9E9E9] rounded-[8px]">
        <h3 className="text-[16px] font-bold text-[#222222] mb-[16px]">
          Помощь
        </h3>
        <div className="flex flex-col gap-[11px]">
          <div className="flex justify-between items-center">
            <p className="text-[#007AA7] text-[16px] font-normal">О нас</p>
            <p className="text-[#007AA7] text-[16px] font-normal">
              Продавайте на Zon.uz
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#007AA7] text-[16px] font-normal">Реквизиты</p>
            <p className="text-[#007AA7] text-[16px] font-normal">
              Покупать как юрлицо
            </p>
          </div>
          <p className="text-[#007AA7] text-[16px] font-normal">Контакты</p>
          <p className="text-[#007AA7] text-[16px] font-normal">Вакансии</p>
          <p className="text-[#007AA7] text-[16px] font-normal">Карта сайта</p>
          <p className="text-[#007AA7] text-[16px] font-normal">
            Публичная оферта
          </p>
        </div>
      </div>
      <div className="p-[26px] border-1 border-solid border-[#E9E9E9] rounded-[8px]">
        <h3 className="text-[16px] font-bold text-[#222222] mb-[11px]">
          Помощь
        </h3>
        <div className="flex flex-col gap-[11px]">
          <p className="text-[#007AA7] text-[16px] font-normal">
            Вопросы и ответы
          </p>
          <p className="text-[#007AA7] text-[16px] font-normal">
            Условия рассрочки
          </p>
          <p className="text-[#007AA7] text-[16px] font-normal">
            Способ оптлаты
          </p>
          <p className="text-[#007AA7] text-[16px] font-normal">Доставка</p>
          <p className="text-[#007AA7] text-[16px] font-normal">
            Возврат товаров
          </p>
          <p className="text-[#007AA7] text-[16px] font-normal">
            Сервисные центры
          </p>
         
        </div>
      </div>
    </div>
  );
}

export default Footerr;
