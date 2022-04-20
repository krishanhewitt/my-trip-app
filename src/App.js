import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/home/Home";
import MyTrips from "./components/trips/MyTrips";
import ShowTripDetails from "./components/trips/ShowTripDetails";
import Settings from "./components/settings/Settings";
import CreateTrip from "./components/trips/CreateTrip";
import EditTrip from "./components/trips/EditTrip";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import NoMatch from "./components/common/NoMatch";
import NavBar from "./components/NavBar";
import AuthProvider from "./components/login/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <div className="content mb-20 sm:mb-0">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="my-trips" element={<MyTrips />} />
            <Route path="show-trip/:tripID" element={<ShowTripDetails />} />
            <Route path="edit-trip/:tripID" element={<EditTrip />} />
            <Route path="add-trip" element={<CreateTrip />} />
            <Route path="settings/:userID" element={<Settings />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
