import React from 'react';
import ReactDom from 'react-dom';
import { applyMiddleware, createStore } from 'redux'

// import createStore from '../custom/createStore';
import combineReducers from '../custom/combineReducers';
import addLoggingToDispatch from '../custom/addLoggingToDispatch';
import addPromiseSupportToDispatch from '../custom/addPromiseSupportToDispatch';

const nameReducer = (prevState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.payload;
    default:
      return 'jack';
  }
};
const ageReducer = (prevState, action) => {
  switch (action.type) {
    case 'INCRE_AGE':
      return prevState + 1;
    case 'DECRE_AGE':
      return prevState - 1;
    default:
      return 18;
  }
}
const rootReducer = combineReducers({ name: nameReducer, age: ageReducer });
const store = createStore(
  rootReducer,
  {
    name: 'jack',
    age: 18,
  },
  applyMiddleware(addPromiseSupportToDispatch, addLoggingToDispatch),
);
store.dispatch(Promise.resolve({ type: 'CHANGE_NAME', payload: 'rose' }));
const Hello = () => {
  const state = store.getState();
  const dispatch = store.dispatch;
  return (
    <div>
      <p>name: {state.name}----- age: {state.age}</p>
      <button onClick={() => dispatch({ type: 'INCRE_AGE' })}>年龄+</button>
      <button onClick={() => dispatch({ type: 'DECRE_AGE' })}>年龄-</button>
    </div>
  )
}

const render = () => {
  ReactDom.render(<Hello />, document.getElementById('root'));
}

store.subscribe(render);

render();