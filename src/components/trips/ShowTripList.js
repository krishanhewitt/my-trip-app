import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TripCard from "./TripCard";
import PrimaryBtn from "../common/PrimaryBtn";

export default function ShowTripList() {

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
          <PrimaryBtn path="/createtrip" name="Add a new Trip" />
        </div>
        <div className="flex">
            {tripList}
        </div>
      </div>
    );
}