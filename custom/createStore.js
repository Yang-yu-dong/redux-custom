const createStore = (reducer) => {
  let state;

  const listeners = []; 

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    }
  }

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
    return action;
  }
  dispatch({});

  return {
    getState,
    subscribe,
    dispatch,
  }
}

export default createStore;