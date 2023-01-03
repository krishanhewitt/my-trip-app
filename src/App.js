import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NoMatch from "./components/common/NoMatch";
import Landing from "./components/Landing";
import Home from "./components/home/Home";
import Settings from "./components/settings/Settings";
import MyTrips from "./components/trips/MyTrips";
import ShowTripDetails from "./components/trips/ShowTripDetails";
import CreateTrip from "./components/trips/CreateTrip";
import EditTrip from "./components/trips/EditTrip";
import Login from "./components/user-auth/Login";
import Register from "./components/user-auth/Register";
import AuthProvider from "./components/user-auth/AuthProvider";
import ProtectedRoute from "./components/user-auth/ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <div className="content mb-20 sm:mb-0">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route
              path="home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="my-trips" element={<ProtectedRoute><MyTrips /></ProtectedRoute>} />
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
