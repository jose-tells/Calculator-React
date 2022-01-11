const reducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_ITEM_AVERAGE':
      return {
        ...state,
        average: [
          ...state.average,
          {
            id: state.average.length + 1,
            item: action.payload,
          },
        ],
      };
    case 'SAVE_ITEM_MEDIAN':
      return {
        ...state,
        median: [
          ...state.median,
          {
            id: state.median.length + 1,
            item: action.payload,
          },
        ],
      };
    case 'SAVE_ITEM_MODE':
      return {
        ...state,
        mode: [
          ...state.mode,
          {
            id: state.mode.length + 1,
            item: action.payload,
          },
        ],
      };
    case 'CLEAN_STATE':
      return {
        ...state,
        average: action.payload,
        mode: action.payload,
        median: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
