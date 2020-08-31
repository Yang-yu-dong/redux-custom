const combineReducers = (reducers) => {
  return (state = {}, action) => {
    const nextState = {};
    Object.keys(reducers).forEach((key) => {
      const prevState = state[key];
      const currentReducers = reducers[key];
      nextState[key] = currentReducers(prevState, action);
    });
    return nextState;
  }
}

export default combineReducers;