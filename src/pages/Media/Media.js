import React from 'react';
import main from '../../images/media/main.png';
import photo1 from '../../images/media/1.png';
import photo2 from '../../images/media/2.png';
import photo3 from '../../images/media/3.png';
import photo4 from '../../images/media/4.jpg';
import photo5 from '../../images/media/5.jpg';
import photo6 from '../../images/media/6.jpg';

const Media = () => {
    return (
        <div className='my-10'>
            <h1 className='text-center text-2xl mb-10'>Media Publications</h1>
            <div className='grid grid-cols-2 mx-10'>
            <img src={main} alt="" />
                <div className='grid grid-cols-2 gap-4 mx-6'>
                <img src={photo1} alt="" />
                <img src={photo2} alt="" />
                <img src={photo3} alt="" />
                <img src={photo4} alt="" />
                </div>

            </div>

            <div className='grid grid-cols-3 mx-10 gap-4 my-4' >
                <img src={photo5} alt="" />
                <img src={photo6} alt="" />
                <img src={photo5} alt="" />

            </div>
        </div>
    );
};

export default Media;


