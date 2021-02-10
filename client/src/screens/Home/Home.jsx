import React from 'react';
import './Home.css'

function Home() {
    return (
        <>
            <div id="home">
                <div className="homeTitle">
                    <p >We're getting married!</p>
                </div>
                <div className="weddingInfo">
                    <p className="homeTime">When: 00/00/0000 at 00:00</p>

                    <p className="homeLocation">Where: 1234 Wedding Venue</p>
                </div>
            </div>
        </>
    );
}

export default Home;