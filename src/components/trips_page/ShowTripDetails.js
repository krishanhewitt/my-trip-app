import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class ShowTripDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: {},
    };
    
  }

  componentDidMount() {
    console.log(JSON.stringify(this.props));
    axios
      .get("http://localhost:8082/api/trips/" + this.props.match.params._id)
      .then((res) => {
        // console.log("Print-showTripDetails-API-response: " + res.data);
        this.setState({
          trip: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowTripDetails");
      });
  }

  onDeleteClick(id) {
    axios
      .delete("http://localhost:8082/api/trips/" + id)
      .then((res) => {
        //this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error form ShowTripDetails_deleteClick");
      });
  }

  render() {
    const trip = this.state.trip;
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
        <h1 className="text-center text-2xl mt-4">Trip Details</h1>
        <p className="text-center text-md">View Trip Info</p>
        <div className="flex">
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center m-auto"
            to="/showTripList"
          >
            Show Trip List
          </Link>
        </div>
        <div>{TripItem}</div>

        <div className="flex">
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={this.onDeleteClick.bind(this, trip._id)}
            >
              Delete Trip
            </button>

            <Link
              to={`/edit-trip/${trip._id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Edit Book
            </Link>
        </div>
      </div>
    );
  }
}

export default ShowTripDetails;
