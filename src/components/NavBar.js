import { Home, Compass, Settings } from "react-feather";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      {/* Desktop Navbar */}
      <nav className="bg-gray-100 justify-between py-4 px-8 hidden sm:flex">
        <div className="w-full flex justify-between">
          <Link to="/">RememberMyTrip</Link>
          <ul className="flex">
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/mytrips">My Trips</Link>
            </li>
            <li className="px-4">
              <Link to="/settings">Settings</Link>
            </li>
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
            <li className="flex text-lg">
              <Link to="/">
                <Home size={24} className="m-auto" />
                Home
              </Link>
            </li>
            <li className="flex text-lg">
              <Link to="/mytrips">
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
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
