import { Link } from "react-router-dom";

function MyTrips() {
    return (
        <div>
            <h1>My Trips</h1>
            <Link to="/createtrip">Add a new Trip</Link>
            
        </div>

    )
}

export default MyTrips;