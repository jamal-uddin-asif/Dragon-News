import React from 'react';
import MyLinks from './MyLinks';
import useIcon from '../assets/user.png'

const Navber = () => {
    return (
        <div className='flex items-center justify-between'>
            <div></div>
            <div className='flex gap-5'>
                <MyLinks to={'/'} className={'text-accent'}>Home</MyLinks>
                <MyLinks to={'/about'} className={'text-accent'}>About</MyLinks>
                <MyLinks to={'/career'} className={'text-accent'}>career</MyLinks>
            </div>
            <div className='flex items-center space-x-2'>
                <img src={useIcon} alt="" />
                <button className='btn btn-primary'>Login</button>
            </div>
        </div>
    );
};

export default Navber;