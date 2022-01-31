import React, { useState, useEffect } from "react";

export default function TripForm(props) {
  //use passed in values (if updating), otherwise just initialize state vars as empty strings
  const [trip, setTrip] = useState({
    name: props.trip ? props.trip.name : "",
    startDate: props.trip ? new Date(props.trip.startDate).toLocaleDateString('en-CA') : "",
    endDate: props.trip ? new Date(props.trip.endDate).toLocaleDateString('en-CA') : "",
    origin: props.trip ? props.trip.origin : "",
    destination: props.trip ? props.trip.destination : "",
  });

  //keep state up to date when user changes input values
  const onChange = (e) => {
    setTrip({
      ...trip,
      [e.target.name]: e.target.value,
    });
  };

  //validate input and send to back end
  const onSubmit = (e) => {
    console.log("submited the following: " + JSON.stringify(trip));
    e.preventDefault();
    props.handleSubmit(trip);
  };

  return (
    <div>
      <form className="flex justify-center" noValidate onSubmit={onSubmit}>
        {/* Name Field */}
        <div className="mx-3 my-6">
          <div className="flex">
            <div className="w-full px-3 pb-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Trip Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Eg. Italy 2015"
                name="name"
                required
                defaultValue={trip.name}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row">
            {/* Origin Field */}
            <div className="w-full md:w-1/2 px-3 pb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="origin"
              >
                Trip Origin
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Eg. Kelowna CA"
                name="origin"
                required
                defaultValue={trip.origin}
                onChange={onChange}
              />
            </div>

            {/* Destination Field */}
            <div className="w-full md:w-1/2 px-3 pb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="destination"
              >
                Trip Destination
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Eg. Venice IT"
                name="destination"
                required
                defaultValue={trip.destination}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row">
            {/* Start Date Field */}
            <div className="w-full md:w-1/2 px-3 pb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="startDate"
              >
                Trip Start Date
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="date"
                placeholder="Start Date"
                name="startDate"
                required
                defaultValue={trip.startDate}
                onChange={onChange}
              />
            </div>

            {/* End Date Field */}
            <div className="w-full md:w-1/2 px-3 pb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="endDate"
              >
                Trip End Date
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="date"
                placeholder="End Date"
                name="endDate"
                required
                defaultValue={trip.endDate}
                onChange={onChange}
              />
            </div>
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center m-auto flex">
            {props.buttonLabel}
          </button>
        </div>
      </form>
    </div>
  );
}
