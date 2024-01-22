export const INITIAL_STATE = []
export const DataReducer = (state, action) => {
  switch(action.type) {
    case 'LOAD':
      return action.payload
    default:
      return {
        ...state
      }
  }
}