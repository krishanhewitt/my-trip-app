import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TripCard from "./TripCard";

class ShowTripList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/trips")
      .then((res) => {
        this.setState({
          trips: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowTripList");
      });
  }

  render() {
    const trips = this.state.trips;
    console.log("PrintTrip: " + JSON.stringify(trips));
    let tripList;

    if (!trips) {
      tripList = "there is no trip records!";
    } else {
      tripList = trips.map((trip, k) => <TripCard trip={trip} key={k} />);
    }

    return (
      <div>
        <div className="flex flex-col">
          <h1 className="text-center text-2xl my-4">My Trips</h1>
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center m-auto"
            to="/createtrip"
          >
            Add a new Trip
          </Link>
        </div>
        <div className="flex">
            {tripList}
        </div>
      </div>
    );
  }
}

export default ShowTripList;
