import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class CreateTrip extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      startDate: "",
      endDate: "",
      origin: "",
      destination: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      origin: this.state.origin,
      destination: this.state.destination,
    };

    axios
      .post("http://localhost:8082/api/trips", data)
      .then((res) => {
        this.setState({
          name: "",
          startDate: "",
          endDate: "",
          origin: "",
          destination: "",
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in CreateTrip!");
      });
  };

  render() {
    return (
      <div>
        <h1 className="text-center text-2xl mt-4">Add Trip</h1>
        <p className="text-center text-md">Create new trip</p>
        <div>
          <form className="flex justify-center" noValidate onSubmit={this.onSubmit}>
            {/* Name Field */}
            <div className="mx-3 my-6">
              <div className="flex">
              <div className="w-full px-3 pb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="new-trip-name"
                >
                  Trip Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Name"
                  id="new-trip-name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              </div>

              <div className="flex flex-col sm:flex-row">
              {/* Origin Field */}
              <div className="w-full md:w-1/2 px-3 pb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="new-trip-origin"
                >
                  Trip Origin
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Starting Location"
                  id="new-trip-origin"
                  value={this.state.origin}
                  onChange={this.onChange}
                />
              </div>

              {/* Destination Field */}
              <div className="w-full md:w-1/2 px-3 pb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="new-trip-destination"
                >
                  Trip Destination
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Ending Location"
                  id="new-trip-destination"
                  value={this.state.destination}
                  onChange={this.onChange}
                />
              </div>
              </div>

              <div className="flex flex-col sm:flex-row">
              {/* Start Date Field */}
              <div className="w-full md:w-1/2 px-3 pb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="new-trip-start-date"
                >
                  Trip Start Date
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="date"
                  placeholder="Start Date"
                  id="new-trip-start-date"
                  value={this.state.startDate}
                  onChange={this.onChange}
                />
              </div>

              {/* End Date Field */}
              <div className="w-full md:w-1/2 px-3 pb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="new-trip-end-date"
                >
                  Trip End Date
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="date"
                  placeholder="End Date"
                  id="new-trip-end-date"
                  value={this.state.endDate}
                  onChange={this.onChange}
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
}

export default CreateTrip;
