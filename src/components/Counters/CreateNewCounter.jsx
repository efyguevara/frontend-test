import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import set from 'lodash/set';
import './index.css';
import { Row, Col, Modal, Form } from 'react-bootstrap';
import Btn from '../Btn/Btn';
import { createNewCounterModalAction, exampleCountersModalAction } from '../../actions';
import { postNewCounterService } from '../../services/counters';
import close from '../../assets/static/Close.svg'

const initialDataCounter = {
    title: null,
    count: 0
}

const CreateNewCounter = ({ exampleCounterName, createNewCounterModal }) => {

    const closeIcon = <img src={close} alt="Icon close modal" />

    const [newCounterName, setNewCounterName] = useState({
        title: null,
        count: 0
    });
    const activeOrInactiveButton = () => {
        return newCounterName.title === null
    }

    useEffect(() => {
        if (exampleCounterName !== null) {
            setNewCounterName({
                title: exampleCounterName,
                count: 0
            })
        }
        activeOrInactiveButton()
    }, [newCounterName.title, exampleCounterName])

    const dispatch = useDispatch();

    const handleOnHideModal = () => {
        dispatch(createNewCounterModalAction(false))
    }

    const handleInput = (event) => {
        setNewCounterName({...newCounterName, title: event.target.value})
    }

    const handlePostNewCounter = () => {
        dispatch(postNewCounterService(newCounterName))
        setNewCounterName(initialDataCounter)
    }

    const handleShowExampleModal = () => {
        dispatch(exampleCountersModalAction(true))
    }


    return (
        <>
            <Modal
                id="modalLarge"
                show={true}
                onHide={handleOnHideModal}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header>
                    <Btn theme="modalClose" title={closeIcon} onClick={handleOnHideModal} />
                    <Modal.Title className="modal-title-counters">Create Counter</Modal.Title>
                    <Col className="p-0 align-right">
                        <Btn disabledButton={newCounterName.title === null} theme="main" title="Save"  align="align-right" onClick={handlePostNewCounter} />
                    </Col>
                </Modal.Header>
                <Modal.Body className="modal-content-counters">
                    <Form.Text className="text text-left font-weight-bold">
                        Name
                    </Form.Text>
                    <Form.Control
                        type="text"
                        name="title"
                        placeholder="Cups of Coffee"
                        value={newCounterName.title}
                        defaultValue={(event) => setNewCounterName(event.target.value)}
                        onChange={handleInput}
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Give it a name. Creative block? See <a href="#" onClick={handleShowExampleModal} className="link-to-examples"> examples</a>.
                    </Form.Text>
                </Modal.Body>
            </Modal>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        exampleCounterName: state.exampleCounterName,
        createNewCounterModal: state.createNewCounterModal
    }
}
export default connect(mapStateToProps)(CreateNewCounter);