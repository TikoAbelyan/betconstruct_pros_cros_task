import React, { useState } from 'react';
import { connect } from 'react-redux';
import AppComponent from '../components/AppComponent';
import {
  addItem as addItemAction,
  editItem as editItemAction,
  editItemField as editItemFieldAction,
} from '../actions/actions';

const AppContainer = ({ listItems, addItem, editItem, editItemField }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleAdd = ({ key }) => {
    if (key === 'Enter') {
      addItem({ value, editable: false });
      setValue('');
    }
  };

  const handleItemEdit = (value, index) => {
    editItemField({ value, index });
  };

  const handleEdit = index => editItem(index);

  return (
    <AppComponent
      items={listItems}
      onChange={handleChange}
      value={value}
      handleAdd={handleAdd}
      handleEdit={handleEdit}
      handleItemEdit={handleItemEdit}
    />
  );
};

const mapStateToProps = store => ({
  listItems: store.rootReducer.listItems,
});

const mapDispatchToProps = dispatch => ({
  addItem: value => dispatch(addItemAction(value)),
  editItem: index => dispatch(editItemAction(index)),
  editItemField: props => dispatch(editItemFieldAction(props)),
});

export default React.memo(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppContainer)
);
