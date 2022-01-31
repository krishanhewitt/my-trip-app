import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import TripForm from "./TripForm";

export default function EditTrip() {
  const [trip, setTrip] = useState({});
  const params = useParams();
  const navigate = useNavigate();

    //get trip details from db
    useEffect(() => {
      axios
        .get("http://localhost:8082/api/trips/" + params.tripID)
        .then((res) => {
          setTrip(res.data);
        })
        .catch((err) => {
          console.log("ShowTripDetails Error - No data associated with this ID");
        });
    }, []);

  const onSubmit = (newTrip) => {
    //create the object to update the existing record with
    const data = {
      name: newTrip.name,
      startDate: newTrip.startDate,
      endDate: newTrip.endDate,
      origin: newTrip.origin,
      destination: newTrip.destination,
    };

    //make PUT request to API
    axios
      .put("http://localhost:8082/api/trips", data)
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
      <h1 className="text-center text-2xl mt-4">Edit Trip</h1>
      <p className="text-center text-md">Change trip details</p>
      <TripForm
        buttonLabel='Update'
        handleSubmit={onSubmit}
        trip={trip} />
    </div>
  );
};