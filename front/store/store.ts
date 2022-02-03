import { configureStore } from '@reduxjs/toolkit'
import apiReducer from './features/ApiSlicer'

const store = configureStore({
  reducer: apiReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
