import React from 'react';
import Accolades from './Accolades';
import Banner from './Banner';
import Blog from './Blog';
import Collapse from './Collapse';
import FAQ from './FAQ';
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
            <Accolades></Accolades>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;