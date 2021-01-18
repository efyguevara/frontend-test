import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import set from 'lodash/set';
import './index.css';
import { Modal, Form } from 'react-bootstrap';
import Btn from '../Btn/Btn';
import { createNewCounterModalAction, exampleCountersModalAction } from '../../actions';
import { postNewCounterService } from '../../services/counters';

const initialDataCounter = {
    title: null,
    count: 0
}

const CreateNewCounter = ({ exampleCounterName, createNewCounterModal }) => {

    const [newCounterName, setNewCounterName] = useState({
        title: null,
        count: 0
    });

    useEffect(() => {
        if (exampleCounterName !== null) {
            setNewCounterName({
                title: exampleCounterName,
                count: 0
            })
        }
    }, [exampleCounterName])

    const dispatch = useDispatch();

    const handleOnHideModal = () => {
        dispatch(createNewCounterModalAction(false))
    }

    const handleInput = (event) => {
        const newCounterNameAux = set(newCounterName, event.target.name, event.target.value)
        setNewCounterName(newCounterNameAux)
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
                show={true}
                onHide={handleOnHideModal}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create Counter</Modal.Title>
                    <Btn theme="main" title="Save" align="align-right" onClick={handlePostNewCounter} />
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        type="text"
                        name="title"
                        placeholder="Cups of Coffee"
                        value={newCounterName.title}
                        defaultValue={(event) => setNewCounterName(event.target.value)}
                        onChange={handleInput}
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Give it a name. Creative block? See <Btn theme="none" title="examples" onClick={handleShowExampleModal} /> examples.
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