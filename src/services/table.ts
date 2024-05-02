import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { CompanyCHN, CompanyUSA } from '../types'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<CompanyUSA, string>({
      query: (name) => `pokemon/${name}`
    }),
    getPokemonBySurname: builder.query<CompanyCHN, string>({
      query: (name) => `pokemon/${name}`
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi
