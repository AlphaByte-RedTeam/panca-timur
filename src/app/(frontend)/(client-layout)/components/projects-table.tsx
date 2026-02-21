'use client'
import PaginatedTable from './project-table-dynamic'
import { useQuery } from '@tanstack/react-query'
import { PayloadSDK } from '@payloadcms/sdk'
import type { Config, PortofolioProject } from '@/payload-types'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'

// const projects = [
//   {
//     id: '1',
//     year: '2024',
//     company: 'PPK GELORA BUNG KARNO',
//     project:
//       'GBK - Pengadaan Carpark Blower Fan Ruang Pompa Basement Sisi Kolam Pemanasan dan Diving',
//   },
//   {
//     id: '2',
//     year: '2024',
//     company: 'PT. SUMMARECON INVESTMENT PROFERTY',
//     project: 'KGM - PEMBELIAN DAN PEMASANGAN FLEXIBLE JOINT 300 20K UK 12IN EVAP CHILLER MKG2',
//   },
//   {
//     id: '3',
//     year: '2024',
//     company: 'PT. MAYORA INDAH Tbk',
//     project: 'MAYORA JAYANTI 2 - PENGADAAN FAN MAYORA JAYANTI 3',
//   },
//   {
//     id: '4',
//     year: '2023',
//     company: 'PT. Summarecon Agung Tbk',
//     project: 'MEP - Project Penggantian Greasetrap',
//   },
//   {
//     id: '5',
//     year: '2022',
//     company: 'The City Tower',
//     project: 'Building Perkantoran – Project System Ventilation ',
//   },
// ]

const sdk = new PayloadSDK<Config>({
  baseURL: '/api',
})

export function ProjectsTable() {
  const query = useQuery<{ docs: PortofolioProject[] }>({
    queryKey: ['table-query'],
    queryFn: async () => {
      return await sdk.find({
        collection: 'portofolio-projects',
        limit: 0,
        sort: '-year',
      })
    },
  })

  if (query.isError) {
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Year</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Project</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                Terjadi Kesalahan
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    )
  }

  if (query.isLoading) {
    return <Skeleton className="bg-gray-100 w-full h-80" />
  }
  if (!query.data || query.data.docs.length === 0) {
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Year</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Project</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                No Data
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    )
  }
  return <PaginatedTable data={query.data.docs} />
}
