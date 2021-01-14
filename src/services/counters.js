import { getCounters } from '../actions';

export const getCountersService = () => {
    return (dispatch) => {
        fetch('/api/v1/counter', {
            method: 'get'
        })
            .then(res => res.json()
                .then(res => {
                    console.log("res", res)
                    return dispatch(getCounters(res))
                }));
    }
}