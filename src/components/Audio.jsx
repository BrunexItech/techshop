import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

// Import all images
import aud1 from '../assets/aud1.jpg';
import aud2 from '../assets/aud2.jpg';
import aud3 from '../assets/aud3.jpg';
import aud4 from '../assets/aud4.jpg';
import aud5 from '../assets/aud5.jpg';
import aud6 from '../assets/aud6.jpg';
import aud7 from '../assets/aud7.jpg';
import aud8 from '../assets/aud8.jpg';
import aud9 from '../assets/aud9.jpg';
import aud10 from '../assets/aud10.jpg';
import aud11 from '../assets/aud11.jpg';
import aud12 from '../assets/aud12.jpg';
import aud13 from '../assets/aud13.jpg';
import aud14 from '../assets/aud14.jpg';
import aud15 from '../assets/aud15.jpg';
import aud16 from '../assets/aud16.jpg';
import aud17 from '../assets/aud17.jpg';
import aud18 from '../assets/aud18.jpg';
import aud19 from '../assets/aud19.jpg';
import aud20 from '../assets/aud20.jpg';
import aud21 from '../assets/aud21.jpg';
import aud22 from '../assets/aud22.jpg';
import aud23 from '../assets/aud23.jpg';
import aud24 from '../assets/aud24.jpg';
import aud25 from '../assets/aud25.jpg';
import aud26 from '../assets/aud26.jpg';
import aud27 from '../assets/aud27.jpg';
import aud28 from '../assets/aud28.jpg';
import aud29 from '../assets/aud29.jpg';
import aud30 from '../assets/aud30.jpg';
import aud31 from '../assets/aud31.jpg';
import aud32 from '../assets/aud32.jpg';
import aud33 from '../assets/aud33.jpg';
import aud34 from '../assets/aud34.jpg';
import aud35 from '../assets/aud35.jpg';
import aud36 from '../assets/aud36.jpg';
import aud37 from '../assets/aud37.jpg';
import aud38 from '../assets/aud38.jpg';
import aud39 from '../assets/aud39.jpg';
import aud40 from '../assets/aud40.jpg';

// Full audio data (8 items per category, with ids)
const audioData = {
  buds: [
    { id: 'aud1', name: 'Amaya Freebuds TK01', price: 'KSh 3,300', description: 'Affordable true wireless earbuds.', image: aud1 },
    { id: 'aud2', name: 'JBL Wave 200TWS', price: 'KSh 7,500', description: 'Noise-cancelling earbuds with JBL sound.', image: aud2 },
    { id: 'aud3', name: 'Oraimo FreePods 3C', price: 'KSh 4,499', description: 'True wireless earbuds with ENC calling.', image: aud3 },
    { id: 'aud4', name: 'Anker Soundcore R50i', price: 'KSh 2,500', description: 'Extra bass earbuds with long battery life.', image: aud4 },
    { id: 'aud5', name: 'Nothing Ear (2024)', price: 'KSh 17,593', description: 'Premium earbuds with ANC.', image: aud5 },
    { id: 'aud6', name: 'Ows Open Ear Headset', price: 'KSh 1,999', description: 'Open-ear design for comfort.', image: aud6 },
    { id: 'aud7', name: 'JBL Tune 125TWS', price: 'KSh 10,000', description: 'JBL Pure Bass true wireless earbuds.', image: aud7 },
    { id: 'aud8', name: 'Sony WF-XB700', price: 'KSh 8,500', description: 'Extra bass earbuds with IPX4 rating.', image: aud8 },
  ],
  speakers: [
    { id: 'aud9', name: 'JBL Flip 5', price: 'KSh 12,000', description: 'Rugged portable speaker, waterproof.', image: aud9 },
    { id: 'aud10', name: 'Sony SRS-XB12', price: 'KSh 8,000', description: 'Compact speaker with extra bass.', image: aud10 },
    { id: 'aud11', name: 'VON VPS15', price: 'KSh 5,995', description: 'Waterproof speaker, 15W output.', image: aud11 },
    { id: 'aud12', name: 'Harman Kardon Onyx Studio 8', price: 'KSh 39,995', description: 'Premium stereo sound speaker.', image: aud12 },
    { id: 'aud13', name: 'JBL Charge 4', price: 'KSh 18,000', description: 'Portable speaker with power bank.', image: aud13 },
    { id: 'aud14', name: 'Anker Soundcore Flare', price: 'KSh 7,500', description: '360° sound with LED light.', image: aud14 },
    { id: 'aud15', name: 'JBL Pulse 3', price: 'KSh 22,000', description: 'Speaker with light show.', image: aud15 },
    { id: 'aud16', name: 'Sony SRS-XB41', price: 'KSh 15,000', description: 'Extra bass speaker with party lights.', image: aud16 },
  ],
  headphones: [
    { id: 'aud17', name: 'JBL Live 670NC', price: 'KSh 16,900', description: 'Noise-cancelling on-ear wireless headphones.', image: aud17 },
    { id: 'aud18', name: 'JBL Live 770NC', price: 'KSh 22,900', description: 'Over-ear headphones with adaptive noise cancelling.', image: aud18 },
    { id: 'aud19', name: 'Anker PowerConf H700', price: 'KSh 19,900', description: 'Active noise cancelling Bluetooth headset.', image: aud19 },
    { id: 'aud20', name: 'Anker Soundcore A30i', price: 'KSh 6,500', description: 'Noise cancelling earbuds with comfortable fit.', image: aud20 },
    { id: 'aud21', name: 'Anker Soundcore Q20i', price: 'KSh 7,900', description: 'Wireless over-ear headphones with hybrid noise cancelling.', image: aud21 },
    { id: 'aud22', name: 'JBL Tour One M2', price: 'KSh 39,900', description: 'Over-ear noise cancelling headphones.', image: aud22 },
    { id: 'aud23', name: 'Sony WH-CH710N', price: 'KSh 15,000', description: 'Wireless noise cancelling over-ear headphones.', image: aud23 },
    { id: 'aud24', name: 'Samsung Galaxy Headphones 2', price: 'KSh 18,000', description: 'Comfortable headphones with deep bass.', image: aud24 },
  ],
  soundbars: [
    { id: 'aud25', name: 'Sony HT-S350', price: 'KSh 25,000', description: '2.1ch soundbar with wireless subwoofer.', image: aud25 },
    { id: 'aud26', name: 'Samsung HW-T450', price: 'KSh 22,500', description: '2.1ch soundbar with DTS Virtual:X.', image: aud26 },
    { id: 'aud27', name: 'LG SN5Y', price: 'KSh 18,000', description: '2.1 channel soundbar with wireless subwoofer.', image: aud27 },
    { id: 'aud28', name: 'JBL Bar 2.1 Deep Bass', price: 'KSh 28,000', description: 'High-powered soundbar with wireless subwoofer.', image: aud28 },
    { id: 'aud29', name: 'Sony HT-X8500', price: 'KSh 30,000', description: '2.1ch soundbar with built-in subwoofer.', image: aud29 },
    { id: 'aud30', name: 'LG SN4', price: 'KSh 15,500', description: '2.1 channel soundbar with AI Sound Pro.', image: aud30 },
    { id: 'aud31', name: 'Samsung HW-Q60T', price: 'KSh 32,000', description: '3.1ch soundbar with acoustic beam.', image: aud31 },
    { id: 'aud32', name: 'JBL Bar Studio', price: 'KSh 14,500', description: 'Compact soundbar with virtual surround.', image: aud32 },
  ],
  microphones: [
    { id: 'aud33', name: 'Blue Yeti USB Mic', price: 'KSh 21,000', description: 'Professional USB microphone for streaming.', image: aud33 },
    { id: 'aud34', name: 'Rode NT-USB', price: 'KSh 18,500', description: 'USB condenser microphone for recording.', image: aud34 },
    { id: 'aud35', name: 'Samson Meteor Mic', price: 'KSh 14,000', description: 'Portable USB microphone for podcasts.', image: aud35 },
    { id: 'aud36', name: 'Shure MV5', price: 'KSh 12,500', description: 'Digital condenser microphone with iOS/PC support.', image: aud36 },
    { id: 'aud37', name: 'Audio-Technica ATR2100x', price: 'KSh 11,500', description: 'USB/XLR dynamic microphone.', image: aud37 },
    { id: 'aud38', name: 'HyperX SoloCast', price: 'KSh 9,500', description: 'USB condenser microphone for streaming.', image: aud38 },
    { id: 'aud39', name: 'Blue Snowball', price: 'KSh 8,500', description: 'Plug & play USB microphone.', image: aud39 },
    { id: 'aud40', name: 'Rode VideoMic NTG', price: 'KSh 22,000', description: 'Shotgun microphone for video recording.', image: aud40 },
  ],
};

