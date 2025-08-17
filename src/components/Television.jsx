import React, { useState } from 'react'

// --- Image imports (add your actual files at ../assets/sma1.jpg ... sma20.jpg) ---
import sma1 from '../assets/sma1.jpg'
import sma2 from '../assets/sma2.jpg'
import sma3 from '../assets/sma3.jpg'
import sma4 from '../assets/sma4.jpg'
import sma5 from '../assets/sma5.jpg'
import sma6 from '../assets/sma6.jpg'
import sma7 from '../assets/sma7.jpg'
import sma8 from '../assets/sma8.jpg'
import sma9 from '../assets/sma9.jpg'
import sma10 from '../assets/sma10.jpg'
import sma11 from '../assets/sma11.jpg'
import sma12 from '../assets/sma12.jpg'
import sma13 from '../assets/sma13.jpg'
import sma14 from '../assets/sma14.jpg'
import sma15 from '../assets/sma15.jpg'
import sma16 from '../assets/sma16.jpg'
import sma17 from '../assets/sma17.jpg'
import sma18 from '../assets/sma18.jpg'
import sma19 from '../assets/sma19.jpg'
import sma20 from '../assets/sma20.jpg'

// optional fallback
const FALLBACK = '/images/fallback.jpg'

const televisionsData = {
  Samsung: [
    { id: 1,  name: 'Samsung QLED 55"',         price: 'KSh 99,000',  description: 'Vibrant colors with Quantum Dot technology.', image: sma1 },
    { id: 2,  name: 'Samsung QLED 65"',         price: 'KSh 120,000', description: 'Larger screen with enhanced picture quality.', image: sma2 },
    { id: 3,  name: 'Samsung Crystal UHD 50"',  price: 'KSh 45,000',  description: 'Affordable 4K UHD TV with PurColor technology.', image: sma3 },
    { id: 4,  name: 'Samsung The Frame 55"',    price: 'KSh 150,000', description: 'Transforms into a piece of art when not in use.', image: sma4 },
  ],
  LG: [
    { id: 13, name: 'LG OLED C1 55"',           price: 'KSh 150,000', description: 'Perfect black levels and infinite contrast.', image: sma5 },
    { id: 14, name: 'LG OLED CX 65"',           price: 'KSh 180,000', description: 'AI Picture Pro for enhanced visuals.',        image: sma6 },
    { id: 15, name: 'LG NanoCell 55"',          price: 'KSh 60,000',  description: 'Wide color gamut with NanoCell technology.',  image: sma7 },
    { id: 16, name: 'LG NanoCell 65"',          price: 'KSh 75,000',  description: 'Real 4K with NanoCell color technology.',     image: sma8 },
  ],
  Sony: [
    { id: 25, name: 'Sony Bravia X90J 55"',     price: 'KSh 130,000', description: 'Full Array LED with local dimming.',          image: sma9 },
    { id: 26, name: 'Sony Bravia X95J 65"',     price: 'KSh 160,000', description: 'XR Cognitive Processor for enhanced picture.', image: sma10 },
    { id: 27, name: 'Sony Bravia A80J 55"',     price: 'KSh 140,000', description: 'OLED with Pixel Contrast Booster.',           image: sma11 },
    { id: 28, name: 'Sony Bravia A90J 65"',     price: 'KSh 180,000', description: 'OLED with XR OLED Contrast Pro.',             image: sma12 },
  ],
  Vitron: [
    { id: 37, name: 'Vitron 32" Digital LED TV', price: 'KSh 9,999',  description: 'Affordable 32" LED TV with USB and HDMI ports.', image: sma13 },
    { id: 38, name: 'Vitron 32" Smart Android TV', price: 'KSh 11,999', description: 'Smart TV with built-in Wi-Fi and Android OS.',  image: sma14 },
    { id: 39, name: 'Vitron 43" Smart Android TV', price: 'KSh 18,999', description: 'Larger screen with smart features.',            image: sma15 },
    { id: 40, name: 'Vitron 50" 4K Smart TV',     price: 'KSh 35,000', description: '4K resolution with smart capabilities.',        image: sma16 },
  ],
  Hisense: [
    { id: 49, name: 'Hisense 32A4K FHD Smart TV', price: 'KSh 19,999', description: 'FHD resolution with VIDAA Smart OS.',      image: sma17 },
    { id: 50, name: 'Hisense 43A4K UHD Smart TV', price: 'KSh 30,000', description: '4K UHD with smart features.',             image: sma18 },
    { id: 51, name: 'Hisense 50A6K UHD Smart TV', price: 'KSh 45,000', description: 'Large screen with UHD resolution.',        image: sma19 },
    { id: 52, name: 'Hisense 55A6K UHD Smart TV', price: 'KSh 55,000', description: '4K UHD with HDR support.',                 image: sma20 },
  ],
}

const Television = () => {
  const [selectedBrand, setSelectedBrand] = useState('All')
  const brands = ['All', ...Object.keys(televisionsData)]

  const getDisplayedItems = () => {
    if (selectedBrand === 'All') {
      return Object.values(televisionsData).flat()
    }
    return televisionsData[selectedBrand]
  }

  return (
    <div className="p-6">
      {/* Navigation */}
      <div className="flex gap-4 mb-6 flex-wrap">
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => setSelectedBrand(brand)}
            className={`px-4 py-2 rounded ${selectedBrand === brand ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {brand}
          </button>
        ))}
      </div>

      {/* Display Items */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {getDisplayedItems().map((item) => (
          <div key={item.id} className="border p-4 rounded shadow hover:shadow-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-contain mb-2 bg-white"
              loading="lazy"
              onError={(e) => { e.currentTarget.src = FALLBACK }}
            />
            <h3 className="text-center font-semibold">{item.name}</h3>
            <p className="text-center text-sm text-gray-500">{item.price}</p>
            <p className="text-center text-xs text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Television
