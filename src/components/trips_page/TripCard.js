import React from 'react';
import { Link } from 'react-router-dom';

const TripCard = (props) => {
    const trip  = props.trip;

    return(
        <div className="card-container">
            <img src="https://images.unsplash.com/photo-1538681105587-85640961bf8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-trip/${trip._id}`}>
                        { trip.title }
                    </Link>
                </h2>
                <h3>{trip.author}</h3>
                <p>{trip.description}</p>
            </div>
        </div>
    )
};

export default TripCard;