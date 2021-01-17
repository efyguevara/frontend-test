import {
    getCounters,
    postNewCounter,
    incCounter,
    decCounter,
    deleteCounter,
    notificationAction,
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
        if (navigator.onLine === false) {
            return dispatch(notificationAction("couldntCreateNewCounter"))
        }
        fetch('/api/v1/counter', {
            method: 'POST',
            body: JSON.stringify(counterName),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    res.json()
                        .then((res) => {
                            return dispatch(postNewCounter(res))
                        })
                }
            })
    }
}

export const postCounterIncService = (props) => {
    return (dispatch) => {
        if (navigator.onLine === false) {
            return dispatch(notificationAction("couldntUpdateCounter"))
        }
        fetch('/api/v1/counter/inc', {
            method: 'POST',
            body: JSON.stringify(props.props),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    res.json()
                        .then((res) => {
                            return dispatch(incCounter(res))
                        })
                }
            })
    }
}

export const postCounterDecService = (props) => {
    return (dispatch) => {
        if (navigator.onLine === false) {
            return dispatch(notificationAction("couldntUpdateCounter"))
        }
        fetch('/api/v1/counter/dec', {
            method: 'POST',
            body: JSON.stringify(props.props),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    res.json()
                        .then((res) => {
                            return dispatch(decCounter(res))
                        })
                }
            })
    }
}

export const deleteCounterService = (selectedCounterStore) => {
    return (dispatch) => {
        if (navigator.onLine === false) {
            return dispatch(notificationAction("couldntDeleteCounter"))
        }
        selectedCounterStore.forEach((el) => {
            fetch('/api/v1/counter', {
                method: 'DELETE',
                body: JSON.stringify(el),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => {
                    if (res.ok) {
                        res.json()
                            .then((res) => {
                                return dispatch(deleteCounter(res))
                            })
                    }
                })
        })
    }
}