import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './components/home_page/Home'
import ShowTripList from './components/trips_page/ShowTripList'
import Settings from './components/settings_page/Settings'
import CreateTrip from './components/trips_page/CreateTrip'


function App() {
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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
