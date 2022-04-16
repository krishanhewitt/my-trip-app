import React, { useEffect, useState } from "react";
import axios from "axios";
import TripCard from "./TripCard";

export default function ShowTrips() {
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
      console.log("Error from ShowTrips");
    });
  }, []);

    //create TripCard components using the data retrieved
    let tripList;
    if (!trips) {
      tripList = "there is no trip records!";
    } else {
      tripList = trips.map((trip, k) => <TripCard trip={trip} key={k} />);
    }
  
    //return list of TripCards 
    return (
      <div>
        <div className="flex">
            {tripList}
        </div>
      </div>
    );
}