import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateTrip() {
  const navigate = useNavigate();

  const [newTrip, setNewTrip] = useState({
    name: "",
    startDate: "",
    endDate: "",
    origin: "",
    destination: "",
  });

  const onChange = (e) => {
    setNewTrip({
      ...newTrip,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    console.log("submited the following: " + JSON.stringify(newTrip));
    e.preventDefault();

    const data = {
      name: newTrip.name,
      startDate: newTrip.startDate,
      endDate: newTrip.endDate,
      origin: newTrip.origin,
      destination: newTrip.destination,
    };

    axios
      .post("http://localhost:8082/api/trips", data)
      .then((res) => {
        console.log("response: " + JSON.stringify(res));

        //reset state
        setNewTrip({
          name: "",
          startDate: "",
          endDate: "",
          origin: "",
          destination: "",
        });
        navigate("/showTripList");
      })
      .catch((err) => {
        console.log("Error in CreateTrip: " + err);
      });
  };

  return (
    <div>
      <h1 className="text-center text-2xl mt-4">Add Trip</h1>
      <p className="text-center text-md">Create new trip</p>
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
                  defaultValue={newTrip.name}
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
                  defaultValue={newTrip.origin}
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
                  defaultValue={newTrip.destination}
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
                  defaultValue={newTrip.startDate}
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
                  defaultValue={newTrip.endDate}
                  onChange={onChange}
                />
              </div>
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center m-auto flex">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
