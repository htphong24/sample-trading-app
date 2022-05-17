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

let initialState: IEconomics = {
  cleanPrice: 0,
  dirtyPrice: 0,
  yieldValue: 0,
  haircut: 10,
  startCash: 0,
  endCash: 0
}

type PartialUpdate<T> = {
  [P in keyof T]?: T[P]
}

export const economicsDataSlice = createSlice({
  name: 'EconomicsReducer',
  initialState,
  reducers: {
    updateEconomics(state, action: PayloadAction<PartialUpdate<IEconomics>>) {
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
