import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormField from "../common/FormField";

export default function Login(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
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

    const data = {
      email: user.email,
      password: user.password,
    };

    //send login details to API and receive JWT
    axios.post("http://localhost:8082/api/users/login", data).then((res) => {
      localStorage.setItem("token", res.data.token);
      props.setUserToken();
      navigate("/home");
    });
  };

  return (
    <div>
      <h1 className="text-center text-2xl mt-4">Login</h1>
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
              validation={null}
              errMsgText=""
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
              validation={null}
              errMsgText=""
            />
          </div>

          {/* Login Button */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center m-auto flex">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
