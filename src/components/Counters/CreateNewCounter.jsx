import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import set from 'lodash/set';
import './index.css';
import { Modal, Form } from 'react-bootstrap';
import Btn from '../Btn/Btn';
import { createNewCounterModalAction } from '../../actions';
import { postNewCounterService } from '../../services/counters';

const initialDataCounter = {
    title: null,
    count: 0
}

const CreateNewCounter = () => {

    const [dataCounter, setDataCounter] = useState(initialDataCounter)

    const dispatch = useDispatch();

    const handleNewCounterModal = () => {
        dispatch(createNewCounterModalAction(false))
    }

    const handleInput = (event) => {
        const dataCountersAux = set(dataCounter, event.target.name, event.target.value)
        setDataCounter(dataCountersAux)
    }
    const handlePostNewCounter = () => {
        dispatch(postNewCounterService(dataCounter))
    }

    return (
        <>
            <Modal
                show={true}
                onHide={handleNewCounterModal}
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
                        placeholder="Cups of Cofee"
                        defaultValue={dataCounter.title}
                        onChange={handleInput}
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Give it a name. Creative block? See examples.
                    </Form.Text>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CreateNewCounter;