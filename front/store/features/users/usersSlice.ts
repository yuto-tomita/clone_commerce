import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react'

type LoadingStatus = 'idle' | 'loading' | 'succeeded' | 'failed'

interface State {
  status: LoadingStatus
}

interface UserParams {
  mail: string
  password: string
  userName: string
  gender: number
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
