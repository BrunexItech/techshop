import React, { useState } from 'react'

// Image imports (adjust the relative path to your setup if needed)
import tab1 from '../assets/tab1.jpg'
import tab2 from '../assets/tab2.jpg'
import tab3 from '../assets/tab3.jpg'
import tab4 from '../assets/tab4.jpg'
import tab5 from '../assets/tab5.jpg'
import tab6 from '../assets/tab6.jpg'
import tab7 from '../assets/tab7.jpg'
import tab8 from '../assets/tab8.jpg'
import tab9 from '../assets/tab9.jpg'
import tab10 from '../assets/tab10.jpg'
import tab11 from '../assets/tab11.jpg'
import tab12 from '../assets/tab12.jpg'
import tab13 from '../assets/tab13.jpg'
import tab14 from '../assets/tab14.jpg'
import tab15 from '../assets/tab15.jpg'
import tab16 from '../assets/tab16.jpg'
import tab17 from '../assets/tab17.jpg'
import tab18 from '../assets/tab18.jpg'
import tab19 from '../assets/tab19.jpg'
import tab20 from '../assets/tab20.jpg'
import tab21 from '../assets/tab21.jpg'
import tab22 from '../assets/tab22.jpg'
import tab23 from '../assets/tab23.jpg'
import tab24 from '../assets/tab24.jpg'
import tab25 from '../assets/tab25.jpg'
import tab26 from '../assets/tab26.jpg'
import tab27 from '../assets/tab27.jpg'
import tab28 from '../assets/tab28.jpg'
import tab29 from '../assets/tab29.jpg'
import tab30 from '../assets/tab30.jpg'

// Helper (optional): fall back image if any import fails at runtime
const FallbackImg = '/images/fallback.jpg' // change if you have a different fallback

