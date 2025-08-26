import { Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell } from '@/app/components/core/table'

interface PropData {
  name: string
  type: string
  defaultValue?: string
  description: string
}

interface PropsTableProps {
  data: PropData[]
}

export function PropsTable({ data }: PropsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>PROP</TableHeaderCell>
          <TableHeaderCell>TYPE</TableHeaderCell>
          <TableHeaderCell>DEFAULT</TableHeaderCell>
          <TableHeaderCell>DESCRIPTION</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((prop) => (
          <TableRow key={prop.name}>
            <TableCell>{prop.name}</TableCell>
            <TableCell>{prop.type}</TableCell>
            <TableCell>{prop.defaultValue || '-'}</TableCell>
            <TableCell>{prop.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}