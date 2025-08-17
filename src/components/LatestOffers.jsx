import React from 'react';
import offer1 from '../assets/offer1.webp';
import offer2 from '../assets/offer2.webp';
import offer3 from '../assets/offer3.webp';
import offer4 from '../assets/offer4.webp';
import offer5 from '../assets/offer5.webp';
import offer6 from '../assets/offer6.webp';
import offer7 from '../assets/offer7.webp';
import offer8 from '../assets/offer8.webp';

const LatestOffers = () => {
  const products = [
    { id: 1, name: "Redmi Note 14s", price: "KSh 28,000–KSh 32,500", image: offer1, labels: ["NEW", "HOT"] },
    { id: 2, name: "Infinix Hot 60 Pro Plus", price: "KSh 21,500–KSh 24,500", image: offer2, labels: ["NEW"] },
    { id: 3, name: "Infinix Hot 60 Pro", price: "KSh 19,000", oldPrice: "KSh 27,500", image: offer3, labels: ["NEW", "SALE"] },
    { id: 4, name: "Realme Note 60", price: "KSh 13,200–KSh 13,999", image: offer4, labels: ["NEW", "HOT", "realme"] },
    { id: 5, name: "Samsung Galaxy A15", price: "KSh 24,000–KSh 26,000", image: offer5, labels: ["HOT"] },
    { id: 6, name: "Apple iPhone 13", price: "KSh 48,000", oldPrice: "KSh 55,000", image: offer6, labels: ["SALE"] },
    { id: 7, name: "Tecno Camon 30", price: "KSh 18,500–KSh 22,000", image: offer7, labels: ["NEW"] },
    { id: 8, name: "Vivo Y27S", price: "KSh 19,200", image: offer8, labels: ["HOT"] },
  ];

  return (
    <section className="px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Latest Offers</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-3 shadow hover:shadow-xl relative bg-white transform transition-transform duration-300 hover:scale-105"
          >
            {/* Labels */}
            <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
              {product.labels.map((label, index) => {
                let labelStyle =
                  label.toLowerCase() === "new"
                    ? "bg-green-500"
                    : label.toLowerCase() === "hot"
                    ? "bg-blue-500"
                    : label.toLowerCase() === "sale"
                    ? "bg-red-500"
                    : "bg-yellow-400";

                return (
                  <span
                    key={index}
                    className={`${labelStyle} text-white text-xs px-2 py-0.5 rounded`}
                  >
                    {label.toUpperCase()}
                  </span>
                );
              })}
            </div>

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain rounded-md mt-6 bg-gray-100 transform transition-transform duration-300 hover:scale-110"
            />

            {/* Product Name */}
            <h3 className="mt-3 text-sm font-medium">{product.name}</h3>

            {/* Price */}
            <div className="text-sm font-semibold mb-3">
              <p className="text-blue-600">{product.price}</p>
              {product.oldPrice && (
                <p className="text-gray-400 line-through">{product.oldPrice}</p>
              )}
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestOffers;
