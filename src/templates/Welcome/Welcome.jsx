import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
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
                    <Row>
                        <img src={initialImage} className="initialImage d-block ml-auto mr-auto" alt="logo counter app" />
                    </Row>

                    <Row>
                        <Col>
                            <h4 className="d-block text-center bold">Welcome to Counters</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="d-block text-center">Capture cups of lattes, frapuccinos, or anything else that can be counted.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <Link to="/counters"> <Btn title="Get Started" align="" theme="main" size="welcome" onClick={fillCounters} /></Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Welcome;