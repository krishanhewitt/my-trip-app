import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TripForm from "./TripForm";

export default function CreateTrip() {
  const navigate = useNavigate();

  const onSubmit = (newTrip) => {
    //create the object to insert
    const data = {
      name: newTrip.name,
      startDate: newTrip.startDate,
      endDate: newTrip.endDate,
      origin: newTrip.origin,
      destination: newTrip.destination,
    };
    //make POST request to API
    axios
      .post("http://localhost:8082/api/trips", data)
      .then((res) => {
        console.log("Success! -> Response: " + JSON.stringify(res));
        navigate("/my-trips");
      })
      .catch((err) => {
        console.log("Error in CreateTrip: " + err);
      });
  };

  return (
    <div>
      <h1 className="text-center text-2xl mt-4">Add Trip</h1>
      <p className="text-center text-md">Create new trip</p>
      <TripForm
        buttonLabel='Create'
        onSubmit={onSubmit}
        trip={undefined}
        />
    </div>
  );
}
