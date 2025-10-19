import React from 'react';
import Container from '../Components/Container';
import Navber from '../Components/Navber';
import RegistrationForm from '../Components/Forms/RegistrationForm';

const Registration = () => {
    return (
        <>
        <Container>
            <Navber></Navber>
            <div className="min-h-screen  flex justify-center items-center">
                <RegistrationForm></RegistrationForm>
            </div>
        </Container>
        </>
    );
};

export default Registration;