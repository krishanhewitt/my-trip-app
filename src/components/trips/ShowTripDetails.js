import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PrimaryBtn from "../common/PrimaryBtn";

export default function ShowTripDetails() {
  //declare hook variables
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

  //delete trip
  const onDeleteClick = () => {
    axios
      .delete("http://localhost:8082/api/trips/" + params.tripID)
      .then((res) => {
        navigate("/my-trips");
      })
      .catch((err) => {
        console.log("ShowTripDetails Error - Trip has not been deleted");
      });
  };

  //build trip detail table
  let TripItem = (
    <div>
      <table>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Name</td>
            <td>{trip.name}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Origin</td>
            <td>{trip.origin}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Destination</td>
            <td>{trip.destination}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Start Date</td>
            <td>{trip.startDate}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>End Date</td>
            <td>{trip.endDate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      <h1 className="text-center text-2xl mt-4">{trip.name}</h1>
      <p className="text-center text-md">View Trip Info</p>
      <div className="flex">
        <PrimaryBtn path="/my-trips" name="Back To Trip List" />
      </div>
      <div>{TripItem}</div>

      <div className="flex my-8">
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center m-auto"
          onClick={onDeleteClick.bind(trip._id)}
        >
          Delete Trip
        </button>
        <PrimaryBtn path={`/edit-trip/${trip._id}`} name="Edit Trip" />
      </div>
    </div>
  );
}
