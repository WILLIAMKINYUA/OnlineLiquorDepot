import React, { useState } from 'react';  // Importing useState from react
import { Preview } from '../../Video';  // Assuming Preview is correctly imported
import './Home.css';  // Importing CSS file for styling
import Footer from '../Contact/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    const [live, setLive] = useState(Preview);  // Initializing state with Preview data

    // Function to filter live videos based on some criteria (assuming x.lives is the filter criteria)
    const filterLive = (lives) => {
        const filteredLive = Preview.filter((x) => x.lives === lives);  // Filter based on x.lives === lives
        setLive(filteredLive);  // Update live state with filtered results
    };

    return (
        <div className='huge'>
            {live.map((x) => (
                <div className="homevideobg" key={x.id}>
                    <video src={x.image} alt="Video not found, kindly reload...." loop autoPlay muted className='bgvideo' />
                </div>
            ))}
            <p className='themes'>
                Good Drink for Good Moments
            </p>
            <div className='btw'>
                <Link className='btn' onClick='/Product'>Shop Now</Link>
                <Link className='btn btn' onClick='/Blog'>Read more</Link>{/* Fixed className for second Link */}
            </div>
            <Footer/>
        </div>
    );
};

export default Home;