const reducers = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: [...state.loading, action.status]
      };
    case 'CHANGE_LOADING':
      return {
        ...state,
        loading: action.status,
      };
    case 'SET_COUNTERS':
      return {
        ...state,
        counterStore: [...state.counterStore, action.counter]
      };
    case 'GET_COUNTERS':
      return {
        ...state,
        loading: false,
        counterStore: action.counter,
      };
    case 'CREATE_NEW_COUNTER_MODAL_ACTION':
      return {
        ...state,
        createNewCounterModal: action.showModal
      };
    case 'POST_NEW_COUNTER':
      return {
        ...state,
        counterStore: [...state.counterStore, action.newCounter],
        createNewCounterModal: false
      };
    case 'INC_COUNTER':
      return {
        ...state,
        counterStore: state.counterStore.map((el) => {
          if (el.id === action.objectCounter.id) {
            return action.objectCounter
          } else {
            return el
          }
        }),
        createNewCounterModal: false
      };
    case 'DEC_COUNTER':
      return {
        ...state,
        counterStore: state.counterStore.map((el) => {
          if (el.id === action.objectCounter.id) {
            return action.objectCounter
          } else {
            return el
          }
        }),
        createNewCounterModal: false
      };
    default:
      return state
  }
}
export default reducers;