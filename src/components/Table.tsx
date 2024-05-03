import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'

import { useGetTableQuery } from '../services/table'

export default function Table() {
  let location = useLocation()

  const { data, error, isLoading } = useGetTableQuery(location.state.type)

  console.log(data, error)

  const columns = useMemo(
    () => Object.keys(data! || error!).map((key)=>{
      return {
        Header: key,
        accessor: key
      }
    }),
    []
  )

  const table = useReactTable({
    columns,
    data: data! || error!,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div>
      {isLoading ? (
        <>Loading...</>
      ) : data || error ? (
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  )
}
