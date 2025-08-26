import { cn } from '@/lib/utils'

interface TableProps {
  children: React.ReactNode
  className?: string
}

interface TableHeaderProps {
  children: React.ReactNode
  className?: string
}

interface TableBodyProps {
  children: React.ReactNode
  className?: string
}

interface TableRowProps {
  children: React.ReactNode
  className?: string
}

interface TableHeaderCellProps {
  children: React.ReactNode
  className?: string
}

interface TableCellProps {
  children: React.ReactNode
  className?: string
}

function Table({ children, className }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className={cn(
        "w-full font-mono text-sm border-collapse",
        className
      )}>
        {children}
      </table>
    </div>
  )
}

function TableHeader({ children, className }: TableHeaderProps) {
  return (
    <thead className={className}>
      {children}
    </thead>
  )
}

function TableBody({ children, className }: TableBodyProps) {
  return (
    <tbody className={cn(
      "text-stone-600 dark:text-stone-400",
      className
    )}>
      {children}
    </tbody>
  )
}

function TableRow({ children, className }: TableRowProps) {
  return (
    <tr className={cn(
      "border-b border-stone-100 dark:border-stone-900",
      className
    )}>
      {children}
    </tr>
  )
}

function TableHeaderCell({ children, className }: TableHeaderCellProps) {
  return (
    <th className={cn(
      "text-left p-3 text-stone-900 dark:text-stone-100 border-b border-stone-200 dark:border-stone-800",
      className
    )}>
      {children}
    </th>
  )
}

function TableCell({ children, className }: TableCellProps) {
  return (
    <td className={cn(
      "p-3",
      className
    )}>
      {children}
    </td>
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell
}