import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotificationMessage(state, action) {
      return action.payload
    }
  }
})

export const setNotification = (message, timeout) => {
  return (dispatch) => {
    dispatch(setNotificationMessage(message))
    setTimeout(() => {
      dispatch(setNotificationMessage(''))
    }, timeout)
  }
}

export default notificationSlice.reducer
export const { setNotificationMessage } = notificationSlice.actions
