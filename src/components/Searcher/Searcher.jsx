import React from 'react';
import './index.css';
import { FormControl, InputGroup } from 'react-bootstrap';
import Glass from '../../assets/static/Glass.svg';


const Searcher = () => {
    
    return (
        <>
            <div className="searcher">
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text><img src={Glass} alt="glass icon" /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className="searcher-without-border" id="inlineFormInputGroup" placeholder="Search counters" />
                </InputGroup>
            </div>
        </>
    )
}
export default Searcher;