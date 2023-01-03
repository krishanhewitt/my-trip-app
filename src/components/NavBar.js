import { Home, Compass, Settings, UserPlus, LogIn } from "react-feather";
import useAuth from "./user-auth/useAuth";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { token } = useAuth();
  return (
    <div>
      {/* Desktop Navbar */}
      <nav className="bg-gradient-to-r from-sky-500 to-indigo-500 justify-between py-4 px-8 hidden sm:flex">
        <div className="w-full flex justify-between leading-normal tracking-normal text-white">
          {token.isLoggedIn ? (
            <>
              <Link to="/home">RememberMyTrip</Link>
              <ul className="flex">
                <li className="px-4">
                  <Link to="/home">Home</Link>
                </li>
                <li className="px-4">
                  <Link to="/my-trips">My Trips</Link>
                </li>
                <li className="px-4">
                  <Link to={`/settings/${token.userInfo.id}`}>Settings</Link>
                </li>
              </ul>
            </>
          ) : (
            <>
              <Link to="/">RememberMyTrip</Link>
              <ul className="flex">
                <li className="px-4">
                  <Link to="/register">Register</Link>
                </li>
                <li className="px-4">
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="bg-gray-100 py-4 flex sm:hidden fixed bottom-0 w-full">
        <div className="container flex">
          {token.isLoggedIn ? (
            <>
              <Link to="/home" className="hidden sm:flex">
                RememberMyTrip
              </Link>
              <ul className="flex justify-around px-2 flex-1">
                <li className="flex text-lg">
                  <Link to="/home">
                    <Home size={24} className="m-auto" />
                    Home
                  </Link>
                </li>
                <li className="flex text-lg">
                  <Link to="/my-trips">
                    <Compass size={24} className="m-auto" />
                    My Trips
                  </Link>
                </li>
                <li className="flex text-lg">
                  <Link to={`/settings/${token.userInfo.id}`}>
                    <Settings size={24} className="m-auto" />
                    Settings
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <>
              <Link to="/" className="hidden sm:flex">
                RememberMyTrip
              </Link>
              <ul className="flex justify-around px-2 flex-1">
                <li>
                  <Link to="/register">
                    <UserPlus size={24} className="m-auto" />
                    Register
                  </Link>
                </li>
                <li className="flex text-lg">
                  <Link to="/login">
                    <LogIn size={24} className="m-auto" />
                    Login
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
