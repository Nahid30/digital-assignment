import React from 'react';
import Banner from './Banner';
import Collapse from './Collapse';
import Instagram from './Instagram';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Collapse></Collapse>
            <Instagram></Instagram>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;