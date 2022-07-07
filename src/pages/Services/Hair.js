import React from 'react';
import picture from '../../images/about.jpg';

const Hair = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-10 mx-10'>

                <div> <img src={picture} alt="" /> </div>

                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa aut excepturi illo cupiditate exercitationem nemo reiciendis? Illo magni, deleniti illum reprehenderit consectetur enim sed aliquam, laborum reiciendis culpa alias. Expedita.</p>
                </div>
            </div>
        </div>
    );
};

export default Hair;