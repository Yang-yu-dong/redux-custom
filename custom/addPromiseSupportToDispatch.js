const addPromiseSupportToDispatch = (store) => (next) => (action) => {
  if (action instanceof Promise) {
    action.then(next);
  } else {
    next(action);
    return action;
  }
}

export default addPromiseSupportToDispatch;