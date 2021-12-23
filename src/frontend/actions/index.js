export const saveItemAverage = (payload) => ({
  type: 'SAVE_ITEM_AVERAGE',
  payload,
});

export const saveItemMedian = (payload) => ({
  type: 'SAVE_ITEM_MEDIAN',
  payload,
});

export const saveItemMode = (payload) => ({
  type: 'SAVE_ITEM_MODE',
  payload,
});

export const cleanState = (payload) => ({
  type: 'CLEAN_STATE',
  payload,
});
