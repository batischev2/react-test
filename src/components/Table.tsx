import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { useReactTable } from '@tanstack/react-table'

import { useGetTableQuery } from '../services/table'
import { CompanyCHN, CompanyUSA } from '../types'

export default function Table() {
  let location = useLocation()

  const columns = useMemo(() => [], [])

  const { data, error, isLoading } = useGetTableQuery(location.state.type)

  console.log(data, error)

  // const filteredData = useMemo(() => data?.filter(d => d.isActive) ?? [], [data]);

  // const table = useReactTable({
  //   columns,
  //   data: filteredData,
  // });

  return (
    <div>
      {error ? (
        <>Error!</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {data.map((item: CompanyCHN | CompanyUSA, index: number) => {
            return <div key={index}>{item['Уровень риска']}</div>
          })}
        </>
      ) : null}
    </div>
  )
}
