import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ShowTripDetails = () => {
  const [trip, setTrip] = useState({});

  const location = useLocation();
  const { tripID } = location.state;

  const navigate = useNavigate();

  //get trip details from db
  useEffect(() => {
    axios
      .get("http://localhost:8082/api/trips/" + tripID)
      .then((res) => {
        setTrip(res.data);
      })
      .catch((err) => {
        console.log("ShowTripDetails Error - No data associated with this ID");
      });
  }, []);

  //delete trip
  const onDeleteClick = useCallback(() => {
    axios
      .delete("http://localhost:8082/api/trips/" + tripID)
      .then((res) => {
        console.log("successfully deleted");
        navigate("/showTripList");
      })
      .catch((err) => {
        console.log("ShowTripDetails Error - Trip has not been deleted");
      });
  });

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
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center m-auto"
          to="/showTripList"
        >
          Back To Trip List
        </Link>
      </div>
      <div>{TripItem}</div>

      <div className="flex">
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={onDeleteClick.bind(trip._id)}
        >
          Delete Trip
        </button>

        <Link
          to={`/edit-trip/${trip._id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Edit Trip
        </Link>
      </div>
    </div>
  );
};

export default ShowTripDetails;
