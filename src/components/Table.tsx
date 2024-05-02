import { useReactTable } from '@tanstack/react-table'
import { useMemo } from 'react'
import { useGetTableChinaQuery, useGetTableUsaQuery } from '../services/table'

export default function Table() {
  const columns = useMemo(() => [

  ], []);

  const { data, error, isLoading } = useGetTableChinaQuery('bulbasaur')

  console.log(data, error, isLoading)

  // const filteredData = useMemo(() => data?.filter(d => d.isActive) ?? [], [data]);

  // const table = useReactTable({
  //   columns,
  //   data: filteredData,
  // });

  return <div>13242</div>
}
