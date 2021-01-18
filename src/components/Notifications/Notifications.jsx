import React from 'react';
import { connect, useDispatch } from 'react-redux';
import './index.css';
import { Row, Col, Modal, Form } from 'react-bootstrap';
import { data } from './dataForNotifications';
import Btn from '../Btn/Btn';
import { removeNotifications } from '../../actions';
import { deleteCounterService } from '../../services/counters';

const Notifications = ({ notifications, selectedCounterStore }) => {
    const dispatch = useDispatch();

    let counterName = selectedCounterStore.map((el) => el.title);

    const handleShowNotification = () => {
        dispatch(removeNotifications(null))
    }

    const setRetryButton = () => {
        if (data[notifications.key].actions.retry) {
            return <Btn theme="main" title="Retry" onClick={() => { notifications.retry_func() }} />
        }
    }
    const setDismissButton = () => {
        if (data[notifications.key].actions.dismiss) {
            return <Btn theme="main" title="Dismiss" onClick={() => handleShowNotification()} />
        }
    }
    const setCancelButton = () => {
        if (data[notifications.key].actions.cancel) {
            return <Btn theme="action" title="Cancel" onClick={() => handleShowNotification()} />
        }
    }
    const setDeleteButton = () => {
        if (data[notifications.key].actions.delete) {
            return <Btn theme="action" title="Delete" onClick={() => dispatch(deleteCounterService(selectedCounterStore))} />
        }
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
            <Modal.Header>
                <Modal.Title className="modal-title-notifications">
                    {data[notifications.key].title(counterName)}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Text id="passwordHelpBlock">
                    <Row className="pb-4">
                        <Col>
                            {data[notifications.key].description}
                        </Col>

                    </Row>

                    <Row>
                        <Col className="j-content-center">
                            {setRetryButton()}
                            {setDismissButton()}
                            {setCancelButton()}
                            {setDeleteButton()}
                        </Col>
                    </Row>
                </Form.Text >


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