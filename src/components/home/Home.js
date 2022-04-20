import { useEffect } from "react";
import useAuth from "../login/useAuth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { token } = useAuth();
  const user = token.userInfo;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token.isLoggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <h1 className="text-center text-2xl my-4">
        Welcome back, {user.nickname}!
      </h1>
    </>
  );
}
