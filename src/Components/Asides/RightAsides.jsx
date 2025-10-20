import React, { useContext } from 'react';
import LoginWith from '../RightAside/LoginWith';
import FindUsOn from '../RightAside/FindUsOn';
import Qzone from '../RightAside/Qzone';

const RightAsides = () => {
    return (
        <div className='space-y-4'>
            <LoginWith></LoginWith> 
            <FindUsOn></FindUsOn>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAsides;