import React from 'react';
import { useDispatch } from 'react-redux';
import './index.css';
import { Container, Row, Col } from 'react-bootstrap';
import Btn from '../Btn/Btn';
import trash from '../../assets/static/trash.svg';
import share from '../../assets/static/share.svg';
import plus from '../../assets/static/plus.svg';
import { createNewCounterModalAction } from '../../actions';

const Footer = () => {
    const dispatch = useDispatch();

    const trashIcon = <img src={trash} alt='plus icon' />;
    const shareIcon = <img src={share} alt='plus icon' />;
    const plusIcon = <img src={plus} alt='plus icon' />;
    
    const handleNewCounterModal = () => {
        dispatch(createNewCounterModalAction(true))
    }
    
    return (
        <>
            <Container>
                <Row>
                    <Col xs={7} sm={8} md={6} lg={6} className="d-flex">
                        <Btn title={trashIcon} theme="action" size="footer" />
                        <Btn title={shareIcon} theme="action" size="footer" />
                    </Col>

                    <Col xs={5} sm={4} md={6} lg={6} className="align-right">
                        <Btn title={plusIcon} theme="main" size="footer" onClick={handleNewCounterModal} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer;