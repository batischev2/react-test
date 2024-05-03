import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import json5 from 'json5'

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
      },
      transformErrorResponse: (response: { data: any, status: any}) => {
        return json5.parse(response.data)
      },
    })
  })
})

export const { useGetTableQuery } = tableApi
