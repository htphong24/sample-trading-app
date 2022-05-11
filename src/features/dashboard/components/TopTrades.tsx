import React from 'react'
import { DashboardTile } from './DashboardTile'
import { DataGrid } from '../../../components'
import { topTradesColDef } from '../config'
import { useGetTopTradesQuery } from '../../../services'

export const TopTrades: React.FC = (): JSX.Element => {
  const { data, isFetching, isError } = useGetTopTradesQuery()
  return (
    <DashboardTile
      title="Top Trades"
      minWidth="30%"
      isLoading={isFetching}
      isError={isError}
    >
      <DataGrid
        colDef={topTradesColDef}
        gridData={data || []}
        size={{ width: '100%', height: 400 }}
      />
    </DashboardTile>
  )
}
