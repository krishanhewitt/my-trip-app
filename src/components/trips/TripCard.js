import React from "react";
import { Link } from "react-router-dom";
import mtn from "../../devImages/mountain.jpg";

export default function TripCard(props) {
  const trip = props.trip;
  const parsedStartDate = new Date(trip.startDate).toLocaleDateString("en-CA");
  const parsedEndDate = new Date(trip.endDate).toLocaleDateString("en-CA");

  return (
    <Link to={`/show-trip/${trip._id}`} state={{ tripID: trip._id }}>
      <div className="w-64 m-4 rounded-lg shadow-[0_17px_10px_-10px_rgba(0,0,0,0.4)] transition ease-in-out duration-300 hover:-translate-y-4 hover:shadow-[0_37px_20px_-15px_rgba(0,0,0,0.2)]">
        <img className="h-48 object-cover" src={mtn} alt="" />
        <div className="px-6 py-4">
          <p className="font-medium text-xl mb-2">{trip.name}</p>
          <div className="text-gray-700 text-base">
            <p>
              {trip.origin} &#8594; {trip.destination}
            </p>
            <p>
              {parsedStartDate} &#8594; {parsedEndDate}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
