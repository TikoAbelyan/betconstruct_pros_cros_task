import { ADD_ITEM, EDIT_ITEM, EDIT_ITEM_FIELD } from '../actions/actions';

const items = Array.from(Array(3).keys(), n => n + 1);
const mutated = items.map(it => {
  const item = { value: it, editable: false, id: it };
  return item;
});

const initialState = {
  listItems: [...mutated],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM:
      return {
        listItems: [...state.listItems, payload],
      };

    case EDIT_ITEM:
      const items = [...state.listItems];
      const mutated = items.map((it, i) => {
        const item = { ...it };
        if (i === payload) {
          item.editable = !it.editable;
          return item;
        }
        return item;
      });
      return {
        listItems: [...mutated],
      };
    case EDIT_ITEM_FIELD:
      const editField = [...state.listItems];

      let mutatedField = [];
      if (payload.value) {
        mutatedField = editField.map((it, i) => {
          const item = { ...it };
          if (i === payload.index) {
            item.value = payload.value;
            return item;
          }
          return item;
        });
      } else {
        mutatedField = editField.filter((it, i) => {
          if (i !== payload.index) {
            return it;
          }
        });
      }

      return {
        listItems: [...mutatedField],
      };
    default:
      return state;
  }
};
