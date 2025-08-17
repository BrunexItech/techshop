import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const accessoriesData = {
  chargers: [
    { name: 'Amaya Fast Charger 20W', price: 'KSh 1,200', description: 'Fast charging USB-C charger.', image: 'https://via.placeholder.com/150' },
    { name: 'Anker PowerPort 30W', price: 'KSh 2,500', description: 'Compact wall charger with 30W output.', image: 'https://via.placeholder.com/150' },
    { name: 'Samsung 25W Super Fast Charger', price: 'KSh 2,800', description: 'Official Samsung fast charger.', image: 'https://via.placeholder.com/150' },
    { name: 'Oraimo 18W Charger', price: 'KSh 1,000', description: 'Affordable fast charger.', image: 'https://via.placeholder.com/150' },
    { name: 'UGreen 20W USB-C Charger', price: 'KSh 1,700', description: 'Small and portable charger.', image: 'https://via.placeholder.com/150' },
    { name: 'Baseus 30W GaN Charger', price: 'KSh 2,900', description: 'High-speed GaN charger.', image: 'https://via.placeholder.com/150' },
    { name: 'Xiaomi 33W Charger', price: 'KSh 2,300', description: 'Fast charger for Xiaomi phones.', image: 'https://via.placeholder.com/150' },
    { name: 'Apple 20W USB-C Charger', price: 'KSh 3,500', description: 'Official Apple fast charger.', image: 'https://via.placeholder.com/150' },
    { name: 'Huawei 40W SuperCharge', price: 'KSh 3,200', description: 'Huawei certified fast charger.', image: 'https://via.placeholder.com/150' },
    { name: 'OnePlus Warp Charger 30W', price: 'KSh 2,800', description: 'Official OnePlus charger.', image: 'https://via.placeholder.com/150' },
    { name: 'Realme 30W Dart Charger', price: 'KSh 2,100', description: 'Fast charging for Realme phones.', image: 'https://via.placeholder.com/150' },
    { name: 'Amaya Quick Charger 18W', price: 'KSh 1,100', description: 'Affordable fast charging option.', image: 'https://via.placeholder.com/150' },
  ],
  powerbanks: [
    { name: 'Anker PowerCore 10000', price: 'KSh 3,500', description: 'Compact 10000mAh powerbank.', image: 'https://via.placeholder.com/150' },
    { name: 'Amaya 20000mAh PB', price: 'KSh 4,500', description: 'High capacity powerbank.', image: 'https://via.placeholder.com/150' },
    { name: 'Xiaomi 10000mAh PB', price: 'KSh 3,200', description: 'Fast charging portable power.', image: 'https://via.placeholder.com/150' },
    { name: 'Oraimo 10000mAh PB', price: 'KSh 2,900', description: 'Reliable powerbank for daily use.', image: 'https://via.placeholder.com/150' },
    { name: 'UGreen 20000mAh PB', price: 'KSh 5,000', description: 'Dual output high capacity PB.', image: 'https://via.placeholder.com/150' },
    { name: 'Baseus 10000mAh PB', price: 'KSh 3,300', description: 'Compact and portable.', image: 'https://via.placeholder.com/150' },
    { name: 'Samsung 10000mAh PB', price: 'KSh 4,000', description: 'Official Samsung powerbank.', image: 'https://via.placeholder.com/150' },
    { name: 'Apple 10000mAh PB', price: 'KSh 5,500', description: 'High-quality Apple powerbank.', image: 'https://via.placeholder.com/150' },
    { name: 'Realme 10000mAh PB', price: 'KSh 3,100', description: 'Affordable fast charging PB.', image: 'https://via.placeholder.com/150' },
    { name: 'Huawei 20000mAh PB', price: 'KSh 5,200', description: 'High-capacity Huawei powerbank.', image: 'https://via.placeholder.com/150' },
    { name: 'OnePlus 10000mAh PB', price: 'KSh 4,200', description: 'Official OnePlus fast PB.', image: 'https://via.placeholder.com/150' },
    { name: 'Amaya 10000mAh PB', price: 'KSh 3,000', description: 'Reliable and affordable.', image: 'https://via.placeholder.com/150' },
  ],
  phonecovers: [
    { name: 'iPhone 14 Silicone Case', price: 'KSh 1,200', description: 'Soft and protective cover.', image: 'https://via.placeholder.com/150' },
    { name: 'Samsung Galaxy S23 Case', price: 'KSh 1,500', description: 'Durable TPU case.', image: 'https://via.placeholder.com/150' },
    { name: 'Xiaomi Redmi Note 12 Cover', price: 'KSh 1,000', description: 'Stylish protective case.', image: 'https://via.placeholder.com/150' },
    { name: 'Oraimo Flexible Case', price: 'KSh 900', description: 'Affordable soft TPU case.', image: 'https://via.placeholder.com/150' },
    { name: 'Huawei P50 Case', price: 'KSh 1,300', description: 'Slim protective phone cover.', image: 'https://via.placeholder.com/150' },
    { name: 'OnePlus Nord Case', price: 'KSh 1,100', description: 'Shockproof TPU case.', image: 'https://via.placeholder.com/150' },
    { name: 'Realme 10 Pro Cover', price: 'KSh 950', description: 'Flexible and durable cover.', image: 'https://via.placeholder.com/150' },
    { name: 'Samsung Galaxy A53 Cover', price: 'KSh 1,050', description: 'Slim TPU phone case.', image: 'https://via.placeholder.com/150' },
    { name: 'iPhone 13 Leather Case', price: 'KSh 2,500', description: 'Premium leather protective case.', image: 'https://via.placeholder.com/150' },
    { name: 'Huawei P40 Pro Case', price: 'KSh 1,500', description: 'Stylish protective cover.', image: 'https://via.placeholder.com/150' },
    { name: 'Xiaomi Poco X4 Pro Case', price: 'KSh 1,100', description: 'Durable TPU case.', image: 'https://via.placeholder.com/150' },
    { name: 'iPhone SE Cover', price: 'KSh 800', description: 'Affordable protective cover.', image: 'https://via.placeholder.com/150' },
  ],
  protectors: [
    { name: 'iPhone 14 Tempered Glass', price: 'KSh 900', description: 'Anti-scratch screen protector.', image: 'https://via.placeholder.com/150' },
    { name: 'Samsung Galaxy S23 Glass', price: 'KSh 1,100', description: 'High clarity tempered glass.', image: 'https://via.placeholder.com/150' },
    { name: 'Xiaomi Redmi Note 12 Glass', price: 'KSh 800', description: 'Strong tempered glass protector.', image: 'https://via.placeholder.com/150' },
    { name: 'Oraimo Screen Protector', price: 'KSh 700', description: 'Affordable tempered glass.', image: 'https://via.placeholder.com/150' },
    { name: 'Huawei P50 Glass', price: 'KSh 950', description: 'Full coverage tempered glass.', image: 'https://via.placeholder.com/150' },
    { name: 'OnePlus Nord Glass', price: 'KSh 850', description: 'Scratch-resistant tempered glass.', image: 'https://via.placeholder.com/150' },
    { name: 'Realme 10 Pro Protector', price: 'KSh 750', description: 'Durable tempered glass.', image: 'https://via.placeholder.com/150' },
    { name: 'Samsung Galaxy A53 Protector', price: 'KSh 800', description: 'Affordable anti-scratch glass.', image: 'https://via.placeholder.com/150' },
    { name: 'iPhone 13 Tempered Glass', price: 'KSh 1,200', description: 'Premium screen protection.', image: 'https://via.placeholder.com/150' },
    { name: 'Huawei P40 Pro Glass', price: 'KSh 900', description: 'High clarity tempered glass.', image: 'https://via.placeholder.com/150' },
    { name: 'Xiaomi Poco X4 Pro Glass', price: 'KSh 850', description: 'Strong protective tempered glass.', image: 'https://via.placeholder.com/150' },
    { name: 'iPhone SE Glass Protector', price: 'KSh 700', description: 'Affordable screen protection.', image: 'https://via.placeholder.com/150' },
  ],
};

const MobileAccessories = () => {
  const [selectedCategory, setSelectedCategory] = useState('chargers');

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={selectedCategory}
        onChange={(e, val) => setSelectedCategory(val)}
        centered
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Chargers" value="chargers" />
        <Tab label="Powerbanks" value="powerbanks" />
        <Tab label="Phone Covers" value="phonecovers" />
        <Tab label="Protectors" value="protectors" />
      </Tabs>
      <Box sx={{ p: 3 }}>
        <Grid container spacing={2}>
          {accessoriesData[selectedCategory].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <CardMedia component="img" height="140" image={item.image} alt={item.name} />
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                  <Typography variant="body1" color="text.primary">{item.price}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MobileAccessories;
