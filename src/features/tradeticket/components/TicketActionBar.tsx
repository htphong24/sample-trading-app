import { Button, Stack } from '@mui/material'
import React, { useCallback, useEffect } from 'react'
import {
  useGetNewTicketIdQuery,
  useLazyCalculateEconomicsQuery,
  useLazyExecuteTradeQuery
} from '../../../services'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { NewTicketIdResponse } from '../../../types'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router'
import {
  usePayloadValidation,
  ValidationType
} from '../hooks/usePayloadValidation'
import { updateEconomics } from '../../../store/reducers/economicsSlice'

export const TicketActionBar = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { validatePayload } = usePayloadValidation()

  const {
    ticketDefaultState,
    selectedBondDataState,
    settlementState,
    economicsState,
    counterPartyState
  } = useAppSelector((state) => state)

  const { cleanPrice, haircut, startCash } = { ...economicsState }

  const { duration, transactionType, fixed } = { ...ticketDefaultState }

  const { quantity, repoRate, repoYearBasis, repoRateType } = {
    ...settlementState
  }

  const { isin } = { ...selectedBondDataState }

  // const { data: ticketId } = useGetNewTicketIdQuery()
  const ticketId: NewTicketIdResponse = {
    newId: uuidv4()
  }
  // const ticketIdError = false
  // const isTicketIdSuccess = true

  const [executeTradeTrigger, executeResult] = useLazyExecuteTradeQuery()

  const [calculateTradeTrigger, calculateResult] =
    useLazyCalculateEconomicsQuery()

  const onCalculate = useCallback(
    async (e: React.MouseEvent) => {
      const payload = {
        quantity,
        startCash,
        haircut,
        duration,
        cleanPrice,
        isin,
        repoRate,
        repoYearBasis,
        transactionType,
        fixed,
        repoRateType
      }
      const validation = await validatePayload(
        payload,
        ValidationType.CalculationRequestPayload
      )
      if (validation.error) console.log(validation.error)
      if (validation.valid) calculateTradeTrigger(payload)
    },
    [
      cleanPrice,
      duration,
      fixed,
      haircut,
      isin,
      quantity,
      repoRate,
      repoRateType,
      repoYearBasis,
      startCash,
      transactionType
    ]
  )

  const onExecute = useCallback(async (e: React.MouseEvent) => {}, [])

  useEffect(() => {
    dispatch(updateEconomics({ ...calculateResult.data }))
  }, [calculateResult, dispatch])

  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Button color="primary" variant="contained" onClick={onCalculate}>
        Calculate
      </Button>
      <Button color="primary" variant="contained" onClick={onExecute}>
        Execute
      </Button>
    </Stack>
  )
}
