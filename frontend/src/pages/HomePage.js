import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to the Pet Shelter!</h1>
            <p>Your new best friend is waiting for you.</p>
            <Link to="/pets" className="cta-button">
                See Available Pets
            </Link>
        </div>
    );
};

export default HomePage;
