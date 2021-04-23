import React from 'react';
import './Home.css'
// import HomeImage from '../../Assets/placeholder_img5.jpg'

function Home() {
    return (
        <>
            <div id="home">
                {/* <div className="homeBackground">
                    <img id="HomeImg" src={HomeImage} alt="clarissa & Billy" />
                </div> */}
                <div className="HomeInfo">
                    <div className="homeTitle">
                        <p >We're getting married!</p>
                    </div>
                    <div className="weddingInfo">
                        <p className="homeTime">When: 00/00/0000 at 00:00</p>

                        <p className="homeLocation">Where: 1234 Wedding Venue</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;