import { configureStore } from '@reduxjs/toolkit'
import tableReducer from './features/table/tableSlice'
import { tableApi } from './services/table'

export const store = configureStore({
  reducer: {
    tables: tableReducer,
    [tableApi.reducerPath]: tableApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tableApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
