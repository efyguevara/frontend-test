import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './index.css';
import { Container, Table, Row, Col } from 'react-bootstrap';
import refresh from '../../assets/static/refresh.svg';
import DinacmiRowsOfCounterList from './DinamicRowsOfCounterList';
import { getCountersService } from '../../services/counters';
import { changeLoading } from '../../actions';

const CounterList = (props) => {
    const dispatch = useDispatch();
    const { counters } = props
    const iconRefresh = <img src={refresh} alt="icon refresh" />

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

    return (
        <Container>
            <Table responsive>
                <thead>
                    <Row>
                        <Col xs={3}>
                            {counters.length} items
                        </Col>
                        <Col xs={3}>
                            {setTotalCount()} items
                        </Col>
                        <Col xs={2}>
                            {iconRefresh}
                        </Col>
                    </Row>
                </thead>
                <tbody>
                    {counters.length > 0 ?
                        counters.map((el) => {
                            return <DinacmiRowsOfCounterList key={el.id} {...el} />
                        }) : handleLoading()
                    }
                </tbody>
            </Table>
        </Container>
    )
}
export default CounterList;