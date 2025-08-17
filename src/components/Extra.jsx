import React, { useEffect, useRef, useState } from "react";
import { MdHeadsetMic } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

// Small helper components ----------------------------------------------------
const DropdownCard = ({ children, className = "" }) => (
  <div
    className={`absolute top-full right-0 mt-2 w-72 bg-white border rounded-lg shadow-lg p-4 z-50 ${className}`}
    role="dialog"
  >
    {children}
  </div>
);

const AuthForms = ({ isLogin, onToggle }) => (
  <>
    {isLogin ? (
      <form className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-500"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-sm"
        >
          Login
        </button>
      </form>
    ) : (
      <form className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-500"
            placeholder="••••••••"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-500"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-sm"
        >
          Sign up
        </button>
      </form>
    )}
    <p className="text-sm text-center mt-3 text-gray-600">
      {isLogin ? "Don’t have an account? " : "Already have an account? "}
      <button
        type="button"
        className="text-blue-600 hover:underline cursor-pointer"
        onClick={onToggle}
      >
        {isLogin ? "Sign up" : "Login"}
      </button>
    </p>
  </>
);

const CartBody = () => (
  <div className="space-y-3">
    <div className="flex justify-between">
      <p className="text-sm font-medium">Item 1</p>
      <p className="text-sm font-medium">KSh 1000</p>
    </div>
    <div className="flex justify-between">
      <p className="text-sm font-medium">Item 2</p>
      <p className="text-sm font-medium">KSh 2000</p>
    </div>
    <div className="flex justify-between">
      <p className="text-sm font-medium">Item 3</p>
      <p className="text-sm font-medium">KSh 3000</p>
    </div>
    <div className="flex justify-between border-t pt-3">
      <p className="text-sm font-medium">Total</p>
      <p className="text-sm font-medium">KSh 6000</p>
    </div>
    <div className="flex gap-2 mt-3">
      <button className="w-1/2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-sm">
        View Cart
      </button>
      <button className="w-1/2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-sm">
        Checkout
      </button>
    </div>
  </div>
);

