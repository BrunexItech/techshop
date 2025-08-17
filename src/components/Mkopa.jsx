import React, { useState } from "react";
import mkopa1 from "../assets/mkopa1.jpg";
import mkopa2 from "../assets/mkopa2.jpg";
import mkopa3 from "../assets/mkopa3.jpg";
import mkopa4 from "../assets/mkopa4.jpg";
import mkopa5 from "../assets/mkopa5.jpg";
import mkopa6 from "../assets/mkopa6.jpg";
import mkopa7 from "../assets/mkopa7.jpg";
import mkopa8 from "../assets/mkopa8.jpg";
import mkopa9 from "../assets/mkopa9.jpeg";
import mkopa10 from "../assets/mkopa10.jpeg";
import mkopa11 from "../assets/mkopa11.jpeg";
import mkopa12 from "../assets/mkopa12.jpg";
import heroImage from "../assets/mkopa-hero.jpg"; // <-- hero image

const phones = [
  {
    id: 1,
    name: "M-KOPA M10",
    image: mkopa1,
    description: "Sleek design, all-day battery, seamless performance at an affordable price.",
    specs: ["4GB RAM, 64GB Storage", "4000 mAh Battery", "12MP Main Camera", "Android 12", "6.1” screen display"],
    deposit: "Ksh 1,500 initial deposit, Ksh 500/week"
  },
  {
    id: 2,
    name: "SAMSUNG A16",
    image: mkopa2,
    description: "6.7-inch screen with vibrant colors and immersive content experience.",
    specs: ["4GB RAM, 128GB Storage", "5000 mAh Battery", "50MP Main Camera, 13MP Front Camera", "Android 14", "6.7” screen display"],
    deposit: "Ksh 2,000 initial deposit, Ksh 600/week"
  },
  {
    id: 3,
    name: "M-KOPA S34",
    image: mkopa3,
    description: "Your gateway to the digital world with seamless connectivity.",
    specs: ["6GB RAM, 128GB Storage", "4500 mAh Battery", "48MP Camera", "Android 13", "6.5” screen display"],
    deposit: "Ksh 2,500 initial deposit, Ksh 700/week"
  },
  {
    id: 4,
    name: "SAMSUNG A06",
    image: mkopa4,
    description: "Large display to expand your view, embracing the essentials.",
    specs: ["3GB RAM, 64GB Storage", "4000 mAh Battery", "32MP Main Camera", "Android 12", "6.4” screen display"],
    deposit: "Ksh 1,200 initial deposit, Ksh 400/week"
  },
  {
    id: 5,
    name: "Samsung A05s",
    image: mkopa5,
    description: "Seamless gaming, viewing, and social media experience.",
    specs: ["4GB RAM, 128GB Storage", "5000 mAh Battery", "50MP Main Camera, 13MP Front Camera", "Android 14", "6.7” screen display"],
    deposit: "Ksh 1,800 initial deposit, Ksh 500/week"
  },
  {
    id: 6,
    name: "Samsung A25",
    image: mkopa6,
    description: "Sleek design, clean camera layout, and haze finish.",
    specs: ["6GB RAM, 128GB Storage", "5000 mAh Battery", "50MP Main Camera, 13MP Front Camera", "Android 14", "6.5” screen display"],
    deposit: "Ksh 2,200 initial deposit, Ksh 600/week"
  },
  {
    id: 7,
    name: "Samsung A05",
    image: mkopa7,
    description: "Enjoy games, movies, and content on the 6.7-inch HD+ display.",
    specs: ["4GB RAM, 64GB Storage", "5000 mAh Battery", "50MP Camera", "Android 13", "Dual SIM", "6.7” screen display"],
    deposit: "Ksh 1,500 initial deposit, Ksh 450/week"
  },
  {
    id: 8,
    name: "Samsung A15",
    image: mkopa8,
    description: "Ample storage for all your files and memories.",
    specs: ["4GB RAM, 128GB Storage", "5000 mAh Battery", "50MP Main Camera, 13MP Front Camera", "Android 14", "6.5” screen display"],
    deposit: "Ksh 1,800 initial deposit, Ksh 500/week"
  },
  {
    id: 9,
    name: "M-KOPA X20",
    image: mkopa9,
    description: "High performance phone for everyday use.",
    specs: ["4GB RAM, 64GB Storage", "4500 mAh Battery", "48MP Camera", "Android 12", "6.3” screen display"],
    deposit: "Ksh 4,199 initial deposit, Ksh 450/week"
  },
  {
    id: 10,
    name: "M-KOPA X2",
    image: mkopa10,
    description: "Fast processor and long battery life for multitasking.",
    specs: ["6GB RAM, 128GB Storage", "5000 mAh Battery", "50MP Main Camera", "Android 13", "6.6” screen display"],
    deposit: "Ksh 3,299 initial deposit, Ksh 550/week"
  },
  {
    id: 11,
    name: "M-KOPA Z3",
    image: mkopa11,
    description: "Designed for entertainment and productivity on the go.",
    specs: ["4GB RAM, 128GB Storage", "5000 mAh Battery", "50MP Camera", "Android 14", "6.5” screen display"],
    deposit: "Ksh 2,100 initial deposit, Ksh 600/week"
  },
  {
    id: 12,
    name: "M-KOPA X1",
    image: mkopa12,
    description: "Affordable smartphone with great features.",
    specs: ["3GB RAM, 64GB Storage", "4000 mAh Battery", "32MP Camera", "Android 12", "6.1” screen display"],
    deposit: "Ksh 1,200 initial deposit, Ksh 400/week"
  }
];

const Mkopa = () => {
  const [showSpecs, setShowSpecs] = useState({});

  const toggleSpecs = (id) => {
    setShowSpecs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="p-0">
      {/* Hero Section */}
      <div
        className="relative w-full h-72 sm:h-96 bg-cover bg-center flex items-center justify-center 
                   border-4 border-white rounded-2xl shadow-2xl overflow-hidden"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg mb-4">
            Own Your Dream Phone Today, Pay in Easy Installments 📱✨
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow">
            With M-KOPA financing, you don’t need to wait! Make a small deposit, take your phone home instantly, 
            and repay the balance in flexible weekly installments. Upgrade your lifestyle without breaking the bank!
          </p>
        </div>

        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-2xl border-4 border-transparent 
                        bg-gradient-to-r from-green-400 via-yellow-400 to-green-600 
                        [mask-image:linear-gradient(white,white)] opacity-30"></div>
      </div>

      {/* Phones Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phones.map((phone) => (
            <div
              key={phone.id}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between"
            >
              <img
                src={phone.image}
                alt={phone.name}
                className="w-full h-48 object-contain mb-3"
              />
              <h3 className="font-semibold text-lg mb-2">{phone.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{phone.description}</p>

              {showSpecs[phone.id] && (
                <div className="text-gray-700 text-sm mb-2">
                  <ul className="list-disc list-inside mb-1">
                    {phone.specs.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                  <p className="font-semibold">Deposit: {phone.deposit}</p>
                </div>
              )}

              <button
                onClick={() => toggleSpecs(phone.id)}
                className="mt-auto border border-green-500 text-green-500 px-4 py-1 rounded 
                           hover:bg-green-500 hover:text-white transition"
              >
                {showSpecs[phone.id] ? "Hide Details" : "View Details"}
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-6">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
            Get your phone
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mkopa;
