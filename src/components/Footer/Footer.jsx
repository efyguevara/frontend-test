import React from 'react';
import { connect, useDispatch } from 'react-redux';
import './index.css';
import { Container, Row, Col, OverlayTrigger, Popover } from 'react-bootstrap';
import Btn from '../Btn/Btn';
import trash from '../../assets/static/trash.svg';
import share from '../../assets/static/share.svg';
import plus from '../../assets/static/plus.svg';
import { createNewCounterModalAction, shareCounter } from '../../actions';
import { notificationAction } from '../../actions';

const Footer = ({ selectedCounterStore, shareCounterStore }) => {
    const dispatch = useDispatch();

    const trashIcon = <img src={trash} alt='trash icon' />;
    const shareIcon = <img src={share} alt='share icon' />;
    const plusIcon = <img src={plus} alt='plus icon' />;

    const handleNewCounterModal = () => {
        dispatch(createNewCounterModalAction(true))
    }

    const handleShareCounter = () => {
        dispatch(shareCounter(!shareCounterStore))
    }

    let setAllCountersSelected = `${selectedCounterStore.map(el => el.count)} x ${selectedCounterStore.map(el => el.title)}`;

    const copyText = () => {
        navigator.clipboard.writeText(setAllCountersSelected)
        dispatch(shareCounter(false))
    }
    const popover = (
        <Popover id="popover-basic" className="p-sticky" >
            <Col>
                <Popover.Title as="h3">Share {selectedCounterStore.length} counter</Popover.Title>
                <Popover.Content>
                    <Btn theme="action" title="Copy" onClick={copyText} />
                </Popover.Content>
            </Col>
            <Col>
                <Popover.Content>
                    {setAllCountersSelected}
                </Popover.Content>
            </Col>
        </Popover>);

    const showShareComponent = () => {
        return <OverlayTrigger trigger="click" placement="top" overlay={popover} >
            <Btn title={shareIcon} theme="action" size="footer" onClick={handleShareCounter} />
        </OverlayTrigger>
    }

    const handleDeleteCounter = () => {
        if (selectedCounterStore.length !== 0) {
            dispatch(notificationAction("confirmationDeleteCounter"))
        } else { return console.log("error") }
    }
    const buttonThash = <Btn title={trashIcon} theme="action" size="footer" onClick={handleDeleteCounter} />
    return (
        <>
            <div className="footer">
                <Container fluid className="container-footer">
                    <Row>
                        <Col xs={7} sm={8} md={6} lg={6} className="d-flex">
                            {selectedCounterStore.length !== 0 ? buttonThash : null}
                            {selectedCounterStore.length !== 0 ? showShareComponent() : null}
                        </Col>

                        <Col xs={5} sm={4} md={6} lg={6} className="align-right">
                            <Btn title={plusIcon} theme="main" size="footer" onClick={handleNewCounterModal} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedCounterStore: state.selectedCounterStore,
        shareCounterStore: state.shareCounterStore
    }
}
export default connect(mapStateToProps)(Footer);