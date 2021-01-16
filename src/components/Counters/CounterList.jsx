import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './index.css';
import { ListGroup, Row, Col } from 'react-bootstrap';
import Btn from '../Btn/Btn';
import refresh from '../../assets/static/refresh.svg';
import DinacmiRowsOfCounterList from './DinamicRowsOfCounterList';
import { getCountersService } from '../../services/counters';
import { changeLoading } from '../../actions';

const CounterList = (props) => {
    const dispatch = useDispatch();
    const { counters } = props;

    const refreshButton = () => {
        dispatch(getCountersService())
    };

    useEffect(() => {
        dispatch(getCountersService())
    }, [dispatch])

    const handleLoading = () => {
        dispatch(changeLoading(true))
    };

    const setTotalCount = () => {
        let numberOfRepetitions = 0;

        counters.forEach(element => {
            numberOfRepetitions += element.count
        });
        return numberOfRepetitions
    };

    const iconRefresh = <Btn theme="none" title={<img src={refresh} alt="icon refresh" />} onClick={refreshButton} />

    return (
        <>
            <Row>
                <Col xs={4}>
                    <b>{counters.length} items</b>
                </Col>
                <Col xs={4}>
                    <b>{setTotalCount()} items</b>
                </Col>
                <Col >
                    <b>{iconRefresh}</b>
                </Col>
            </Row>
            <ListGroup defaultActiveKey="counter">
                {counters.length > 0 ?
                    counters.map((el) => {
                        return <DinacmiRowsOfCounterList key={el.id} {...el} />
                    }) : handleLoading()
                }
            </ListGroup>
        </>
    )
}
export default CounterList;