import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";

// Example data — replace image imports with your own
import ip7 from "../assets/ip7.jpg";
import ip1 from "../assets/ip1.jpg";
import ip2 from "../assets/ip2.jpg";
import ip3 from "../assets/ip3.jpg";
import ip4 from "../assets/ip4.jpg";

const products = [
  {
    id: 1,
    name: "Apple iPhone 16",
    oldPrice: 76000,
    newPrice: 62000,
    image: ip1,
    badge: "HOT",
  },
  {
    id: 2,
    name: "Apple iPhone 16 Plus",
    oldPrice: 96000,
    newPrice: 88000,
    image: ip2,
    badge: "NEW",
  },
  {
    id: 3,
    name: "Apple iPhone 16 Pro",
    oldPrice: 133000,
    newPrice: 122000,
    image: ip3,
    badge: "HOT",
  },
  {
    id: 4,
    name: "Apple iPhone 16 Pro Max",
    oldPrice: 146000,
    newPrice: 131000,
    image: ip4,
    badge: "SALE",
  },
];

export default function NewIphones() {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <h2 className="text-3xl font-extrabold  text-gray-900 tracking-tight">
          New iPhones
        </h2>
        <span className="text-lg font-medium text-green-500 italic">
          Premium Collection
        </span>
      </div>

      {/* Banner */}
      <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl relative">
        <img
          src={ip7}
          alt="iPhone Banner"
          className="w-full h-[450px] object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:-translate-y-1 relative"
          >
            {/* Golden Hover Flash */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-tr from-yellow-400 via-yellow-200 to-transparent pointer-events-none"></div>

            {/* Image Section */}
            <div className="relative overflow-hidden">
              {product.badge && (
                <span
                  className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full shadow-md ${
                    product.badge === "SALE"
                      ? "bg-red-500 text-white"
                      : product.badge === "NEW"
                      ? "bg-blue-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {product.badge}
                </span>
              )}

              {/* Wishlist Icon */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow hover:scale-110 transition"
              >
                <Heart
                  size={18}
                  className={
                    wishlist.includes(product.id)
                      ? "fill-red-500 text-red-500"
                      : "text-gray-600"
                  }
                />
              </button>

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[300px] md:h-[350px] object-contain bg-white group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Details */}
            <div className="p-5 relative z-10 bg-white">
              <h3 className="text-base font-semibold text-gray-900 group-hover:text-black/80 transition">
                {product.name}
              </h3>

              {/* Prices */}
              <div className="mt-2 flex items-center gap-2">
                <span className="text-lg text-black font-bold">
                  KSh {product.newPrice.toLocaleString()}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  KSh {product.oldPrice.toLocaleString()}
                </span>
              </div>

              {/* Save % */}
              <div className="text-green-600 text-xs mt-1">
                Save{" "}
                {Math.round(
                  ((product.oldPrice - product.newPrice) / product.oldPrice) *
                    100
                )}
                %
              </div>

              {/* Add to Cart */}
              <button className="mt-5 flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-800 transition-all">
                <ShoppingCart size={16} /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
