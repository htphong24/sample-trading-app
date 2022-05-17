import React from 'react'
import { RepoFormField } from '../../../components'
import { useAppSelector, useAppDispatch } from '../../../store/hooks'
import { updateSettlement } from '../../../store/reducers/settlementSlice'

export const Quantity: React.FC = (): JSX.Element => {
  // const settlementStateResult = useAppSelector((state) => state.settlementState)
  // console.log(' Quantity >> settlementStateResult')
  // console.log(settlementStateResult)
  const { quantity } = useAppSelector((state) => state.settlementState)
  // console.log(' Quantity >> quantity')
  // console.log(quantity)
  const dispatch = useAppDispatch()
  const handleQtyChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown | any }>
  ) => dispatch(updateSettlement({ quantity: event.target.value as number }))

  return (
    <React.Fragment>
      <RepoFormField
        id="qty-id"
        label="Quantity"
        onChange={handleQtyChange}
        value={Math.abs(quantity)}
      />
    </React.Fragment>
  )
}
