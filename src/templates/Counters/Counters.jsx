import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import './index.css';
import { Container } from 'react-bootstrap';
import CounterList from '../../components/Counters/CounterList';
import Footer from '../../components/Footer/Footer';
import Search from '../../components/Searcher/Searcher';
import CreateNewCounter from '../../components/Counters/CreateNewCounter';

const Counters = ({ counterStore, filteredCounters, createNewCounterModal }) => {
    const [searching, setSearching] = useState(false);
    const counterList = <CounterList counters={searching ? filteredCounters : counterStore} />
    const newCounter = <CreateNewCounter />;

    const handleSearching = useCallback(() => {
        setSearching(!searching)
    })

    return (
        <>
            <Search onSearch={handleSearching} />
            <div className="counters">
                <Container>
                    {counterStore !== [] ? counterList :
                        <div className="text-center">
                            <h4>No counters yet</h4>
                            <p>“When I started counting my blessings, my whole life turned around.”—Willie Nelson</p>
                        </div>
                    }
                </Container>
            </div>
            {createNewCounterModal === true ? newCounter : null}
            <Footer />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        counterStore: state.counterStore,
        filteredCounters: state.filteredCounters,
        createNewCounterModal: state.createNewCounterModal
    }
}
export default connect(mapStateToProps)(Counters);