import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { purgeAction } from '../actions'

export interface ICounterParty {
  nick: string
  cparty: string
  fullname: string
  counterpartyId: number | string
}

let initialState: ICounterParty = {
  nick: '',
  cparty: '',
  fullname: '',
  counterpartyId: ''
}

export const counterPartyDataSlice = createSlice({
  name: 'CounterPartyReducer',
  initialState,
  reducers: {
    selectedCounterParty(state, action: PayloadAction<ICounterParty>) {
      return { ...state, ...action.payload }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(purgeAction, (state: ICounterParty) => {
      return { ...state, ...initialState }
    })
  }
})

export const { selectedCounterParty } = counterPartyDataSlice.actions
