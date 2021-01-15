import {
    getCounters,
    postNewCounter
} from '../actions';

export const getCountersService = () => {
    return (dispatch) => {
        fetch('/api/v1/counter', {
            method: 'get'
        })
            .then(res => res.json()
                .then(res => {
                    return dispatch(getCounters(res))
                }));
    }
}

export const postNewCounterService = (counterName) => {
    return (dispatch) => {
        fetch('/api/v1/counter', {
            method: 'POST',
            body: JSON.stringify(counterName),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json()
                .then((res) => {
                    return dispatch(postNewCounter(res))
                })
            )
    }
}