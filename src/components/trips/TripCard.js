import React from 'react';
import { Link } from 'react-router-dom';

export default function TripCard(props) {
    const trip  = props.trip;
    const parsedStartDate = new Date(trip.startDate).toISOString().slice(0, 10);
    const parsedEndDate = new Date(trip.endDate).toISOString().slice(0, 10);

    return(
        <div className="card-container w-50 m-4 text-center rounded-lg shadow-xl">
            <p className='font-medium'>
                <Link to={`/show-trip/${trip._id}`} state={{tripID: trip._id}}>{ trip.name }</Link>
            </p>
            <img src="https://images.unsplash.com/photo-1538681105587-85640961bf8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
            <p>{trip.origin} &#8594; {trip.destination}</p>
            <p>{parsedStartDate} &#8594; {parsedEndDate}</p>
        </div>
    )
};