import { createAsyncThunk } from '@reduxjs/toolkit/src/createAsyncThunk'
import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

type LoadingStatus = 'success' | 'failed' | 'pending'

interface State {
  status: LoadingStatus
}

export const addNewUser = createAsyncThunk(
  'user-management/users',
  async (params) => {
    try {
      const response = await axios.post(
        `${process.env.BASE_URL}/user-management/users`
      )
      return response.data
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
)

const initialState: State = {
  status: 'pending'
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addNewUser.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(addNewUser.fulfilled, (state, action) => {
        state.status = 'success'
      })
      .addCase(addNewUser.rejected, (state, action) => {
        state.status = 'failed'
      })
  }
})

export default usersSlice.reducer
