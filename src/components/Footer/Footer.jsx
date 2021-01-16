import React from 'react';
import { connect, useDispatch } from 'react-redux';
import './index.css';
import { Container, Row, Col, OverlayTrigger } from 'react-bootstrap';
import Btn from '../Btn/Btn';
import trash from '../../assets/static/trash.svg';
import share from '../../assets/static/share.svg';
import plus from '../../assets/static/plus.svg';
import { createNewCounterModalAction, shareCounter } from '../../actions';
import ShareCounter from '../Counters/ShareCounter';
import { deleteCounterService } from '../../services/counters';

const Footer = ({ selectedCounterStore }) => {
    const dispatch = useDispatch();

    const trashIcon = <img src={trash} alt='trash icon' />;
    const shareIcon = <img src={share} alt='share icon' />;
    const plusIcon = <img src={plus} alt='plus icon' />;
    const shareComponent = <ShareCounter />;

    const handleNewCounterModal = () => {
        dispatch(createNewCounterModalAction(true))
    }
    const handleShareCounter = () => {
        dispatch(shareCounter(true))
    }

    const showShareComponent = () => (
        <OverlayTrigger trigger="click" placement="top" overlay={shareComponent}>
            <Btn title={shareIcon} theme="action" size="footer" onClick={handleShareCounter} />
        </OverlayTrigger>
    );

    const handleDeleteCounter = () => {
        if (selectedCounterStore.length !== 0) {
            dispatch(deleteCounterService(selectedCounterStore))
        } else { return console.log("error") }
    }

    return (
        <>
            <Container>
                <Row>
                    <Col xs={7} sm={8} md={6} lg={6} className="d-flex">
                        <Btn title={trashIcon} theme="action" size="footer" onClick={handleDeleteCounter} />
                        {showShareComponent()}
                    </Col>

                    <Col xs={5} sm={4} md={6} lg={6} className="align-right">
                        <Btn title={plusIcon} theme="main" size="footer" onClick={handleNewCounterModal} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedCounterStore: state.selectedCounterStore
    }
}
export default connect(mapStateToProps)(Footer);

