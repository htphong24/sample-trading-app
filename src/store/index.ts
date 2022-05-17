import { configureStore } from '@reduxjs/toolkit'
import { dashboardApi, ticketApi, tradesApi } from '../services'
import { counterPartyDataSlice } from './reducers/counterPartyDataSlice'
import { selectedBondDataSlice } from './reducers/selectedBondDataSlice'
import { TicketDefaultSlice } from './reducers/ticketDefaultSlice'
import { settlementDataSlice } from './reducers/settlementSlice'

export const store = configureStore({
  reducer: {
    [tradesApi.reducerPath]: tradesApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [ticketApi.reducerPath]: ticketApi.reducer,
    ticketDefaultState: TicketDefaultSlice.reducer,
    selectedBondDataState: selectedBondDataSlice.reducer,
    counterPartyState: counterPartyDataSlice.reducer,
    settlementState: settlementDataSlice.reducer
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
