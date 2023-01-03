import { Home, Compass, Settings, UserPlus, LogIn } from "react-feather";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      {/* Desktop Navbar */}
      <nav className="bg-gradient-to-r from-sky-500 to-indigo-500 justify-between py-4 px-8 hidden sm:flex">
        <div className="w-full flex justify-between leading-normal tracking-normal text-white">
          <Link to="/">RememberMyTrip</Link>
          <ul className="flex">
            {props.isLoggedIn ? (
              <>
                <li className="px-4">
                  <Link to="/home">Home</Link>
                </li>
                <li className="px-4">
                  <Link to="/my-trips">My Trips</Link>
                </li>
                <li className="px-4">
                  <Link to={`/settings/${props.userInfo.id}`}>Settings</Link>
                </li>
              </>
            ) : (
              <>
                <li className="px-4">
                  <Link to="/register">Register</Link>
                </li>
                <li className="px-4">
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="bg-gray-100 py-4 flex sm:hidden fixed bottom-0 w-full">
        <div className="container flex">
          <Link to="/" className="hidden sm:flex">
            RememberMyTrip
          </Link>
          <ul className="flex justify-around px-2 flex-1">
            {props.isLoggedIn ? (
              <>
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
                  <Link to="/settings">
                    <Settings size={24} className="m-auto" />
                    Settings
                  </Link>
                </li>
              </>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
