import { createSlice } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'

const initialState = {}

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    async createUser(params) {
      try {
        axios.post(`${process.env.BASE_URL}`, params)
      } catch (e) {
        if (
          axios.isAxiosError(e) &&
          e.response &&
          e.response.status === 400
        ) {
          alert(e.message)
        }
      }
    }
  }
})

export const { createUser } = apiSlice.actions
export default apiSlice.reducer
