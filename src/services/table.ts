import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { CompanyCHN, CompanyUSA } from '../types'
import { Config } from '../config'

export const tableApi = createApi({
  reducerPath: 'tableApi',
  baseQuery: fetchBaseQuery({ baseUrl: Config.API_URL }),
  endpoints: (builder) => ({
    getTable: builder.query<Array<CompanyCHN | CompanyUSA>, string>({
      query: (type) => type,
      transformResponse: (response: Array<CompanyCHN | CompanyUSA>) => {
        return response
      }
    })
  })
})

export const { useGetTableQuery } = tableApi