const tableData = {
  Samsung: [
    { id: 'samsung-1', name: 'Galaxy Tab S9',       price: '120,000 KSh',         specs: '12GB RAM, 512GB Storage, 12.4" AMOLED',       image: tab1 },
    { id: 'samsung-2', name: 'Galaxy Tab A8',       price: '35,000–40,000 KSh',   specs: '4GB RAM, 64GB Storage, 10.5" LCD',            image: tab2 },
    { id: 'samsung-3', name: 'Galaxy Tab S8+',      price: '95,000–105,000 KSh',  specs: '8GB RAM, 256GB Storage, 12.0" AMOLED',        image: tab3 },
    { id: 'samsung-4', name: 'Galaxy Tab A7',       price: '25,000–30,000 KSh',   specs: '3GB RAM, 64GB Storage, 10.4" TFT',            image: tab4 },
    { id: 'samsung-5', name: 'Galaxy Tab S9 Ultra', price: '180,000–220,000 KSh', specs: '12GB RAM, 512GB Storage, 14.6" Dynamic AMOLED', image: tab5 },
    { id: 'samsung-6', name: 'Galaxy Tab S6 Lite',  price: '45,000–55,000 KSh',   specs: '4GB RAM, 64GB Storage, 10.4" TFT',            image: tab6 },
  ],
  Apple: [
    { id: 'apple-1', name: 'iPad Pro 12.9',  price: '250,000–300,000 KSh', specs: '12GB RAM, 512GB Storage, Liquid Retina XDR', image: tab7 },
    { id: 'apple-2', name: 'iPad Air',       price: '120,000–150,000 KSh', specs: '8GB RAM, 256GB Storage, 10.9" Liquid Retina', image: tab8 },
    { id: 'apple-3', name: 'iPad Mini',      price: '90,000–100,000 KSh',  specs: '4GB RAM, 256GB Storage, 8.3" Liquid Retina',  image: tab9 },
    { id: 'apple-4', name: 'iPad 10th Gen',  price: '70,000–80,000 KSh',   specs: '4GB RAM, 64GB Storage, 10.9" Retina Display', image: tab10 },
    { id: 'apple-5', name: 'iPad Pro 11',    price: '200,000–240,000 KSh', specs: '8GB RAM, 256GB Storage, 11" Liquid Retina',   image: tab11 },
    { id: 'apple-6', name: 'iPad 9th Gen',   price: '55,000–65,000 KSh',   specs: '3GB RAM, 64GB Storage, 10.2" Retina',         image: tab12 },
  ],
  Lenovo: [
    { id: 'lenovo-1', name: 'Tab P12 Pro',        price: '90,000–100,000 KSh', specs: '8GB RAM, 256GB Storage, 12.6" AMOLED',  image: tab13 },
    { id: 'lenovo-2', name: 'Tab M10 FHD Plus',   price: '25,000–30,000 KSh',  specs: '4GB RAM, 64GB Storage, 10.3" FHD',      image: tab14 },
    { id: 'lenovo-3', name: 'Tab P11',            price: '50,000–60,000 KSh',  specs: '6GB RAM, 128GB Storage, 11" LCD',       image: tab15 },
    { id: 'lenovo-4', name: 'Tab M8',             price: '15,000–18,000 KSh',  specs: '2GB RAM, 32GB Storage, 8" HD Display',  image: tab16 },
    { id: 'lenovo-5', name: 'Tab P11 Pro Gen 2',  price: '70,000–85,000 KSh',  specs: '6GB RAM, 256GB Storage, 11.2" OLED',    image: tab17 },
    { id: 'lenovo-6', name: 'Tab K10',            price: '28,000–35,000 KSh',  specs: '4GB RAM, 64GB Storage, 10.3" FHD',      image: tab18 },
  ],
  Huawei: [
    { id: 'huawei-1', name: 'MatePad Pro',      price: '110,000–130,000 KSh', specs: '8GB RAM, 256GB Storage, 12.6" OLED',  image: tab19 },
    { id: 'huawei-2', name: 'MatePad T10',      price: '15,000–18,000 KSh',   specs: '3GB RAM, 32GB Storage, 9.7" LCD',     image: tab20 },
    { id: 'huawei-3', name: 'MatePad 11',       price: '70,000–80,000 KSh',   specs: '6GB RAM, 128GB Storage, 11" LCD',     image: tab21 },
    { id: 'huawei-4', name: 'MatePad T8',       price: '10,000–12,000 KSh',   specs: '2GB RAM, 32GB Storage, 8" Display',   image: tab22 },
    { id: 'huawei-5', name: 'MatePad Air',      price: '85,000–100,000 KSh',  specs: '8GB RAM, 256GB Storage, 11.5" OLED',  image: tab23 },
    { id: 'huawei-6', name: 'MatePad SE 10.4',  price: '28,000–35,000 KSh',   specs: '4GB RAM, 64GB Storage, 10.4" FHD',    image: tab24 },
  ],
  TabletsForKids: [
    { id: 'kids-1', name: 'Amazon Fire HD 10 Kids',    price: '18,000–20,000 KSh', specs: '32GB Storage, 10.1" Display, Kid-Proof Case', image: tab25 },
    { id: 'kids-2', name: 'Lenovo Tab M10 HD Kids',    price: '14,000–16,000 KSh', specs: '32GB Storage, 10.1" Display, Kid Mode',       image: tab26 },
    { id: 'kids-3', name: 'Samsung Galaxy Tab A Kids', price: '20,000–22,000 KSh', specs: '32GB Storage, 8" Display, Kids Mode',        image: tab27 },
    { id: 'kids-4', name: 'Kurio Tab Connect',         price: '12,000–14,000 KSh', specs: '16GB Storage, 7" Display, Parental Controls', image: tab28 },
    { id: 'kids-5', name: 'Amazon Fire 7 Kids',        price: '10,000–12,000 KSh', specs: '16GB Storage, 7" Display, 2-year worry-free', image: tab29 },
    { id: 'kids-6', name: 'Dragon Touch Y88X Pro',     price: '9,000–11,000 KSh',  specs: '16GB Storage, 7" Display, Kid Case',          image: tab30 },
  ],
}

const Tablets = () => {
  const [filter, setFilter] = useState('All')
  const brands = Object.keys(tableData)
  const display = filter === 'All' ? brands : [filter]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Top Tablets in Kenya (2025)</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        <button
          onClick={() => setFilter('All')}
          className={`btn py-2 px-4 rounded shadow ${filter==='All' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
        >
          All
        </button>
        {brands.map((b) => (
          <button
            key={b}
            onClick={() => setFilter(b)}
            className={`btn py-2 px-4 rounded shadow ${filter===b ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
          >
            {b === 'TabletsForKids' ? 'Tablets for Kids' : b}
          </button>
        ))}
      </div>

      {/* Tables / Cards */}
      {display.map((brand) => (
        <section key={brand} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            {brand === 'TabletsForKids' ? 'Tablets for Kids' : brand}
          </h2>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {tableData[brand].map((tablet) => (
              <div
                key={tablet.id}
                className="flex flex-col border rounded-lg shadow hover:shadow-lg transition duration-300 bg-white"
              >
                {/* Image */}
                <div className="h-48 w-full rounded-t-lg flex items-center justify-center  bg-white">
                  <img
                    src={tablet.image}
                    alt={tablet.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = FallbackImg }}
                  />
                </div>

                {/* Tablet Info */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2">{tablet.name}</h3>
                  <p className="text-gray-700 mb-2">{tablet.specs}</p>
                  <p className="text-blue-600 font-bold mb-4">{tablet.price}</p>
                  <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition duration-300">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default Tablets
