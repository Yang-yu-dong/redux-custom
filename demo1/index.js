import React from 'react';
import ReactDom from 'react-dom';

import createStore from '../custom/createStore';
import combineReducers from '../custom/combineReducers';

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
    case 'INCREA_AGE':
      return prevState + 1;
    case 'DECREA_AGE':
      return prevState - 1;
    default:
      return 18;
  }
}
const rootReducer = combineReducers({ name: nameReducer, age: ageReducer });
const store = createStore(rootReducer);
const Hello = () => {
  const state = store.getState();
  const dispatch = store.dispatch;
  return (
    <div>
      <p>name: {state.name}----- age: {state.age}</p>
      <button onClick={() => dispatch({ type: 'INCREA_AGE' })}>年龄+</button>
      <button onClick={() => dispatch({ type: 'DECREA_AGE' })}>年龄-</button>
    </div>
  )
}

const render = () => {
  ReactDom.render(<Hello />, document.getElementById('root'));
}

store.subscribe(render);

render();