import React from 'react';
import './index.css';
import minus from '../../assets/static/minus.svg';
import plus from '../../assets/static/plus-main-color.svg';


const DinacmiRowsOfCounterList = (props) => {
    const iconMinus = <img src={minus} alt="icon minus" />
    const iconPlus = <img src={plus} alt="icon plus" />

    return (
        <tr>
            <td>{props.title}</td>
            <td>{iconMinus} {props.count} {iconPlus}</td>
        </tr>
    )
}
export default DinacmiRowsOfCounterList;