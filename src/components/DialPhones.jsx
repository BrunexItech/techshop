import React from "react";
import dial1 from '../assets/dial1.jpg'
import dial2 from '../assets/dial2.jpg'
import dial3 from '../assets/dial3.jpg'
import dial4 from '../assets/dial4.jpg'
import dial5 from '../assets/dial5.jpg'
import dial6 from '../assets/dial6.jpg'
import dial7 from '../assets/dial7.jpg'
import dial8 from '../assets/dial8.jpg'
import dial9 from '../assets/dial9.jpg'
import dial10 from '../assets/dial10.jpg'

const dialPhones = [
  { id: 1, name: "Itel Value 110", brand: "Dial Phone", price: "KSh 1,200", oldPrice: "KSh 1,500", badge: "OPEN", image:dial1  },
  { id: 2, name: "Nokia 105 (2023)", brand: "Dial Phone", price: "KSh 2,000", oldPrice: null, badge: "OPEN", image:dial2},
  { id: 3, name: "Techno T301", brand: "Dial Phone", price: "KSh 1,700", oldPrice: "KSh 1,900", badge: "OPEN HOT", image:dial3},
  { id: 4, name: "Kabambe KGTEL 3310", brand: "Dial Phone", price: "KSh 1,300", oldPrice: null, badge: "OPEN", image:dial4},
  { id: 5, name: "Bontel 3310", brand: "Dial Phone", price: "KSh 1,500", oldPrice: "KSh 1,800", badge: "OPEN", image:dial5},
  { id: 6, name: "Itel Value 2163", brand: "Dial Phone", price: "KSh 1,600", oldPrice: null, badge: "OPEN", image:dial6},
  { id: 7, name: "Kabambe KGTEL 105", brand: "Dial Phone", price: "KSh 1,250", oldPrice: null, badge: "OPEN", image:dial7},
  { id: 8, name: "Nokia 150", brand: "Dial Phone", price: "KSh 3,000", oldPrice: "KSh 3,500", badge: "OPEN HOT", image:dial8},
  { id: 9, name: "Itel Value 2090", brand: "Dial Phone", price: "KSh 1,800", oldPrice: null, badge: "OPEN", image:dial9},
  { id: 10, name: "Kabambe X-Tigi", brand: "Dial Phone", price: "KSh 2,200", oldPrice: "KSh 2,500", badge: "OPEN", image:dial10},
];

const DialPhoneDeals = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title */}
      <div className="text-center mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-4 border-blue-500 inline-block pb-1 ">
        Kenyan Dial Phone Deals
      </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {dialPhones.map((product) => (
          <div
            key={product.id}
            className="relative bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center p-4 group"
          >
            {/* Badge */}
            {product.badge && (
              <span
                className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold shadow-md z-20 ${
                  product.badge.includes("HOT")
                    ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                    : "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                }`}
              >
                {product.badge}
              </span>
            )}

            {/* Product Image */}
            <div className="relative w-full flex justify-center z-10">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Product Name */}
            <h3 className="mt-4 text-base font-semibold text-gray-800 text-center">
              {product.name}
            </h3>
            <p className="text-xs text-gray-500">{product.brand}</p>

            {/* Prices */}
            <div className="mt-3 text-center">
              <p className="text-lg font-bold text-green-600">{product.price}</p>
              {product.oldPrice && (
                <p className="text-sm text-gray-400 line-through">
                  {product.oldPrice}
                </p>
              )}
            </div>

            {/* Button */}
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg shadow transition-all duration-300">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DialPhoneDeals;
