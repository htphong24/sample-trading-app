import React, { useCallback, useState } from 'react'
import { DataGrid } from '../../components'
import { useGetTradesQuery } from '../../services'
import { tradeBlotterColDef } from './config'
// import { Typography } from "@mui/material";

export const Blotter: React.FC = (): JSX.Element => {
  // eslint-disable-next-line no-unused-vars
  const [showNoRowsOverlay, setShowNoRowsOverlay] = useState<boolean>(false)
  // eslint-disable-next-line no-unused-vars
  const { data } = useGetTradesQuery(undefined, { pollingInterval: 30000 }) // Automatically refetch every 30s
  const rowClickHandler = useCallback(() => {}, [])
  return (
    <div>
      <DataGrid
        // gridData={[{ name: 'typescripttttt' }]}
        // colDef={[{ field: 'nameeeeee' }]}
        gridData={data || []}
        colDef={tradeBlotterColDef}
        showNoRowsOverlay={showNoRowsOverlay}
        rowClickHandler={rowClickHandler}
        size={{ width: '100%', height: 1000 }}
      ></DataGrid>
    </div>
  )
}
