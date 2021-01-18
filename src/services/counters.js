import {
    getCounters,
    postNewCounter,
    incCounter,
    decCounter,
    deleteCounter,
    notificationAction,
    removeNotifications,
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
        const url = '/api/v1/counter/inc'
        const options = {
            method: 'POST',
            body: JSON.stringify(props.props),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const success_func = (res) => {
            return dispatch(incCounter(res))
        }

        fetch(url, options)
            .then((res) => res.json()
                .then((res) => {
                    return success_func(res)
                })
            ).catch(() => {
                return dispatch(fetchRetry(url, options, { "onSuccess": success_func }))
            });
    }
}

export const postCounterDecService = (props) => {
    return (dispatch) => {
        const url = '/api/v1/counter/dec';
        const options = {
            method: 'POST',
            body: JSON.stringify(props.props),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const success_func = (res) => {
            return dispatch(decCounter(res))
        }

        fetch(url, options)
            .then((res) => res.json()
                .then((res) => {
                    return success_func(res)
                })
            ).catch(() => {
                return dispatch(fetchRetry(url, options, { "onSuccess": success_func }))
            });
    }
}

export const deleteCounterService = (selectedCounterStore) => {
    return (dispatch) => {
        const success_func = (res) => {
            return dispatch(deleteCounter(res))
        }
        selectedCounterStore.forEach((el) => {
            const url = '/api/v1/counter';
            const options = {
                method: 'DELETE',
                body: JSON.stringify(el),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            fetch(url, options)
                .then((res) => res.json()
                    .then((res) => {
                        return success_func(res)
                    })
                ).catch(() => {
                    return dispatch(deleteRetry(url, options, { "onSuccess": success_func }))
                });
        })
    }
}

const fetchRetry = (url, options, extra_data) => {
    return (dispatch) => {
        const retry = () => {
            fetch(url, options)
                .then((res) => {
                    if (res.ok) {
                        res.json().then((res) => {
                            dispatch(removeNotifications())
                            return extra_data.onSuccess(res)
                        })
                    }
                    return fetchRetry(url, options, extra_data)
                })
        }
        if (navigator.onLine === false) {
            return dispatch(notificationAction("couldntUpdateCounter", retry))
        }
    }
}
const deleteRetry = (url, options, extra_data) => {
    return (dispatch) => {
        const retry = () => {
            fetch(url, options)
                .then((res) => {
                    if (res.ok) {
                        res.json().then((res) => {
                            dispatch(removeNotifications())
                            return extra_data.onSuccess(res)
                        })
                    }
                    return fetchRetry(url, options, extra_data)
                })
        }
        if (navigator.onLine === false) {
            return dispatch(notificationAction("couldntDeleteCounter", retry))
        }
    }
}