import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface TableState {
  id: number
  type: string
}

const initialState: Array<TableState> = [
  { id: 1, type: 'online-table-chn' },
  { id: 2, type: 'model-portfolio-usa' }
]

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    addTable: (state, action: PayloadAction<TableState>) => {
      state.push(action.payload)
    },
    removeTable: (state, action: PayloadAction<number>) => {
      state.filter((item: TableState) => item.id !== action.payload)
    }
  }
})

export const { addTable, removeTable } = tableSlice.actions

export default tableSlice.reducer
