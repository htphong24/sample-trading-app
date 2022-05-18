import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { purgeAction } from '../actions'

export interface IEconomics {
  cleanPrice: number
  dirtyPrice: number
  yieldValue: number
  haircut: number
  startCash: number
  endCash: number
}

const initialState: IEconomics = {
  cleanPrice: 0,
  dirtyPrice: 0,
  yieldValue: 0,
  haircut: 10,
  startCash: 0,
  endCash: 0
}

export const economicsDataSlice = createSlice({
  name: 'EconomicsReducer',
  initialState,
  reducers: {
    updateEconomics(state, action: PayloadAction<Partial<IEconomics>>) {
      return { ...state, ...action.payload }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(purgeAction, (state: IEconomics) => {
      return { ...state, ...initialState }
    })
  }
})

export const { updateEconomics } = economicsDataSlice.actions
