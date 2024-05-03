import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import BTable from 'react-bootstrap/Table'

import { useGetTableQuery } from '../services/table'
import { CompanyCHN, CompanyUSA } from '../types'

import 'bootstrap/dist/css/bootstrap.min.css'

const columnHelper = createColumnHelper<CompanyCHN | CompanyUSA>()

export default function Table() {
  let location = useLocation()

  const { data, error, isLoading } = useGetTableQuery(location.state.type)

  const columnsCHN = useMemo(
    () => [
      columnHelper.accessor('Название', {
        header: () => 'Название'
      }),
      columnHelper.accessor('Тикер', {
        header: () => 'Тикер'
      }),
      columnHelper.accessor('Сектор', {
        header: () => 'Сектор'
      }),
      columnHelper.accessor('Отрасль', {
        header: () => 'Отрасль'
      }),
      columnHelper.accessor('Уровень риска', {
        header: () => 'Уровень риска'
      }),
      columnHelper.accessor('Текущая цена', {
        header: () => 'Текущая цена'
      }),
      columnHelper.accessor('Точка входа', {
        header: () => 'Точка входа'
      }),
      columnHelper.accessor('Точка входа $', {
        header: () => 'Точка входа $'
      }),
      columnHelper.accessor('Потенциал', {
        header: () => 'Потенциал'
      }),
      columnHelper.accessor((row) => row['Ср-срочн. потенциал'], {
        id: 'Ср-срочн. потенциал',
        header: () => 'Ср-срочн. потенциал'
      }),
      columnHelper.accessor('Долгосрочный потенциал', {
        header: () => 'Долгосрочный потенциал'
      }),
      columnHelper.accessor('Валюта', {
        header: () => 'Валюта'
      }),
      columnHelper.accessor('Потенциал роста', {
        header: () => 'Потенциал роста'
      }),
      columnHelper.accessor('Долгосрочный потенциал роста', {
        header: () => 'Долгосрочный потенциал роста'
      })
    ],
    []
  )

  const columnsUSA = useMemo(
    () => [
      columnHelper.accessor('компания', {
        header: () => 'Компания'
      }),
      columnHelper.accessor('тикер', {
        header: () => 'Тикер'
      }),
      columnHelper.accessor('сектор', {
        header: () => 'Сектор'
      }),
      columnHelper.accessor('доля', {
        header: () => 'Доля'
      }),
      columnHelper.accessor('Текущая цена', {
        header: () => 'Текущая цена'
      }),
      columnHelper.accessor('Точка входа', {
        header: () => 'Точка входа'
      }),
      columnHelper.accessor('Потенциал', {
        header: () => 'Потенциал'
      }),
      columnHelper.accessor('Уровень риска', {
        header: () => 'Уровень риска'
      }),
      columnHelper.accessor((row) => row['Ср-срочн. потенциал'], {
        id: 'Ср-срочн. потенциал',
        header: () => 'Ср-срочн. потенциал'
      }),
      columnHelper.accessor('Дивиденды', {
        header: () => 'Дивиденды'
      }),
      columnHelper.accessor('Потенциал роста', {
        header: () => 'Потенциал роста'
      }),
      columnHelper.accessor('Долгосрочный потенциал роста', {
        header: () => 'Долгосрочный потенциал роста'
      }),
      columnHelper.accessor('FWD P/E', {
        header: () => 'FWD P/E'
      }),
      columnHelper.accessor('Sales 5 past years', {
        header: () => 'Sales 5 past years'
      })
    ],
    []
  )

  const table = useReactTable({
    columns: data ? columnsUSA : columnsCHN,
    data: data! || error!,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className='p-2'>
      {isLoading ? (
        <>Loading...</>
      ) : data || error ? (
        <BTable striped bordered hover responsive variant="dark">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} colSpan={header.colSpan}>
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
        </BTable>
      ) : null}
    </div>
  )
}
