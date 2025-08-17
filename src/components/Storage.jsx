import React from "react";
import { FaThLarge, FaThList } from "react-icons/fa";
import storage1 from '../assets/storage1.jpg'
import storage2 from '../assets/storage2.jpg'
import storage3 from '../assets/storage3.jpg'
import storage4 from '../assets/storage4.jpg'
import storage5 from '../assets/storage5.jpg'
import storage6 from '../assets/storage6.jpg'
import storage7 from '../assets/storage7.jpg'
import storage8 from '../assets/storage8.jpg'
import storage9 from '../assets/storage9.jpg'
import storage10 from '../assets/storage10.jpg'
import storage11 from '../assets/storage11.jpg'
import storage12 from '../assets/storage12.jpg'

const Storage = () => {
  // Expanded products
  const products = [
    { id: 1, name: "Promate Ultra-Fast Multiport USB-C Hub", price: "KSh 7,500", image: storage1 },
    { id: 2, name: "SanDisk Extreme Portable SSD", price: "KSh 18,500 – KSh 40,000", image: storage2, offer: true },
    { id: 3, name: "WD 2TB My Passport USB 3.2 Gen 1 Hard Drive", price: "KSh 9,500 – KSh 15,500", image: storage3, offer: true },
    { id: 4, name: "Toshiba Canvio Basics Portable Hard Drive", price: "KSh 9,000 – KSh 15,000", image: storage4, offer: true },
    { id: 5, name: "Seagate Portable Hard Drive 2.5", price: "KSh 9,800 – KSh 26,500", image: storage5, offer: true },
    { id: 6, name: "Kingston A400 480GB SSD", price: "KSh 6,500", image: storage6 },
    { id: 7, name: "Samsung T7 Portable SSD 1TB", price: "KSh 16,000", image: storage7, offer: true },
    { id: 8, name: "Crucial X8 1TB Portable SSD", price: "KSh 14,500", image: storage8 },
    { id: 9, name: "Transcend 2TB StoreJet", price: "KSh 12,000", image: storage9 },
    { id: 10, name: "LaCie Rugged Mini 1TB", price: "KSh 13,800", image: storage10, offer: true },
    { id: 11, name: "Verbatim 1TB Portable Hard Drive", price: "KSh 9,200", image: storage11 },
    { id: 12, name: "PNY Elite-X 512GB Portable SSD", price: "KSh 8,700", image: storage12, offer: true },
  ];

  return (
    <div className="p-6">
      {/* Persuasive message */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          🚀 Upgrade Your Digital Life with the Best Storage Devices!
        </h2>
        <p className="text-gray-600 text-lg">
          Don’t let slow drives hold you back — enjoy faster, safer, and more reliable storage today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-6">
          {/* Filter by Price */}
          <div className="border p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-3">Filter by Price</h3>
            <input type="range" min="1500" max="40000" className="w-full" />
            <p className="text-sm mt-2">Price: KSh 1,500 – KSh 40,000</p>
            <button className="mt-3 bg-blue-500 text-white px-4 py-1 rounded">
              Filter
            </button>
          </div>

          {/* Latest Products */}
          <div className="border p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-3">Latest Products</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-blue-600 hover:text-blue-800 transition-colors">Logitech Flight Yoke System - KSh 60,000</li>
              <li className="text-blue-600 hover:text-blue-800 transition-colors">Oraimo MagiPower 15 10000mAh - KSh 8,000</li>
              <li className="text-blue-600 hover:text-blue-800 transition-colors">Oraimo PowerStation 600 - KSh 38,000</li>
              <li className="text-blue-600 hover:text-blue-800 transition-colors">Anker PowerDrive Car Charger - KSh 2,000</li>
              <li className="text-blue-600 hover:text-blue-800 transition-colors">Oraimo Tempo WS-03 Smartwatch - KSh 5,000</li>
              <li className="text-blue-600 hover:text-blue-800 transition-colors">HMD Cest 5G - KSh 14,500</li>
            </ul>
          </div>
        </div>

        {/* Main content */}
        <div className="md:col-span-3">
          {/* Sort and View options */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <FaThLarge className="cursor-pointer" />
              <FaThList className="cursor-pointer" />
            </div>
            <div className="flex items-center gap-4 text-sm">
              <label>Sort by: </label>
              <select className="border rounded px-2 py-1">
                <option>Latest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <label>Show: </label>
              <select className="border rounded px-2 py-1">
                <option>60</option>
                <option>30</option>
                <option>12</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-3 shadow-sm relative transform transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                {product.offer && (
                  <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    Offer
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-contain mb-3"
                />
                <h4 className="text-sm font-semibold mb-1">{product.name}</h4>
                <p className="text-gray-700 font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storage;