// Main component -------------------------------------------------------------
const Header = () => {
  // UI state
  const [isLogin, setIsLogin] = useState(true);
  const [desktop, setDesktop] = useState({ accountOpen: false, cartOpen: false });
  const [mobile, setMobile] = useState({ menuOpen: false, accountOpen: false, cartOpen: false });

  // Refs for outside-click handling
  const accountRef = useRef(null);
  const cartRef = useRef(null);
  const mobileAccountRef = useRef(null);
  const mobileCartRef = useRef(null);

  const closeAll = () => {
    setDesktop({ accountOpen: false, cartOpen: false });
    setMobile((m) => ({ ...m, accountOpen: false, cartOpen: false }));
  };

  // Outside click + ESC to close
  useEffect(() => {
    const onDown = (e) => {
      const targets = [accountRef.current, cartRef.current, mobileAccountRef.current, mobileCartRef.current];
      const clickedInside = targets.some((el) => el && el.contains(e.target));
      if (!clickedInside) closeAll();
    };
    const onEsc = (e) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <header className="w-full shadow-sm border-b">
      {/* Desktop Header */}
      <div className="hidden md:flex container mx-auto px-3 pt-1 pb-0 items-center justify-between bg-white">
        <img src={logo} alt="Jontech logo" className="h-40 w-auto" />

        {/* Search Bar */}
        <div className="flex flex-1 max-w-2xl mx-8">
          <select className="border border-blue-700 text-sm py-2 rounded-l-md focus:outline-none">
            <option>All Categories</option>
            <option>Smartphones</option>
            <option>Airpods</option>
            <option>Headphones</option>
            <option>Chargers</option>
            <option>Television</option>
            <option>Screen Protectors</option>
            <option>Phone Covers</option>
            <option>Speakers</option>
          </select>
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 border-t border-b border-blue-600 px-4 py-2 focus:outline-none"
          />
          <button className="bg-blue-700 text-white px-4 py-2 rounded-r-md hover:bg-blue-800 transition">
            Search
          </button>
        </div>

        {/* Top right icons */}
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <MdHeadsetMic className="text-2xl text-blue-600" />
            <div>
              <p className="text-gray-500">Need Help?</p>
              <p className="text-blue-600 font-semibold">0795299451</p>
            </div>
          </div>

          {/* Account (Desktop) */}
          <div className="relative" ref={accountRef}>
            <button
              onClick={() => setDesktop((d) => ({ accountOpen: !d.accountOpen, cartOpen: false }))}
              className="flex items-center space-x-2 hover:text-blue-800 transition cursor-pointer"
              aria-haspopup="dialog"
              aria-expanded={desktop.accountOpen}
            >
              <FaRegUser className="text-2xl" />
              <div className="text-left">
                <p className="text-gray-600 text-sm">My Account</p>
                <p className="font-semibold text-sm">{isLogin ? "Login" : "Sign up"}</p>
              </div>
            </button>

            {desktop.accountOpen && (
              <DropdownCard>
                <AuthForms isLogin={isLogin} onToggle={() => setIsLogin((v) => !v)} />
              </DropdownCard>
            )}
          </div>

          {/* Cart (Desktop) */}
          <div className="relative" ref={cartRef}>
            <button
              onClick={() => setDesktop((d) => ({ accountOpen: false, cartOpen: !d.cartOpen }))}
              className="relative flex items-center space-x-2 cursor-pointer hover:text-blue-800 transition"
              aria-haspopup="dialog"
              aria-expanded={desktop.cartOpen}
            >
              <div className="relative pr-1">
                <BsCart3 className="text-2xl" />
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 rounded-full">
                  0
                </span>
              </div>
              <div className="text-sm pl-1 text-left">
                <p className="text-gray-600">My Cart</p>
                <p className="font-semibold">(KSh 0)</p>
              </div>
            </button>

            {desktop.cartOpen && (
              <DropdownCard>
                <CartBody />
              </DropdownCard>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Navigation Menu */}
      <nav className="hidden md:block w-full border-t shadow-sm bg-white">
        <div className="container mx-auto px-4 py-2 flex flex-wrap gap-x-6">
          <Link to="" className="text-gray-900 hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/smartphones" className="text-gray-900 hover:text-blue-600 font-medium">
            Smart Phones
          </Link>
          <Link to="/mkopa" className="text-gray-900 hover:text-blue-600 font-medium">
            M-Kopa Phones
          </Link>
          <Link to="/televisions" className="text-gray-900 hover:text-blue-600 font-medium">
            Televisions
          </Link>
          <Link to="/mobile-accessories" className="text-gray-900 hover:text-blue-600 font-medium">
            Mobile Accessories
          </Link>
          <Link to="/laptops" className="text-gray-900 hover:text-blue-600 font-medium">
            Laptops
          </Link>
          <Link to="/tablets" className="text-gray-900 hover:text-blue-600 font-medium">
            Tablets
          </Link>
          <Link to="/audio" className="text-gray-900 hover:text-blue-600 font-medium">
            Audio
          </Link>
          <Link to="/storage" className="text-gray-900 hover:text-blue-600 font-medium">
            Storage Devices
          </Link>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="md:hidden bg-gray-100 flex items-center justify-between px-4 py-2">
        <img src={logo} alt="Jontech Logo" className="h-10" />

        <div className="flex items-center gap-5 text-xl">
          <button aria-label="Search" className="cursor-pointer text-blue-500">
            <AiOutlineSearch />
          </button>

          <button
            className="cursor-pointer text-blue-500"
            aria-expanded={mobile.menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobile((m) => ({ ...m, menuOpen: !m.menuOpen }))}
          >
            <GiHamburgerMenu />
          </button>

          {/* Account (Mobile) */}
          <div className="relative" ref={mobileAccountRef}>
            <button
              className="cursor-pointer text-blue-500"
              aria-haspopup="dialog"
              aria-expanded={mobile.accountOpen}
              onClick={() => setMobile((m) => ({ ...m, accountOpen: !m.accountOpen, cartOpen: false }))}
            >
              <FaRegUser />
            </button>
            {mobile.accountOpen && (
              <DropdownCard className="left-auto right-0 w-[92vw] max-w-sm">
                <AuthForms isLogin={isLogin} onToggle={() => setIsLogin((v) => !v)} />
              </DropdownCard>
            )}
          </div>

          {/* Cart (Mobile) */}
          <div className="relative" ref={mobileCartRef}>
            <button
              className="cursor-pointer text-blue-500 relative"
              aria-haspopup="dialog"
              aria-expanded={mobile.cartOpen}
              onClick={() => setMobile((m) => ({ ...m, cartOpen: !m.cartOpen, accountOpen: false }))}
            >
              <BsCart3 />
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 rounded-full">
                0
              </span>
            </button>
            {mobile.cartOpen && (
              <DropdownCard className="left-auto right-0 w-[92vw] max-w-sm">
                <CartBody />
              </DropdownCard>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobile.menuOpen && (
        <div id="mobile-nav" className="md:hidden bg-yellow-100 px-6 py-4 space-y-3 shadow-md border-t">
          <Link to="" className="text-gray-900 hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/smartphones" className="block text-gray-900 hover:text-blue-600 font-medium transition duration-200">
            Smart Phones
          </Link>
          <Link to="/mkopa" className="block text-gray-900 hover:text-blue-600 font-medium transition duration-200">
            M-Kopa Phones
          </Link>
          <Link to="/televisions" className="block text-gray-900 hover:text-blue-600 font-medium transition duration-200">
            Televisions
          </Link>
          <Link to="/mobile-accessories" className="block text-gray-900 hover:text-blue-600 font-medium transition duration-200">
            Mobile Accessories
          </Link>
          <Link to="/laptops" className="block text-gray-900 hover:text-blue-600 font-medium transition duration-200">
            Laptops
          </Link>
          <Link to="/tablets" className="block text-gray-900 hover:text-blue-600 font-medium transition duration-200">
            Tablets
          </Link>
          <Link to="/audio" className="block text-gray-900 hover:text-blue-600 font-medium transition duration-200">
            Audio
          </Link>
          <Link to="/storage" className="block text-gray-900 hover:text-blue-600 font-medium transition duration-200">
            Storage Devices
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
