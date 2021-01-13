import React from 'react';
import './index.css';
import { Button } from 'react-bootstrap';

const Btn = (props) => {
    const { title, align, theme } = props;

    return (
        <Button variant={theme} className={align} >{title}</Button>
    )
}

export default Btn; 