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
export const createNewCounterModalAction = (showModal) => ({
    type: 'CREATE_NEW_COUNTER_MODAL_ACTION',
    showModal,
});
export const postNewCounter = (newCounter) => ({
    type: 'POST_NEW_COUNTER',
    newCounter,
});
export const incCounter = (objectCounter) => ({
    type: 'INC_COUNTER',
    objectCounter,
});
export const decCounter = (objectCounter) => ({
    type: 'DEC_COUNTER',
    objectCounter,
});

export const shareCounter = (showPopover) => ({
    type: 'SHARE_COUNTER',
    showPopover,
});

export const selectedCounter = (data) => ({
    type: 'SELECTED_COUNTER',
    data,
});

export const deleteCounter = (id) => ({
    type: 'DELETE_COUNTER',
    id,
});
export const notificationAction = (key) => ({
    type: 'NOTIFICATION_ACTION',
    key
});
export const pushFilteredCounterAction = (data) => ({
    type: 'PUSH_FILTERED_COUNTER_ACTION',
    data
});