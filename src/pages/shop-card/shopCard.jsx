import React from "react";
import { useSelector } from "react-redux";
import ShopCard from "../../componenets/shop-card";
import { Link } from "react-router-dom";

const ShoppCard = () => {
  const { data } = useSelector((state) => state.cartSlice);
  const totalPrice = data.reduce((acc, value) => (acc += value.userPrice), 0);
  return (
    <div className="px-[10px] md:px-[30px] xl:px-[50px]">
      <section className="bg-white py-8 antialiased  md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="flex gap-1">
            <h1 className="font-bold mb-3"> Shopping Cart/ </h1>
            <Link to={"/"}>
              <p>Home</p>
            </Link>
          </div>
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {data.map((value) => (
                  <ShopCard key={value.id} {...value} />
                ))}
              </div>
            </div>
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <div className="space-y-4">
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Umumiy
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      {totalPrice?.toLocaleString()} so'm
                    </dd>
                  </dl>
                </div>
                {data.length > 0 ? (
                  <Link
                    to={"/buy"}
                    className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white shadow-[0_4px_10px_0_rgba(255,255,255,0.3)]"
                  >
                    buyutma berish
                  </Link>
                ) : (
                  <Link
                    to={"/"}
                    className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white shadow-[0_4px_10px_0_rgba(255,255,255,0.3)]"
                  >
                    Mahsulotlar
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoppCard;
