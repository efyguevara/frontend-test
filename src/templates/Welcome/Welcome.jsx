import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountersService } from '../../services/counters';
import { changeLoading } from '../../actions';
import './index.css';
import { Container } from 'react-bootstrap';
import initialImage from '../../assets/static/initialImage.svg';
import Btn from '../../components/Btn/Btn';


const Welcome = () => {
    const dispatch = useDispatch();

    const fillCounters = () => {
        dispatch(changeLoading(true))
        dispatch(getCountersService())
    }
    
    return (
        <>
            <div className="welcome">
                <Container>
                    <img src={initialImage} className="initialImage d-block ml-auto mr-auto" alt="logo counter app" />
                    <h4 className="d-block text-center bold">Welcome to Counters</h4>
                    <p className="d-block text-center">Capture cups of lattes, frapuccinos, or anything else that can be counted.</p>
                    <Link to="/counters"> <Btn title="Get Started" align="d-block ml-auto mr-auto" theme="main" size="welcome" onClick={fillCounters} /></Link>
                </Container>
            </div>
        </>
    )
}
export default Welcome;