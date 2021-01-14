import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import { Container } from 'react-bootstrap';
import CounterList from '../../components/Counters/CounterList';
import Layout from '../../components/Layout';


const Counters = ({ counters }) => {

    const counterList = <CounterList />

    return (
        <>
            <Layout />
            <div className="counters">
                <Container>
                    {!counters ? counterList :
                        <div className="text-center">
                            <h4>No counters yet</h4>
                            <p>“When I started counting my blessings, my whole life turned around.”—Willie Nelson</p>
                        </div>
                    }
                </Container>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        counters: state.counters
    }
}
export default connect(mapStateToProps)(Counters);