import React, { useState, useEffect } from "react";
import FormField from "../common/FormField";
import * as yup from "yup";

export default function TripForm(props) {
  const [trip, setTrip] = useState({
    name: "",
    origin: "",
    destination: "",
    startDate: "",
    endDate: "",
  });

  const tripSchema = yup.object({
    name: yup.string().required().min(2).max(80),
    origin: yup.string().required().min(2).max(40),
    destination: yup.string().required().min(2).max(40),
    startDate: yup.date().required(),
    endDate: yup.date().required(),
  });

  //if trip data is passed in, then prefill input fields
  useEffect(() => {
    if (props.trip) {
      setTrip(props.trip);
    }
  }, []);

  //keep state up to date when user changes input values
  const onChange = (e) => {
    setTrip((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //final validation check before sending data to back end
  const onSubmit = (e) => {
    e.preventDefault();
    tripSchema.isValid(trip).then(function (valid) {
      if (valid) {
        props.onSubmit(trip);
      }
    });
  };

  return (
    <div>
      <form className="flex justify-center" noValidate onSubmit={onSubmit}>
        {/* Name Field */}
        <div className="mx-3 my-6">
          <div className="flex">
            <div className="w-full px-3 pb-3">
              <FormField
                title="Name"
                type="text"
                placeholder="Eg. Italy 2015"
                name="name"
                value={trip.name}
                onChange={onChange}
                validation={yup.reach(tripSchema, "name")}
                errMsgText="Please enter a trip name between 2 and 80 characters"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row">
            {/* Origin Field */}
            <div className="w-full md:w-1/2 px-3 pb-3">
              <FormField
                title="Origin"
                type="text"
                placeholder="Eg. Canada"
                name="origin"
                value={trip.origin}
                onChange={onChange}
                validation={yup.reach(tripSchema, "origin")}
                errMsgText="Please enter an origin between 2 and 40 characters"
              />
            </div>

            {/* Destination Field */}
            <div className="w-full md:w-1/2 px-3 pb-3">
              <FormField
                title="Destination"
                type="text"
                placeholder="Eg. Italy"
                name="destination"
                value={trip.destination}
                onChange={onChange}
                validation={yup.reach(tripSchema, "destination")}
                errMsgText="Please enter a destination between 2 and 40 characters"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row">
            {/* Start Date Field */}
            <div className="w-full md:w-1/2 px-3 pb-3">
              <FormField
                title="Start Date"
                type="date"
                placeholder="YYYY-MM-DD"
                name="startDate"
                value={trip.startDate}
                onChange={onChange}
                validation={yup.reach(tripSchema, "startDate")}
                errMsgText="Please enter a start date for your trip"
              />
            </div>

            {/* End Date Field */}
            <div className="w-full md:w-1/2 px-3 pb-3">
              <FormField
                title="End Date"
                type="date"
                placeholder="YYYY-MM-DD"
                name="endDate"
                value={trip.endDate}
                onChange={onChange}
                validation={yup.reach(tripSchema, "endDate")}
                errMsgText="Please enter an end date for your trip"
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
