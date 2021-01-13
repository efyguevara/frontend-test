import React from 'react';
import './index.css';
import initialImage from '../../assets/static/initialImage.svg';
import Btn from '../../components/Btn/Btn';

const Welcome = () => {
    return (
        <>
            <div className="welcome">
                <img src={initialImage} className="initialImage d-block ml-auto mr-auto" alt="logo counter app" />
                <h4 className="d-block text-center bold">Welcome to Counters</h4>
                <p className="d-block text-center">Capture cups of lattes, frapuccinos, or anything else that can be counted.</p>
                <Btn title="Get Started" align="d-block ml-auto mr-auto" theme="main" />
            </div>
        </>
    )
}
export default Welcome;