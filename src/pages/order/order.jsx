import React from "react";
import { useAxios } from "../../hooks/useAxios";

function Order() {
  const { data } = useAxios("order");
  console.log(data);

  return (
    <div className="px-[10px] md:px-[30px] xl:px-[50px]">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-xl p-5 mb-6 hover:shadow-lg transition"
        >
          {/* Xaridor ma'lumotlari */}
          <div className="flex justify-between items-start border-b pb-3 mb-3">
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-gray-700">
                👤 Xaridor: {item.name} {item.surnaem}
              </span>
              <span className="text-sm text-gray-500">
                📞 {item.phone_number}
              </span>
              <span className="text-sm text-gray-500">📍 {item.adress}</span>
            </div>
            <div className="text-right">
              <span className="block text-sm text-gray-400">
                {new Date(item.date).toLocaleString()}
              </span>
              <span className="font-bold text-blue-600 text-lg">
                💰 {item.price.toLocaleString()} so'm
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {item.products.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-14 h-14 rounded-md object-cover"
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-700">{product.title}</p>
                  <p className="text-sm text-gray-500">
                    Soni: {product.count} | Narx:{" "}
                    {product.userPrice.toLocaleString()} so'm
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Order;
