import React from 'react';
import { connect, useDispatch } from 'react-redux';
import './index.css';
import { Modal, Form } from 'react-bootstrap';
import dataForNotifications from './dataForNotifications.json';
import Btn from '../Btn/Btn';
import { notificationAction } from '../../actions';

const Notifications = ({ notifications }) => {
    const dispatch = useDispatch();

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
                    {dataForNotifications[notifications].title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Text id="passwordHelpBlock" muted>
                    {dataForNotifications[notifications].description}
                </Form.Text>
                <Btn theme="main" title="algo" />
            </Modal.Body>
        </Modal>)
}
const mapStateToProps = (state) => {
    return {
        notifications: state.notifications
    }
}

export default connect(mapStateToProps, null)(Notifications);