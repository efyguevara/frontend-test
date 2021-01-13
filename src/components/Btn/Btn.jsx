import React from 'react';
import './index.css';
import { Button } from 'react-bootstrap';

const Btn = (props) => {
    const { title, align, theme, size } = props;

    return (
        <Button variant={theme} className={align} size={size}>{title}</Button>
    )
}

export default Btn; 