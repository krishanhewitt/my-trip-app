import { useState } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";

export default function AuthProvider({ children }) {
  const emptyToken = {
    isLoggedIn: false,
    userInfo: {
      id: null,
      nickname: null,
    },
  };
  const [token, setToken] = useState(emptyToken);

  const setUserToken = async () => {
    try {
      let loggedIn = false;
      let res = await axios
        .get("http://localhost:8082/api/users/isUserAuth", {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        })
        .then((res) => {
          if (res.data.isLoggedIn) {
            setToken(res.data);
            loggedIn = res.data.isLoggedIn;
          } 
        })
        return loggedIn;
    } catch (err) {
      console.error(err)
    };
  };

  const removeUserToken = () => {
    setToken(emptyToken);
  };

  const value = {
    token,
    setUserToken,
    removeUserToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
