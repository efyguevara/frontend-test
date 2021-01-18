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
        createNewCounterModal: action.showModal,
        exampleCounterName: action.showModal ? state.exampleCounterName : null
      };
    case 'EXAMPLE_COUNTERS_MODAL_ACTION':
      return {
        ...state,
        exampleCountersModal: action.showModal
      };
    case 'EXAMPLE_COUNTERS_NAME_ACTION':
      return {
        ...state,
        exampleCounterName: action.title
      };
    case 'POST_NEW_COUNTER':
      return {
        ...state,
        loading: true,
        counterStore: [...state.counterStore, action.newCounter],
        createNewCounterModal: false,
        exampleCounterName: null
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
        filteredCounters: state.filteredCounters.map((el) => {
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
        filteredCounters: state.filteredCounters.map((el) => {
          if (el.id === action.objectCounter.id) {
            return action.objectCounter
          } else {
            return el
          }
        }),
        createNewCounterModal: false
      };
    case 'SHARE_COUNTER':
      return {
        ...state,
        shareCounterStore: action.showPopover,
      };
    case 'SELECTED_COUNTER':
      let payload = [];
      if (state.selectedCounterStore.some((el) => el.id === action.data.id)) {
        payload = state.selectedCounterStore.filter((el) => el.id !== action.data.id)
      } else {
        payload = [...state.selectedCounterStore, action.data]
      }
      return {
        ...state,
        selectedCounterStore: payload,
      };
    case 'DELETE_COUNTER':
      return {
        ...state,
        counterStore: state.counterStore.filter((el) => el.id !== action.id),
      };
    case 'NOTIFICATION_ACTION':
      return {
        ...state,
        notifications: action.key,
      }
    case 'PUSH_FILTERED_COUNTER_ACTION':
      return {
        ...state,
        filteredCounters: action.data,
      }

    default:
      return state
  }
}
export default reducers;