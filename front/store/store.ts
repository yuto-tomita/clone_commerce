import { configureStore } from '@reduxjs/toolkit'
import { usersApi } from './features/users/usersSlice'

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
