import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const LoginWith = () => {
    return (
        <div>
            <h1 className='font-bold text-primary text-xl mb-4'>Login With</h1>
            <div className='space-y-2'>
                <button className='btn w-full bg-base-100'><FaGoogle size={22}></FaGoogle> Login With Google</button>
                <button className='btn w-full bg-base-100 btn-'><FaGithub size={22}></FaGithub> Login With Github</button>
            </div>
        </div>
    );
};

export default LoginWith;