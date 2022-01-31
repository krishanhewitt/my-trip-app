import React from "react";
import ShowTrips from "./ShowTrips";
import PrimaryBtn from "../common/PrimaryBtn";

export default function MyTrips() {
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="text-center text-2xl my-4">My Trips</h1>
        <PrimaryBtn path="/add-trip" name="Add a new Trip" />
      </div>
      <ShowTrips />  
    </div>
  );
}
