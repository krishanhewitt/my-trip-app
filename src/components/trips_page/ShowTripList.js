import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TripCard from "./TripCard";

const ShowTripList = () => {

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    //request trip data
    console.log("making request for trip data");
    axios
    .get("http://localhost:8082/api/trips")
    .then((res) => {
      setTrips(res.data)
    })
    .catch((err) => {
      console.log("Error from ShowTripList");
    });
  }, []);

    //create TripCard components using the data retrieved
    let tripList;
    if (!trips) {
      tripList = "there is no trip records!";
    } else {
      tripList = trips.map((trip, k) => <TripCard trip={trip} key={k} />);
    }
  
    //display 'My Trips' page 
    return (
      <div>
        <div className="flex flex-col">
          <h1 className="text-center text-2xl my-4">My Trips</h1>
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center m-auto"
            to="/createtrip"
          >
            Add a new Trip
          </Link>
        </div>
        <div className="flex">
            {tripList}
        </div>
      </div>
    );
}

export default ShowTripList;
