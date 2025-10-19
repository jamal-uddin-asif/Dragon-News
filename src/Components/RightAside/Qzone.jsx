import React from 'react';
import swiming from '../../assets/swimming.png'
import Class from '../../assets/class.png'
import play from '../../assets/playground.png'

const Qzone = () => {
    return (
        <div>
            <img className='w-full' src={swiming} alt="" />
            <img className='w-full' src={Class} alt="" />
            <img className='w-full' src={play} alt="" />
        </div>
    );
};

export default Qzone;