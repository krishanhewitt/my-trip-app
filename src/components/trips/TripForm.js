import React, { useState, useEffect } from "react";
import FormInput from "../common/FormInput";
import FormLabel from "../common/FormLabel";

export default function TripForm(props) {
  const[trip, setTrip] = useState({
        name: '',
        startDate: '',
        endDate: '',
        origin: '',
        destination: '',
      });

  useEffect(() => {
    //if trip data is passed in, then prefill input fields
    if (props.trip && Object.values(trip).every(x => x === '')) {
      setTrip(props.trip);
    }
  });

  //keep state up to date when user changes input values
  const onChange = (e) => {
    setTrip(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //validate input and send to back end
  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(trip);
  };

  return (
    <div>
      <form className="flex justify-center" noValidate onSubmit={onSubmit}>
        {/* Name Field */}
        <div className="mx-3 my-6">
          <div className="flex">
            <div className="w-full px-3 pb-3">
              <FormLabel htmlFor="name" title="Trip Name" />
              <FormInput
                type="text"
                placeholder="Eg. Italy 2015"
                name="name"
                value={trip.name}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row">
            {/* Origin Field */}
            <div className="w-full md:w-1/2 px-3 pb-6">
              <FormLabel htmlFor="origin" title="Trip Origin" />
              <FormInput
                type="text"
                placeholder="Eg. Kelowna CA"
                name="origin"
                value={trip.origin}
                onChange={onChange}
              />
            </div>

            {/* Destination Field */}
            <div className="w-full md:w-1/2 px-3 pb-6">
              <FormLabel htmlFor="destination" title="Trip Destination" />
              <FormInput
                type="text"
                placeholder="Eg. Venice IT"
                name="destination"
                value={trip.destination}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row">
            {/* Start Date Field */}
            <div className="w-full md:w-1/2 px-3 pb-6">
              <FormLabel htmlFor="startDate" title="Trip Start Date" />
              <FormInput
                type="date"
                placeholder="Start Date"
                name="startDate"
                value={trip.startDate}
                onChange={onChange}
              />
            </div>

            {/* End Date Field */}
            <div className="w-full md:w-1/2 px-3 pb-6">
              <FormLabel htmlFor="endDate" title="Trip End Date" />
              <FormInput
                type="date"
                placeholder="End Date"
                name="endDate"
                value={trip.endDate}
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
