import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

type LoadingStatus = 'idle' | 'loading' | 'succeeded' | 'failed'

interface State {
  status: LoadingStatus
}

interface UserParams {
  mail: string
}

interface UserParams {
  mail: string
  password: string
  userName: string
  gender: number
}

export const addUser = createAsyncThunk(
  'user-management/users',
  async (params: UserParams) => {
    try {
      const response = await axios.post(
        `${process.env.BASE_URL}/user-management/users`,
        params
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
  status: 'idle'
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addUser.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
      })
      .addCase(addUser.rejected, (state, action) => {
        state.status = 'failed'
      })
  }
})

export default usersSlice.reducer
