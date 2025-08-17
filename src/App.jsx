import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './Pages/Home'
import LaptopPage from './Pages/LaptopPage'
import StoragePage from './Pages/StoragePage'
import MkopaPage from './Pages/MkopaPage'
import SmartPhonesPage from './Pages/SmartPhonesPage'
import TabletsPage from './Pages/TabletsPage'
import Audio from './components/Audio'
import MobileAccessoriesPage from './Pages/MobileAccessoriesPage'
import TelevisionPage from './Pages/TelevisionPage'

const App = () => {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/laptops' element={<LaptopPage/>}/>
          <Route path='/storage' element={<StoragePage/>}/>
          <Route path='/mkopa' element={<MkopaPage/>}/>
          <Route path='/smartphones' element={<SmartPhonesPage/>}/>
          <Route path='/tablets' element={<TabletsPage/>}/>
          <Route path='/audio' element={<Audio/>}/>
          <Route path='/mobile-accessories' element={<MobileAccessoriesPage/>}/>
          <Route path='/televisions' element={<TelevisionPage/>}/>
        </Routes>
        <Footer/>
      </Router>
  )
}

export default App