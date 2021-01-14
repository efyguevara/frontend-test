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
        counters: [...state.counters, action.counter]
      };
    case 'GET_COUNTERS':
      return {
        loading: false,
        counters: action.counter,
      };
    default:
      return state
  }
}
export default reducers;