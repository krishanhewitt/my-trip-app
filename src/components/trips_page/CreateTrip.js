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
        <Link to="/">Show Trip List</Link>
        <br></br>
        <h1>Add Trip</h1>
        <p>Create new book</p>
        <div>
          <form noValidate onSubmit={this.onSubmit}>
            <div>
              <input
                type="text"
                placeholder="Name of the Trip"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div>
              <input
                type="date"
                placeholder="Start Date"
                name="startDate"
                value={this.state.startDate}
                onChange={this.onChange}
              />
            </div>

            <div>
              <input
                type="date"
                placeholder="End Date"
                name="endDate"
                value={this.state.endDate}
                onChange={this.onChange}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Starting Location"
                name="origin"
                value={this.state.origin}
                onChange={this.onChange}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Ending Location"
                name="destination"
                value={this.state.destination}
                onChange={this.onChange}
              />
            </div>

            <input
              type="submit"
            />
            
          </form>
        </div>
      </div>
    );
  }
}

export default CreateTrip;
