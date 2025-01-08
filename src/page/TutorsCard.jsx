import React from 'react';
import { NavLink } from 'react-router-dom';

const TutorsCard = ({ tutors }) => {
    const { _id, name, language, price, review, description, image } = tutors;

    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img 
                    src={image}
                    alt={name} 
                    className="w-full h-52 object-cover "
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p><strong>Language:</strong> {language}</p>
                <p><strong>Price:</strong> ${price}</p>
                <p><strong>Review:</strong> {review} stars</p>
                <div className="card-actions justify-end">

                    <NavLink to={`/tutors/${_id}`}> 
                     <button className="btn btn-primary">Details</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default TutorsCard;
