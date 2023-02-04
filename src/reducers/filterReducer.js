export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case '@filter/setFilter':
      return action.payload
    default:
      return state
  }
}

export const filterAnecdotes = (string) => {
  return {
    type: '@filter/setFilter',
    payload: string
  }
}
