import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './components/home_page/Home'
import MyTrips from './components/trips_page/MyTrips'
import Settings from './components/settings_page/Settings'



function App() {
  return (
    <div>
      <BrowserRouter>        
        <NavBar></NavBar>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="mytrips" element={<MyTrips />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
