import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './index.css';
import { ListGroup, Row, Col } from 'react-bootstrap';
import minus from '../../assets/static/minus.svg';
import plus from '../../assets/static/plus-main-color.svg';
import Btn from '../Btn/Btn';
import { getCountersService, postCounterIncService, postCounterDecService } from '../../services/counters';

const DinacmiRowsOfCounterList = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountersService())
    }, [dispatch])

    const handleCounterInc = () => {
        dispatch(postCounterIncService({ props }))
    };

    const handleCounterDec = () => {
        dispatch(postCounterDecService({ props }))
    };

    const iconMinus = <Btn theme="none" title={<img src={minus} alt="icon minus" />} onClick={handleCounterDec} />
    const iconPlus = <Btn theme="none" title={<img src={plus} alt="icon plus" />} onClick={handleCounterInc} />

    return (
        <ListGroup.Item action className="br-5">
            <Row>
                <Col className='pl-0'><span>{props.title}</span></Col>
                <Col className='pr-0'><span className="align-right">{iconMinus}  {props.count}  {iconPlus}</span></Col>
            </Row>
        </ListGroup.Item>
    )
}
export default DinacmiRowsOfCounterList;