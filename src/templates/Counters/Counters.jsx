import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import { Container } from 'react-bootstrap';
import CounterList from '../../components/Counters/CounterList';
import Layout from '../../components/Layout/Layout';
import CreateNewCounter from '../../components/Counters/CreateNewCounter';

const Counters = ({ counterStore, createNewCounterModal }) => {
    const counterList = <CounterList counters={counterStore} />
    const newCounter = <CreateNewCounter />;

    return (
        <>
            <Layout />
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
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        counterStore: state.counterStore,
        createNewCounterModal: state.createNewCounterModal
    }
}
export default connect(mapStateToProps)(Counters);