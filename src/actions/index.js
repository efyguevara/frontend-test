// ==========LOADING==========
export const setLoading = (status) => ({
    type: 'SET_LOADING', 
    status,
});
export const changeLoading = (status) => ({
    type: 'CHANGE_LOADING', 
    status,
});

// ==========COUNTERS==========
export const setCounters = (counter) => ({
    type: 'SET_COUNTERS',
    counter,
});
export const getCounters = (counter) => ({
    type: 'GET_COUNTERS', 
    counter,
});
