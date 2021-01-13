import React from 'react';
import './index.css';
import { FormControl, InputGroup } from 'react-bootstrap';
import glass from '../../assets/static/glass.svg';


const Searcher = () => {
    const iconSearch = <img src={glass} alt="glass icon" />;
    return (
        <>
            <div className="searcher">
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>{iconSearch}</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className="searcher-without-border" id="inlineFormInputGroup" placeholder="Search counters" />
                </InputGroup>
            </div>
        </>
    )
}
export default Searcher;