import React, { useState } from 'react'
import { Tabs, Tab, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material'

// --- Image imports ---
import acc1 from '../assets/acc1.jpg'
import acc2 from '../assets/acc2.jpg'
import acc3 from '../assets/acc3.jpg'
import acc4 from '../assets/acc4.jpg'
import acc5 from '../assets/acc5.jpg'
import acc6 from '../assets/acc6.jpg'
import acc7 from '../assets/acc7.jpg'
import acc8 from '../assets/acc8.jpg'
import acc9 from '../assets/acc9.jpg'
import acc10 from '../assets/acc10.jpg'
import acc11 from '../assets/acc11.jpg'
import acc12 from '../assets/acc12.jpg'
import acc13 from '../assets/acc13.jpg'
import acc14 from '../assets/acc14.jpg'
import acc15 from '../assets/acc15.jpg'
import acc16 from '../assets/acc16.jpg'
import acc17 from '../assets/acc17.jpg'
import acc18 from '../assets/acc18.jpg'
import acc19 from '../assets/acc19.jpg'
import acc20 from '../assets/acc20.jpg'
import acc21 from '../assets/acc21.jpg'
import acc22 from '../assets/acc22.jpg'
import acc23 from '../assets/acc23.jpg'
import acc24 from '../assets/acc24.jpg'
import acc25 from '../assets/acc25.jpg'
import acc26 from '../assets/acc26.jpg'
import acc27 from '../assets/acc27.jpg'
import acc28 from '../assets/acc28.jpg'
import acc29 from '../assets/acc29.jpg'
import acc30 from '../assets/acc30.jpg'
import acc31 from '../assets/acc31.jpg'
import acc32 from '../assets/acc32.jpg'
import acc33 from '../assets/acc33.jpg'
import acc34 from '../assets/acc34.jpg'
import acc35 from '../assets/acc35.jpg'
import acc36 from '../assets/acc36.jpg'
import acc37 from '../assets/acc37.jpg'
import acc38 from '../assets/acc38.jpg'
import acc39 from '../assets/acc39.jpg'
import acc40 from '../assets/acc40.jpg'
import acc41 from '../assets/acc41.jpg'
import acc42 from '../assets/acc42.jpg'
import acc43 from '../assets/acc43.jpg'
import acc44 from '../assets/acc44.jpg'
import acc45 from '../assets/acc45.jpg'
import acc46 from '../assets/acc46.jpg'
import acc47 from '../assets/acc47.jpg'
import acc48 from '../assets/acc48.jpg'

const FALLBACK = '/images/fallback.jpg'

const accessoriesData = {
  chargers: [
    { name: 'Amaya Fast Charger 20W',         price: 'KSh 1,300', description: 'Fast charging USB-C charger.',                 image: acc1 },
    { name: 'Anker PowerPort 30W',            price: 'KSh 2,500', description: 'Compact wall charger with 30W output.',        image: acc2 },
    { name: 'Samsung 25W Super Fast Charger', price: 'KSh 2,800', description: 'Official Samsung fast charger.',               image: acc3 },
    { name: 'Oraimo 18W Charger',             price: 'KSh 1,000', description: 'Affordable fast charger.',                     image: acc4 },
    { name: 'UGreen 20W USB-C Charger',       price: 'KSh 1,700', description: 'Small and portable charger.',                  image: acc5 },
    { name: 'Baseus 30W GaN Charger',         price: 'KSh 2,900', description: 'High-speed GaN charger.',                      image: acc6 },
    { name: 'Xiaomi 33W Charger',             price: 'KSh 2,300', description: 'Fast charger for Xiaomi phones.',              image: acc7 },
    { name: 'Apple 20W USB-C Charger',        price: 'KSh 3,500', description: 'Official Apple fast charger.',                 image: acc8 },
    { name: 'Huawei 40W SuperCharge',         price: 'KSh 3,200', description: 'Huawei certified fast charger.',               image: acc9 },
    { name: 'OnePlus Warp Charger 30W',       price: 'KSh 2,800', description: 'Official OnePlus charger.',                    image: acc10 },
    { name: 'Realme 30W Dart Charger',        price: 'KSh 2,100', description: 'Fast charging for Realme phones.',             image: acc11 },
    { name: 'Amaya Quick Charger 18W',        price: 'KSh 1,100', description: 'Affordable fast charging option.',             image: acc12 },
  ],
  powerbanks: [
    { name: 'Anker PowerCore 10000',          price: 'KSh 3,500', description: 'Compact 10000mAh powerbank.',                  image: acc13 },
    { name: 'Amaya 20000mAh PB',              price: 'KSh 4,500', description: 'High capacity powerbank.',                     image: acc14 },
    { name: 'Xiaomi 10000mAh PB',             price: 'KSh 3,200', description: 'Fast charging portable power.',                image: acc15 },
    { name: 'Oraimo 10000mAh PB',             price: 'KSh 2,900', description: 'Reliable powerbank for daily use.',            image: acc16 },
    { name: 'UGreen 20000mAh PB',             price: 'KSh 5,000', description: 'Dual output high capacity PB.',                image: acc17 },
    { name: 'Baseus 10000mAh PB',             price: 'KSh 3,300', description: 'Compact and portable.',                        image: acc18 },
    { name: 'Samsung 10000mAh PB',            price: 'KSh 4,000', description: 'Official Samsung powerbank.',                  image: acc19 },
    { name: 'Apple 10000mAh PB',              price: 'KSh 5,500', description: 'High-quality Apple powerbank.',                image: acc20 },
    { name: 'Realme 10000mAh PB',             price: 'KSh 3,100', description: 'Affordable fast charging PB.',                 image: acc21 },
    { name: 'Huawei 20000mAh PB',             price: 'KSh 5,200', description: 'High-capacity Huawei powerbank.',              image: acc22 },
    { name: 'OnePlus 10000mAh PB',            price: 'KSh 4,200', description: 'Official OnePlus fast PB.',                    image: acc23 },
    { name: 'Amaya 10000mAh PB',              price: 'KSh 3,000', description: 'Reliable and affordable.',                     image: acc24 },
  ],
  phonecovers: [
    { name: 'iPhone 14 Silicone Case',        price: 'KSh 1,200', description: 'Soft and protective cover.',                    image: acc25 },
    { name: 'Samsung Galaxy S23 Case',        price: 'KSh 1,500', description: 'Durable TPU case.',                             image: acc26 },
    { name: 'Xiaomi Redmi Note 12 Cover',     price: 'KSh 1,000', description: 'Stylish protective case.',                      image: acc27 },
    { name: 'Oraimo Flexible Case',           price: 'KSh 900',  description: 'Affordable soft TPU case.',                      image: acc28 },
    { name: 'Huawei P50 Case',                price: 'KSh 1,300', description: 'Slim protective phone cover.',                  image: acc29 },
    { name: 'OnePlus Nord Case',              price: 'KSh 1,100', description: 'Shockproof TPU case.',                          image: acc30 },
    { name: 'Realme 10 Pro Cover',            price: 'KSh 950',  description: 'Flexible and durable cover.',                    image: acc31 },
    { name: 'Samsung Galaxy A53 Cover',       price: 'KSh 1,050', description: 'Slim TPU phone case.',                          image: acc32 },
    { name: 'iPhone 13 Leather Case',         price: 'KSh 2,500', description: 'Premium leather protective case.',              image: acc33 },
    { name: 'Huawei P40 Pro Case',            price: 'KSh 1,500', description: 'Stylish protective cover.',                     image: acc34 },
    { name: 'Xiaomi Poco X4 Pro Case',        price: 'KSh 1,100', description: 'Durable TPU case.',                             image: acc35 },
    { name: 'iPhone SE Cover',                price: 'KSh 800',  description: 'Affordable protective cover.',                    image: acc36 },
  ],
  protectors: [
    { name: 'iPhone 14 Tempered Glass',       price: 'KSh 900',  description: 'Anti-scratch screen protector.',                 image: acc37 },
    { name: 'Samsung Galaxy S23 Glass',       price: 'KSh 1,100', description: 'High clarity tempered glass.',                  image: acc38 },
    { name: 'Xiaomi Redmi Note 12 Glass',     price: 'KSh 800',  description: 'Strong tempered glass protector.',               image: acc39 },
    { name: 'Oraimo Screen Protector',        price: 'KSh 700',  description: 'Affordable tempered glass.',                     image: acc40 },
    { name: 'Huawei P50 Glass',               price: 'KSh 950',  description: 'Full coverage tempered glass.',                  image: acc41 },
    { name: 'OnePlus Nord Glass',             price: 'KSh 850',  description: 'Scratch-resistant tempered glass.',              image: acc42 },
    { name: 'Realme 10 Pro Protector',        price: 'KSh 750',  description: 'Durable tempered glass.',                        image: acc43 },
    { name: 'Samsung Galaxy A53 Protector',   price: 'KSh 800',  description: 'Affordable anti-scratch glass.',                 image: acc44 },
    { name: 'iPhone 13 Tempered Glass',       price: 'KSh 1,200', description: 'Premium screen protection.',                    image: acc45 },
    { name: 'Huawei P40 Pro Glass',           price: 'KSh 900',  description: 'High clarity tempered glass.',                   image: acc46 },
    { name: 'Xiaomi Poco X4 Pro Glass',       price: 'KSh 850',  description: 'Strong protective tempered glass.',              image: acc47 },
    { name: 'iPhone SE Glass Protector',      price: 'KSh 700',  description: 'Affordable screen protection.',                  image: acc48 },
  ],
}

const MobileAccessories = () => {
  const [selectedCategory, setSelectedCategory] = useState('chargers')

  return (
    <Grid container direction="column" sx={{ width: '100%', m: 0 }}>
      {/* Tabs row */}
      <Grid item>
        <Tabs
          value={selectedCategory}
          onChange={(e, val) => setSelectedCategory(val)}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Chargers" value="chargers" />
          <Tab label="Powerbanks" value="powerbanks" />
          <Tab label="Phone Covers" value="phonecovers" />
          <Tab label="Protectors" value="protectors" />
        </Tabs>
      </Grid>

      {/* Products grid: EXACT 3 rows × 4 cols, no side gaps */}
      <Grid item>
        <Grid
          container
          spacing={0}                      // no gaps
          columns={{ xs: 4, sm: 8, md: 12 }} // 12 slots at md+, for 4 equal columns
          sx={{ width: '100%', m: 0 }}
        >
          {accessoriesData[selectedCategory].slice(0, 12).map((item, index) => (
            <Grid
              item
              xs={4}   // 1 col on phones (4/4)
              sm={4}   // 2 cols on small screens (8/4)
              md={3}   // 4 cols at md+ (12/3)
              key={`${selectedCategory}-${index}`}
            >
              <Card
                sx={{
                  width: '100%',
                  height: '100%',
                  transition: 'transform 0.3s',
                  overflow: 'hidden',
                  '&:hover': { transform: 'scale(1.02)' },
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.name}
                  onError={(e) => { e.currentTarget.src = FALLBACK }}
                  sx={{
                    height: 220,           // keeps rows even
                    objectFit: 'contain',  // show the entire image
                    bgcolor: 'background.paper',
                    display: 'block',
                    width: '100%',
                  }}
                />
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography variant="body1" color="text.primary">
                    {item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MobileAccessories
