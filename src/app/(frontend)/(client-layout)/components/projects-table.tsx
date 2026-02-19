import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const projects = [
  {
    year: '2024',
    company: 'PPK GELORA BUNG KARNO',
    project:
      'GBK - Pengadaan Carpark Blower Fan Ruang Pompa Basement Sisi Kolam Pemanasan dan Diving',
  },
  {
    year: '2024',
    company: 'PT. SUMMARECON INVESTMENT PROFERTY',
    project: 'KGM - PEMBELIAN DAN PEMASANGAN FLEXIBLE JOINT 300 20K UK 12IN EVAP CHILLER MKG2',
  },
  {
    year: '2024',
    company: 'PT. MAYORA INDAH Tbk',
    project: 'MAYORA JAYANTI 2 - PENGADAAN FAN MAYORA JAYANTI 3',
  },
  {
    year: '2023',
    company: 'PT. Summarecon Agung Tbk',
    project: 'MEP - Project Penggantian Greasetrap',
  },
  {
    year: '2022',
    company: 'The City Tower',
    project: 'Building Perkantoran – Project System Ventilation ',
  },
]

export function ProjectsTable() {
  return (
    <Table>
      {/* <TableCaption>A list of your recent projects.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[40px] md:w-[80px] lg:w-[160px]">Year</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Project</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project, index) => (
          <TableRow key={index}>
            <TableCell className="text-center">{project.year}</TableCell>
            <TableCell>{project.company}</TableCell>
            <TableCell className="max-w-[420px] whitespace-normal">{project.project}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
