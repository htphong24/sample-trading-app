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
import { BLOTTER } from '../../../routes'
import { purgeAction } from '../../../store/actions'

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

  const onExecute = useCallback(
    async (e: React.MouseEvent) => {
      const payload = {
        ...economicsState,
        ...ticketDefaultState,
        ...settlementState,
        ...selectedBondDataState,
        fullname: counterPartyState.fullname,
        ticketId: ticketId?.newId
      }

      const validation = await validatePayload(
        payload,
        ValidationType.CalculationRequestPayload
      )

      if (validation.error) {
        // TODO: show a popup/modal
        console.log(validation.error)
      }

      if (validation.valid) executeTradeTrigger(payload)
    },
    [
      executeTradeTrigger,
      counterPartyState.fullname,
      economicsState,
      selectedBondDataState,
      settlementState,
      ticketDefaultState,
      ticketId?.newId
    ]
  )

  useEffect(() => {
    dispatch(updateEconomics({ ...calculateResult.data }))
  }, [calculateResult, dispatch])

  useEffect(() => {
    console.log(executeResult.data)
    if (executeResult.data?.status === 'success') {
      setTimeout(() => {
        navigate(BLOTTER)
        dispatch(purgeAction())
        // TODO: show a popup / modal for trade confirmation
      }, 3000)
    }
  })

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
