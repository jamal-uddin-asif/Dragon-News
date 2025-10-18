import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
import LatestNews from './LatestNews';
import Navber from './Navber';

const Header = () => {
    return (
        <div className='max-w-6xl mx-auto my-6'>
            <div className='space-y-3 text-center '>
                <img className='mx-auto' src={logo} alt="" />
                <p className='text-accent'>Journalism Without Fear or Favour</p>
                <p>{ format(new Date(),'EEEE, LLLL ')}</p>
            </div>
            <div>
                <LatestNews></LatestNews>
            </div>
            <Navber></Navber>
        </div>
    );
};

export default Header;