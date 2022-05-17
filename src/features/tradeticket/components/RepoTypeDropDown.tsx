import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material'
import React, { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { updateTicketData } from '../../../store/reducers/ticketDefaultSlice'
import { TransactionTypes } from '../../../store/types'
import { repoTransactionType } from '../config'

export const RepoTypeDropDown: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { transactionType } = useAppSelector(
    (state) => state.ticketDefaultState
  )
  const handleTransactionChange = useCallback(
    (event: SelectChangeEvent<TransactionTypes>) => {
      return dispatch(
        updateTicketData({
          transactionType: event.target.value as TransactionTypes
        })
      )
    },
    [dispatch]
  )
  return (
    <div>
      <FormControl sx={{ minWidth: '100%' }}>
        <InputLabel id="repoType">Transaction Type</InputLabel>
        <Select
          value={transactionType}
          onChange={handleTransactionChange}
          variant="outlined"
          labelId="repoType"
          label="Transaction Type"
        >
          {repoTransactionType.map((rType) => (
            <MenuItem key={rType} value={rType}>
              {rType}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
