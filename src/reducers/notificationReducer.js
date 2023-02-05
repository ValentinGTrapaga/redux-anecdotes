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

export default notificationSlice.reducer
export const { setNotificationMessage } = notificationSlice.actions
