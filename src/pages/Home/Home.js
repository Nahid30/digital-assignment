import React from 'react';
import Banner from './Banner';
import Blog from './Blog';
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
            <Blog></Blog>
        </div>
    );
};

export default Home;