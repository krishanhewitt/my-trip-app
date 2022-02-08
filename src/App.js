import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './components/home/Home'
import MyTrips from './components/trips/MyTrips'
import ShowTripDetails from './components/trips/ShowTripDetails'
import Settings from './components/settings/Settings'
import CreateTrip from './components/trips/CreateTrip'
import EditTrip from './components/trips/EditTrip'

export default function App() {
  return (
    <div>
      <BrowserRouter>        
        <NavBar></NavBar>
        <div className="content mb-20 sm:mb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="my-trips" element={<MyTrips />} />            
            <Route path="show-trip/:tripID" element={<ShowTripDetails />} />
            <Route path="edit-trip/:tripID" element={<EditTrip />} />
            <Route path="add-trip" element={<CreateTrip />} />              
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}