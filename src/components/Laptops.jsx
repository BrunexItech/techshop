import React from "react";
import lap1 from "../assets/lap1.jpg";
import lap2 from "../assets/lap2.jpg";
import lap3 from "../assets/lap3.jpg";
import lap4 from "../assets/lap4.jpg";
import lap5 from "../assets/lap5.jpg";
import lap6 from "../assets/lap6.jpg";
import lap7 from "../assets/lap7.jpg";
import lap8 from "../assets/lap8.jpg";
import lap9 from "../assets/lap9.jpg";
import lap10 from "../assets/lap10.jpg";
import lap11 from "../assets/lap11.jpg";
import lap12 from "../assets/lap12.jpg";
import lap13 from "../assets/lap13.jpg";
import lap14 from "../assets/lap14.jpg";
import lap15 from "../assets/lap15.jpg";
import lap16 from "../assets/lap16.jpg";

/** Card Component */
const LaptopCard = ({ id, image, name, brand, price, oldPrice, discount, desc }) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-md border transition-all duration-300 hover:shadow-xl">
      {discount && (
        <span className="absolute top-2 left-2 z-10 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
          {discount}
        </span>
      )}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="h-0 overflow-hidden group-hover:h-10 transition-all duration-300 bg-white border-t border-gray-200 flex items-center justify-center">
        <span className="bg-orange-600 text-white text-xs sm:text-sm font-medium tracking-wide">
          QUICK VIEW
        </span>
      </div>
      <div className="p-4">
        <p className="text-gray-500 text-xs">ID: {id}</p>
        <h3 className="text-lg font-semibold text-gray-900 mt-1">{name}</h3>
        <p className="text-gray-600 text-sm">{brand}</p>
        <p className="text-gray-700 text-sm mt-2">{desc}</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-orange-600 font-bold">{price}</span>
          {oldPrice && (
            <span className="text-gray-400 line-through text-sm">{oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

/** Main Laptops Section */
const Laptops = () => {
  const products = [
    { id: 1, image: lap1, name: "HP Pavilion 15", brand: "HP", price: "Ksh 75,999", oldPrice: "Ksh 84,499", discount: "10% OFF", desc: "11th Gen Core i5 • 8GB RAM • 512GB SSD • 15.6\" FHD • Intel Iris Xe." },
    { id: 2, image: lap2, name: "Dell Inspiron 14", brand: "Dell", price: "Ksh 68,499", oldPrice: "Ksh 80,499", discount: "15% OFF", desc: "Core i5 • 8GB RAM • 256GB SSD • 14\" FHD • Slim & lightweight design." },
    { id: 3, image: lap3, name: "Lenovo IdeaPad 3", brand: "Lenovo", price: "Ksh 62,999", oldPrice: "Ksh 68,499", discount: "8% OFF", desc: "Ryzen 5 • 8GB • 512GB SSD • 15.6\" FHD • Dolby Audio speakers." },
    { id: 4, image: lap4, name: "Asus VivoBook 15", brand: "Asus", price: "Ksh 71,500", oldPrice: "Ksh 81,249", discount: "12% OFF", desc: "Core i7 • 12GB RAM • 512GB SSD • NanoEdge display • Backlit keyboard." },
    { id: 5, image: lap5, name: "Apple MacBook Air M1", brand: "Apple", price: "Ksh 144,999", oldPrice: "Ksh 152,999", discount: "5% OFF", desc: "Apple M1 • 8GB • 256GB SSD • 13.3\" Retina • All-day battery life." },
    { id: 6, image: lap6, name: "Acer Aspire 5", brand: "Acer", price: "Ksh 69,999", oldPrice: "Ksh 81,395", discount: "14% OFF", desc: "Core i5 • 8GB • 512GB SSD • 15.6\" FHD • Wi-Fi 6 • Premium build." },
    { id: 7, image: lap7, name: "HP Envy 13", brand: "HP", price: "Ksh 98,499", oldPrice: "Ksh 105,900", discount: "7% OFF", desc: "Core i7 • 16GB RAM • 512GB SSD • 13.3\" • Ultra-portable aluminum body." },
    { id: 8, image: lap8, name: "Dell XPS 13", brand: "Dell", price: "Ksh 129,999", oldPrice: "Ksh 144,499", discount: "10% OFF", desc: "Core i7 • 16GB • 512GB SSD • InfinityEdge display • Premium finish." },
    { id: 9, image: lap9, name: "Lenovo ThinkPad E14", brand: "Lenovo", price: "Ksh 89,999", oldPrice: "Ksh 98,899", discount: "9% OFF", desc: "Core i5 • 16GB • 512GB SSD • MIL-STD durability • Spill-resistant keyboard." },
    { id: 10, image: lap10, name: "Asus TUF Gaming F15", brand: "Asus", price: "Ksh 119,499", oldPrice: "Ksh 127,129", discount: "6% OFF", desc: "Core i7 • RTX graphics • 16GB • 512GB SSD • 144Hz FHD display." },
    { id: 11, image: lap11, name: "Apple MacBook Pro M2", brand: "Apple", price: "Ksh 219,999", oldPrice: "Ksh 229,999", discount: "4% OFF", desc: "Apple M2 • 8-core GPU • 8GB • 512GB SSD • True Tone Retina display." },
    { id: 12, image: lap12, name: "Acer Nitro 5", brand: "Acer", price: "Ksh 105,999", oldPrice: "Ksh 119,099", discount: "11% OFF", desc: "Ryzen 7 • GTX/RTX graphics • 16GB • 512GB SSD • RGB backlit keyboard." },
    { id: 13, image: lap13, name: "HP Spectre x360", brand: "HP", price: "Ksh 154,999", oldPrice: "Ksh 162,999", discount: "5% OFF", desc: "2-in-1 convertible • Core i7 • 16GB • 1TB SSD • OLED touch option." },
    { id: 14, image: lap14, name: "Dell Latitude 7420", brand: "Dell", price: "Ksh 132,999", oldPrice: "Ksh 142,473", discount: "7% OFF", desc: "Business-class • Core i7 • 16GB • 512GB SSD • Thunderbolt 4 • LTE ready." },
    { id: 15, image: lap15, name: "Lenovo Legion 5", brand: "Lenovo", price: "Ksh 149,999", oldPrice: "Ksh 159,569", discount: "6% OFF", desc: "Ryzen 7 • RTX graphics • 16GB • 1TB SSD • 165Hz gaming display." },
    { id: 16, image: lap16, name: "Asus ZenBook 14", brand: "Asus", price: "Ksh 124,999", oldPrice: "Ksh 135,869", discount: "8% OFF", desc: "OLED 14\" • Core i7 • 16GB • 512GB SSD • Ultra-light premium chassis." },
  ];

  return (
    <section className="px-6 py-10">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Top Laptops for Work, School & Play</h2>
        <p className="text-gray-600 mt-2">
          Choose from trusted global brands at the best local prices in Ksh. Get fast performance,
          brilliant displays, and long battery life—backed by reliable after-sales support. Upgrade
          today and feel the difference in every click.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <LaptopCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Laptops;
