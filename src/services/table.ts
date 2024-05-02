import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { CompanyCHN, CompanyUSA } from '../types'
import { Config } from '../config'

export const tableApi = createApi({
  reducerPath: 'tableApi',
  baseQuery: fetchBaseQuery({ baseUrl: Config.API_URL }),
  endpoints: (builder) => ({
    getTableChina: builder.query<CompanyUSA, string>({
      query: () => `online-table-chn`
    }),
    getTableUsa: builder.query<CompanyCHN, string>({
      query: () => `model-portfolio-usa`
    })
  })
})

export const { useGetTableChinaQuery, useGetTableUsaQuery } = tableApi
