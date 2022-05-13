import { configureStore } from '@reduxjs/toolkit'
import { dashboardApi, ticketApi, tradesApi } from '../services'
import { TicketDefaultSlice } from './reducers/ticketDefaultSlice'

export const store = configureStore({
  reducer: {
    [tradesApi.reducerPath]: tradesApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [ticketApi.reducerPath]: ticketApi.reducer,
    ticketDefaultState: TicketDefaultSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      tradesApi.middleware,
      dashboardApi.middleware,
      ticketApi.middleware
    )
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
