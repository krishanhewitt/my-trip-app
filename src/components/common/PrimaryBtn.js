import React from "react";
import { Link } from "react-router-dom";

const PrimaryBtn = (props) => {
  return (
    <Link
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center m-auto"
      to={props.path}
    >
      {props.name}
    </Link>
  );
}

export default PrimaryBtn;
