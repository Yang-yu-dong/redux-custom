const addLoggingToDispatch = (store) => (next) => (action) => {
  console.group(action.type)
  console.log('start', store.getState());
  const result = next(action);
  console.log('end', store.getState());
  console.groupEnd(action.type)
  return result;
}
export default addLoggingToDispatch;