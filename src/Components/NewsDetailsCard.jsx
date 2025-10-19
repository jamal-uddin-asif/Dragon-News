import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({findNews}) => {
    return (
        <div className='space-y-4'>
            <img className='' src={findNews?.image_url} alt="" />
            <h2 className='font-bold text-2xl '> {findNews?.title}</h2>
            <p className='text-accent'>{findNews?.details}</p>
            <Link to={'/'} className='bg-secondary text-white p-1'>- All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;