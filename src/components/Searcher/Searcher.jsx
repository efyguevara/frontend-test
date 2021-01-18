import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import './index.css';
import { Container, Form, FormControl, InputGroup } from 'react-bootstrap';
import glass from '../../assets/static/glass.svg';
import { pushFilteredCounterAction } from '../../actions';
import Btn from '../Btn/Btn';

const Searcher = ({ counterStore, onSearch }) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [cancelButton, setCancelButton] = useState(false)
    const iconSearch = <img src={glass} alt="glass icon" />;
    let newCounterList = [];

    const pushCounters = () => {
        return newCounterList = counterStore.filter((el) => el.title.toLowerCase().includes(search.toLowerCase()))
    }

    const setFocusValue = (value) => {
        onSearch()
        setCancelButton(value)
        if (value === false) {
            setSearch("")
        }
    }
    const btnCancel = <Btn theme="cancel" title="Cancel" />

    useEffect(() => {
        pushCounters()
        dispatch(pushFilteredCounterAction(newCounterList))
    }, [dispatch, search])

    return (
        <>

            <div className="searcher">
                <Container fluid className="container-searcher">
                    <InputGroup className="input-group-search">
                        <InputGroup.Prepend>
                            <InputGroup.Text>{iconSearch}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            className="searcher-without-border"
                            id="inlineFormInputGroup"
                            placeholder="Search counters"
                            name="search"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            onFocus={() => setFocusValue(true)}
                            onBlur={() => setFocusValue(false)}
                        />
                        {cancelButton ? btnCancel : null}
                    </InputGroup>
                </Container>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        counterStore: state.counterStore,
    }
}
export default connect(mapStateToProps)(Searcher);