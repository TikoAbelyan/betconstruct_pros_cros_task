export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const EDIT_ITEM_FIELD = 'EDIT_ITEM_FIELD';

export const addItem = payload => ({
  type: ADD_ITEM,
  payload,
});

export const editItem = payload => ({
  type: EDIT_ITEM,
  payload,
});

export const editItemField = payload => ({
  type: EDIT_ITEM_FIELD,
  payload,
});