const categories = ['buds', 'speakers', 'headphones', 'soundbars', 'microphones'];

const Audio = () => {
  const [selectedCategory, setSelectedCategory] = useState('buds');

  return (
    <Box sx={{ width: '100%', m: 0, p: 0 }}>
      {/* Heading (kept small vertical spacing only) */}
      <Typography variant="h4" align="center" sx={{ fontWeight: 700, my: 2 }}>
        Shop Audio Devices
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 2 }}>
        Choose a category to explore products
      </Typography>

      {/* Tabs */}
      <Tabs
        value={selectedCategory}
        onChange={(e, val) => setSelectedCategory(val)}
        centered
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          mb: 2,
          '& .MuiTab-root': { textTransform: 'none', fontWeight: 500, mx: 1 },
          '& .Mui-selected': { fontWeight: 700, color: 'primary.main' },
          '& .MuiTabs-indicator': { height: 4, borderRadius: 2, backgroundColor: 'primary.main' },
        }}
      >
        <Tab label="Buds" value="buds" />
        <Tab label="Speakers" value="speakers" />
        <Tab label="Headphones" value="headphones" />
        <Tab label="Soundbars" value="soundbars" />
        <Tab label="Microphones" value="microphones" />
      </Tabs>

      {/* Edge-to-edge grid (no horizontal gaps) */}
      <Grid
        container
        spacing={0}                  // no gaps between cells
        alignItems="stretch"
        sx={{
          width: '100%',
          margin: 0,
          padding: 0,
        }}
      >
        {audioData[selectedCategory].map((item) => (
          <Grid
            item
            key={item.id}
            xs={12}
            sm={6}
            md={3}                  // 4 per row on md and up
            sx={{
              display: 'flex',
              p: 0,                 // remove padding so cells touch edges
              m: 0,
            }}
          >
            <Card
              id={item.id}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                borderRadius: 0,     // flush edges with neighbors
                boxShadow: 1,
                transition: 'transform 0.28s, box-shadow 0.28s',
                '&:hover': { transform: 'translateY(-6px)', boxShadow: 4 },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={item.image}
                alt={item.name}
                sx={{ objectFit: 'cover', width: '100%' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {item.description}
                </Typography>
                <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 700 }}>
                  {item.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Audio;
