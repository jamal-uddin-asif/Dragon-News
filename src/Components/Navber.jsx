import React from 'react';
import MyLinks from './MyLinks';
import useIcon from '../assets/user.png'
import { Link } from 'react-router';

const Navber = () => {
    return (
        <div className='flex items-center justify-between my-3'>
            <div></div>
            <div className='flex gap-5'>
                <MyLinks to={'/'} className={'text-accent'}>Home</MyLinks>
                <MyLinks to={'/about'} className={'text-accent'}>About</MyLinks>
                <MyLinks to={'/career'} className={'text-accent'}>career</MyLinks>
            </div>
            <div className='flex items-center space-x-2'>
                <img src={useIcon} alt="" />
                <Link to={'/login'}  className='btn btn-primary'>Login</Link>
            </div>
        </div>
    );
};

export default Navber;