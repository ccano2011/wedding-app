import React from 'react';
import Corkboard from '../Corkboard/Corkboard';
import Hero from '../Hero/Hero';
import OurStory from '../OurStory/OurStory';
import Travel from '../Travel/Travel';
import Photos from '../Photos/Photos';
import Registry from '../Registry/Registry';
import RSVP from '../RSVP/RSVP';

function Home(props) {
    return (
        <>
            <Hero />
            <OurStory />
            <Travel />
            <RSVP />
            <Registry />
            <Photos />
            <Corkboard currentUser={props.currentUser} handleLogout={props.handleLogout} />
        </>
    );
}

export default Home;
