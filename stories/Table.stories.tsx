import type { Meta, StoryObj } from '@storybook/react'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Table>

export const TableExample: Story = {
  render: () => (
    <div className="overflow-x-auto border-0">
      <Table>
        <TableHeader>
          <TableRow className="border-0 border-b border-border-default">
            <TableHead className="text-text-primary">Program</TableHead>
            <TableHead className="text-text-primary">Status</TableHead>
            <TableHead className="text-text-primary">Deadline</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-0 border-b border-border-subtle">
            <TableCell>Explore and Create</TableCell>
            <TableCell><Badge className="bg-feedback-success text-white">Open</Badge></TableCell>
            <TableCell>Dec 31, 2024</TableCell>
          </TableRow>
          <TableRow className="border-0 border-b border-border-subtle">
            <TableCell>Concept to Realization</TableCell>
            <TableCell><Badge className="bg-feedback-success text-white">Open</Badge></TableCell>
            <TableCell>Jan 15, 2025</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
}
