import React, { useState, useEffect } from "react";
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
import axios from "axios";

export default function App() {
  const emptyToken = {
    isLoggedIn: false,
    userInfo: {
      id: null,
      nickname: null,
    },
  };
  const [token, setToken] = useState(emptyToken);

  useEffect(() => {
    setUserToken();
  }, []);

  const setUserToken = () => {
    axios
      .get("http://localhost:8082/api/users/isUserAuth", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data.isLoggedIn) setToken(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    setToken(emptyToken);
  };

  return (
    <div>
      <BrowserRouter>
        <NavBar isLoggedIn={token.isLoggedIn} userInfo={token.userInfo} />
        <div className="content mb-20 sm:mb-0">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register setUserToken={setUserToken} />} />
            <Route path="/login" element={<Login setUserToken={setUserToken} />} />
            <Route path="/home" element={<Home />} />
            <Route path="my-trips" element={<MyTrips />} />
            <Route path="show-trip/:tripID" element={<ShowTripDetails />} />
            <Route path="edit-trip/:tripID" element={<EditTrip />} />
            <Route path="add-trip" element={<CreateTrip />} />
            <Route
              path="settings/:userID"
              element={<Settings onLogout={handleLogout} />}
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
