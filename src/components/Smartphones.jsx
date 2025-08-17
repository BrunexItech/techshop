import React, { useState } from 'react'

// Image imports (adjust the path to your assets folder)
import smp1 from '../assets/smp1.jpg'
import smp2 from '../assets/smp2.jpg'
import smp3 from '../assets/smp3.jpg'
import smp4 from '../assets/smp4.jpg'
import smp5 from '../assets/smp5.jpg'
import smp6 from '../assets/smp6.jpg'
import smp7 from '../assets/smp7.jpg'
import smp8 from '../assets/smp8.jpg'
import smp9 from '../assets/smp9.jpg'
import smp10 from '../assets/smp10.jpg'
import smp11 from '../assets/smp11.jpg'
import smp12 from '../assets/smp12.jpg'
import smp13 from '../assets/smp13.jpg'
import smp14 from '../assets/smp14.jpg'
import smp15 from '../assets/smp15.jpg'
import smp16 from '../assets/smp16.jpg'
import smp17 from '../assets/smp17.jpg'
import smp18 from '../assets/smp18.jpg'
import smp19 from '../assets/smp19.jpg'
import smp20 from '../assets/smp20.jpg'
import smp21 from '../assets/smp21.jpg'


// optional fallback
const FALLBACK = '/images/fallback.jpg'

const phoneData = {
  Samsung: [
    { name: 'Galaxy S24 Ultra',  price: '150,000 KSh',          specs: '12GB RAM, 512GB Storage, 200MP Camera', image: smp1 },
    { name: 'Galaxy S25 Ultra',  price: '130,000–180,000 KSh',  specs: '12GB RAM, 256GB Storage, 200MP Camera',  image: smp2 },
    { name: 'Galaxy S25 Plus',   price: '115,000–127,000 KSh',  specs: '8GB RAM, 256GB Storage, 108MP Camera',   image: smp3 },
  ],
  Tecno: [
    { name: 'Spark 40 Pro Plus', price: '22,700–25,500 KSh',    specs: '8GB RAM, 128GB Storage, 64MP Camera',    image: smp4 },
    { name: 'Spark 40',          price: '24,000–27,800 KSh',    specs: '6GB RAM, 128GB Storage, 64MP Camera',    image: smp5 },
    { name: 'Camon 40',          price: '24,000–27,800 KSh',    specs: '8GB RAM, 128GB Storage, 64MP Camera',    image: smp6 },
  ],
  Infinix: [
    { name: 'Note 50 Pro 4G',    price: '31,000 KSh',           specs: '8GB RAM, 256GB Storage, 108MP Camera',   image: smp7 },
    { name: 'Hot 60 Pro',        price: '22,000 KSh',           specs: '8GB RAM, 128GB Storage, 64MP Camera',    image: smp8 },
    { name: 'Zero 30 5G',        price: '55,000–65,000 KSh',    specs: '12GB RAM, 256GB Storage, 200MP Camera',  image: smp9 },
  ],
  Apple: [
    { name: 'iPhone 16 Pro Max', price: '180,000 KSh',          specs: '8GB RAM, 512GB Storage, 48MP Camera',    image: smp10 },
    { name: 'iPhone 16e',        price: '76,000–102,000 KSh',   specs: '6GB RAM, 256GB Storage, 48MP Camera',    image: smp11 },
    { name: 'iPhone 14 Pro Max', price: '190,000 KSh',          specs: '6GB RAM, 512GB Storage, 48MP Camera',    image: smp12 },
  ],
  Xiaomi_POCO: [
    { name: 'Redmi Note 14 Pro', price: '25,000–30,000 KSh',    specs: '6GB RAM, 128GB Storage, 108MP Camera',   image: smp13 },
    { name: 'Redmi Note 13 Pro', price: '22,000–27,000 KSh',    specs: '6GB RAM, 128GB Storage, 108MP Camera',   image: smp14 },
    { name: 'Poco M7 Pro 5G',    price: '15,000–18,000 KSh',    specs: '4GB RAM, 64GB Storage, 64MP Camera',     image: smp15 },
  ],
  OPPO: [
    { name: 'Reno 7',            price: '55,000 KSh',           specs: '8GB RAM, 128GB Storage, 64MP Camera',    image: smp16 },
    { name: 'A15',               price: '20,000 KSh',           specs: '4GB RAM, 64GB Storage, 13MP Camera',     image: smp17 },
    { name: 'A57',               price: '18,000–22,000 KSh',    specs: '4GB RAM, 64GB Storage, 13MP Camera',     image: smp18 },
  ],
  Others: [
    { name: 'Pixel 8 Pro',       price: '180,000–200,000 KSh',  specs: '8GB RAM, 256GB Storage, 50MP Camera',     image: smp19 },
    { name: 'Pixel 7',           price: '120,000–140,000 KSh',  specs: '6GB RAM, 128GB Storage, 50MP Camera',     image: smp20 },
    { name: 'Pixel 6 Pro',       price: '120,000 KSh',          specs: '6GB RAM, 128GB Storage, 50MP Camera',     image: smp21 }, // reusing smp20; add smp21 if you want unique
  ],
}

const SmartPhones = () => {
  const [filter, setFilter] = useState('All')
  const brands = Object.keys(phoneData)
  const display = filter === 'All' ? brands : [filter]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Smartphones Trending in Kenya (2025)</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        <button onClick={() => setFilter('All')} className="btn">All</button>
        {brands.map((b) => (
          <button key={b} onClick={() => setFilter(b)} className="btn">{b}</button>
        ))}
      </div>

      {display.map((brand) => (
        <section key={brand} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{brand}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {phoneData[brand].map((ph, i) => (
              <div key={i} className="border rounded-lg p-4 flex flex-col shadow hover:shadow-lg">
                {/* Image (no cropping) */}
                <div className="h-48 w-full bg-white mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={ph.image}
                    alt={ph.name}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = FALLBACK }}
                  />
                </div>

                <h3 className="text-xl font-semibold">{ph.name}</h3>
                <p className="text-gray-600 mb-1">{ph.specs}</p>
                <p className="text-blue-600 font-bold mb-2">{ph.price}</p>
                <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default SmartPhones
