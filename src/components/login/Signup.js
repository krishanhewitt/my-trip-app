import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import FormField from "../common/FormField";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    nickname: "",
    email: "",
    password: "",
  });

  const userSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8).max(20),
    nickname: yup.string().required().min(1).max(40),
  });

  //keep state up to date when user changes input values
  const onChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //final validation check before sending data to back end
  const onSubmit = (e) => {
    e.preventDefault();
    userSchema.isValid(user).then(function (valid) {
      if (valid) {
        //create the object to insert
        const data = {
          email: user.email,
          password: user.password,
          nickname: user.nickname,
        };
        //make POST request to API
        // axios
        //   .post("http://localhost:8082/api/trips", data)
        //   .then((res) => {
        //     console.log("Success! -> Response: " + JSON.stringify(res));
        //     navigate("/my-trips");
        //   })
        //   .catch((err) => {
        //     console.log("Error in CreateTrip: " + err);
        //   });
      }
    });
  };

  return (
    <div>
      <h1 className="text-center text-2xl mt-4">Signup</h1>
      <form className="flex justify-center" noValidate onSubmit={onSubmit}>
        <div className="mx-3 my-6">
          {/* Email Field */}
          <div className="w-full px-3 pb-3 flex-col">
            <FormField
              title="Email"
              type="text"
              placeholder=""
              name="email"
              value={user.email}
              onChange={onChange}
              validation={yup.reach(userSchema, "email")}
              errMsgText="Please enter a valid email"
            />
          </div>

          {/* Password Field */}
          <div className="w-full px-3 pb-3 flex-col">
            <FormField
              title="Password"
              type="password"
              placeholder=""
              name="password"
              value={user.password}
              onChange={onChange}
              validation={yup.reach(userSchema, "password")}
              errMsgText="Please enter a password between 8-20 characters"
            />
          </div>

          {/* Nickname Field */}
          <div className="w-full px-3 pb-3 flex-col">
            <FormField
              title="Nickname"
              type="text"
              placeholder=""
              name="nickname"
              value={user.nickname}
              onChange={onChange}
              validation={yup.reach(userSchema, "nickname")}
              errMsgText="Please enter a nickname up to 80 characters long"
            />
          </div>
          {/* Create/Update Button */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center m-auto flex">
            Create an Account
          </button>
        </div>
      </form>
    </div>
  );
}
