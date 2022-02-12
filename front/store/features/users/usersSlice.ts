import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react'
import { RADIO_VALUES_ENUM } from 'lib/constant/SignupPageConstant'

type LoadingStatus = 'idle' | 'loading' | 'succeeded' | 'failed'

interface State {
  status: LoadingStatus
}

interface UserParams {
  email: string
  password: string
  name: string
  gender: RADIO_VALUES_ENUM
}

const initialState: State = {
  status: 'idle'
}

export const usersApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080'
  }),
  endpoints: (build) => ({
    addUser: build.mutation<UserParams, UserParams>({
      query: (body) => ({
        url: 'users',
        method: 'POST',
        body
      })
    })
  })
})

export const { useAddUserMutation } = usersApi
