import React from 'react';
import { connect, useDispatch } from 'react-redux';
import './index.css';
import { Modal, Form } from 'react-bootstrap';
import { data } from './dataForNotifications';
import Btn from '../Btn/Btn';
import { notificationAction } from '../../actions';

const Notifications = ({ notifications, selectedCounterStore }) => {
    const dispatch = useDispatch();

    let counterName = selectedCounterStore.map((el) => el.title);
console.log(counterName)
    const handleShowNotification = () => {
        dispatch(notificationAction(null))
    }

    return (
        <Modal
            show={true}
            onHide={handleShowNotification}
            backdrop="static"
            keyboard={true}
            size="sm"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {data[notifications].title(counterName)}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Text id="passwordHelpBlock" muted>
                    {data[notifications].description}
                </Form.Text>
                <Btn theme="main" title="algo" />
            </Modal.Body>
        </Modal>)
}
const mapStateToProps = (state) => {
    return {
        notifications: state.notifications,
        selectedCounterStore: state.selectedCounterStore,
    }
}

export default connect(mapStateToProps, null)(Notifications);