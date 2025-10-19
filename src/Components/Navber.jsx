
import MyLinks from './MyLinks';
import useIcon from '../assets/user.png'
import { Link } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider/AuthContext';

const Navber = () => {
    const {user, signOutUser} = useContext(AuthContext)

    const handleLogOut =()=>{
        signOutUser()
        .then(()=>{
            alert('sign Out successfull')
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    return (
        <div className='flex items-center justify-between my-3'>
            <div>{user?.email}</div>
            <div className='flex gap-5'>
                <MyLinks to={'/'} className={'text-accent'}>Home</MyLinks>
                <MyLinks to={'/about'} className={'text-accent'}>About</MyLinks>
                <MyLinks to={'/career'} className={'text-accent'}>career</MyLinks>
            </div>
            <div className='flex items-center space-x-2'>
                <img src={useIcon} alt="" />
                {
                    user? <button onClick={handleLogOut} className='btn btn-primary'>Logout</button> : <Link to={'/login'}  className='btn btn-primary'>Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navber;