import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addBusinessDays, differenceInBusinessDays } from 'date-fns'
import { purgeAction } from '../actions'
import { ITicketDefaults, TicketStatus, TransactionTypes } from '../types'

const initialState: ITicketDefaults = {
  transactionType: TransactionTypes.ReverseRepo,
  startDate: new Date().getTime(),
  endDate: addBusinessDays(new Date(), 1).getTime(),
  fixed: true,
  trader: 'Demo',
  ticketStatus: TicketStatus.New,
  duration: 1
}

type DatePayload = {
  startDate?: number
  endDate?: number
}

export const TicketDefaultSlice = createSlice({
  name: 'TicketDefaultsReducer',
  initialState,
  reducers: {
    updateTicketData(state, action: PayloadAction<ITicketDefaults>) {
      return { ...state, ...action.payload }
    },
    updateTicketDates(state, action: PayloadAction<DatePayload>) {
      const { startDate, endDate } = action.payload
      const _startDate = startDate || state.startDate
      const _endDate = endDate || state.endDate
      return {
        ...state,
        startDate: _startDate,
        endDate: _endDate,
        duration: differenceInBusinessDays(_endDate, _startDate)
      }
    },
    updateFixedOpen(state, action: PayloadAction<ITicketDefaults>) {
      state.fixed = action.payload.fixed
    }
  },
  extraReducers: (builder) => {
    builder.addCase(purgeAction, (state: ITicketDefaults) => {
      return { ...state, ...initialState }
    })
  }
})

export const { updateTicketData, updateTicketDates, updateFixedOpen } =
  TicketDefaultSlice.actions
