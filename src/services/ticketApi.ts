import { createApi } from '@reduxjs/toolkit/query/react'
import { NewTicketIdResponse } from '../types'
import { TICKET_API } from './constants'
import { rawBaseQuery } from './shared'

export const ticketApi = createApi({
  reducerPath: TICKET_API,
  baseQuery: rawBaseQuery,
  endpoints: (builder) => ({
    getNewTicketId: builder.query<NewTicketIdResponse, void>({
      query: () => 'trade/newid',
      keepUnusedDataFor: 0
    })
  })
})

export const { useGetNewTicketIdQuery } = ticketApi
