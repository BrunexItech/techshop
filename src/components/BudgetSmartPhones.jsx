import React from "react";
import budget1 from '../assets/budget1.jpeg'
import budget2 from '../assets/budget2.jpeg'
import budget3 from '../assets/budget3.jpeg'
import budget4 from '../assets/budget4.jpeg'
import budget5 from '../assets/budget5.jpeg'
import budget6 from '../assets/budget6.jpeg'
import budget7 from '../assets/budget7.jpeg'
import budget8 from '../assets/budget8.jpeg'
import budget9 from '../assets/budget9.jpeg'
import budget10 from '../assets/budget10.png'

const products = [
  { id: 1, name: "Xiaomi Redmi A3x", brand: "Xiaomi", price: "KSh 8,500 – KSh 11,800", oldPrice: null, badge: "OPEN", image: budget1 },
  { id: 2, name: "Infinix Smart 9 HD", brand: "Infinix", price: "KSh 10,600", oldPrice: "KSh 11,720", badge: "OPEN", image: budget2 },
  { id: 3, name: "Redmi A5 4G", brand: "Xiaomi", price: "KSh 10,000 – KSh 11,500", oldPrice: null, badge: "OPEN HOT", image: budget3},
  { id: 4, name: "Samsung Galaxy A06", brand: "Samsung", price: "KSh 12,300 – KSh 13,300", oldPrice: null, badge: null, image: budget4 },
  { id: 5, name: "Xiaomi Redmi 14C", brand: "Xiaomi", price: "KSh 11,999 – KSh 15,000", oldPrice: null, badge: "OPEN HOT", image: budget5},
  { id: 6, name: "Villaon V40s", brand: "Villaon", price: "KSh 9,500", oldPrice: "KSh 10,000", badge: "OPEN", image: budget6 },
  { id: 7, name: "Techno pop 9", brand: "Tecno", price: "KSh 12,000 – KSh 13,500", oldPrice: null, badge: "OPEN", image: budget7 },
  { id: 8, name: "Realme note 50", brand: "Realme", price: "KSh 13,000 – KSh 13,500", oldPrice: null, badge: "OPEN", image: budget8 },
  { id: 9, name: "Itel city 100", brand: "Itel", price: "KSh 12,000 – KSh 12,800", oldPrice: null, badge: "OPEN", image: budget9 },
  { id: 10, name: "Itel P65", brand: "Itel", price: "KSh 13,000 – KSh 13,550", oldPrice: null, badge: "OPEN", image: budget10 },

];

const BudgetSmartphoneDeals = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-lg font-bold mb-6 text-gray-800 text-center">Budget Smartphone Deals</h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative border border-gray-300 rounded-lg p-3 pt-8 flex flex-col items-center group shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300 ease-in-out transform hover:-translate-y-2 bg-white"
          >
            {/* Badge */}
            {product.badge && (
              <span
                className={`absolute top-2 left-2 z-10 ${
                  product.badge.includes("HOT") ? "bg-gradient-to-r from-blue-500 to-blue-700" : "bg-gradient-to-r from-red-500 to-red-700"
                } text-white text-xs font-bold px-2 py-1 rounded-full shadow-md`}
              >
                {product.badge}
              </span>
            )}

            {/* Product Image */}
            <div className="relative w-full overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </div>

            {/* Product Name */}
            <h3 className="mt-3 text-sm font-semibold text-center text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-xs text-gray-500">{product.brand}</p>

            {/* Prices */}
            <div className="mt-2 text-center">
              <p className="text-red-500 font-bold">{product.price}</p>
              {product.oldPrice && (
                <p className="text-gray-400 text-sm line-through">
                  {product.oldPrice}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetSmartphoneDeals;
