import React from 'react';
import { useDispatch } from 'react-redux';
import './index.css';
import { exampleCountersModalAction, exampleCountersNameAction } from '../../actions';
import { Modal, Form, Container, Row } from 'react-bootstrap';
import Btn from '../Btn/Btn';

const ExampleCounters = () => {
    const dispatch = useDispatch();

    const dataCounterExamples = {
        "Food": ["Hot-dogs", "Apples", "Meat burgers", "Bananas", "Soup"],
        "Drinks": ["Glass of water", "Cups of coffee", "Cups of tea", "Glass of natural juice", "Glass of soda"],
        "Exercises": ["Walking", "Running", "Abs", "Squats", "Weights"]
    }

    const handleOnHideModal = () => {
        dispatch(exampleCountersModalAction(false))
    }

    const saveExampleCounterName = (el) => {
        dispatch(exampleCountersModalAction(false))
        dispatch(exampleCountersNameAction(el))
    }

    const addExampleToCounters = () => {
        let categories = Object.keys(dataCounterExamples)
        return categories.map((key) => {
            return <Container>
                <Row className="mt-3">
                    <b>{key}</b>
                </Row>
                <Row>
                    {dataCounterExamples[key].map((el) => <Btn size="sm" theme="example-counters" title={el} onClick={() => saveExampleCounterName(el)} />)}
                </Row>
            </Container>
        })
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
                    <Modal.Title>Examples</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Text muted>
                        Select an example to add it to your counters.
                    </Form.Text>
                    {addExampleToCounters()}
                </Modal.Body>
            </Modal>
        </>
    )
}
export default ExampleCounters;