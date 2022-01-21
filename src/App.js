import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './components/home/Home'
import ShowTripList from './components/trips/ShowTripList'
import ShowTripDetails from './components/trips/ShowTripDetails'
import Settings from './components/settings/Settings'
import CreateTrip from './components/trips/CreateTrip'

export default function App() {
  return (
    <div>
      <BrowserRouter>        
        <NavBar></NavBar>
        <div className="content mb-20 sm:mb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="showTripList" element={<ShowTripList />} />
            <Route path="createtrip" element={<CreateTrip />} />
            <Route path="settings" element={<Settings />} />
            <Route path="show-trip/:id" element={<ShowTripDetails />} />            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}