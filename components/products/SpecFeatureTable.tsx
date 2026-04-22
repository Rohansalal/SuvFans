'use client';

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { SpecFeatureRow } from '@/lib/products';

interface SpecFeatureTableProps {
  data: SpecFeatureRow[];
}

const SpecFeatureTable = ({ data }: SpecFeatureTableProps) => {
  return (
    <div className="rounded-xl border border-gray-100 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-[#0A2E5C]">
            <TableRow className="hover:bg-[#0A2E5C]">
              <TableHead className="text-white font-bold whitespace-nowrap w-1/3">Feature</TableHead>
              <TableHead className="text-white font-bold">Specification</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <TableCell className="font-bold text-[#0A2E5C] align-top">{row.feature}</TableCell>
                <TableCell className="text-gray-700">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default SpecFeatureTable;
