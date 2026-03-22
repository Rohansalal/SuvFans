'use client';

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SpecTableRow } from '@/lib/products';

interface SpecTableProps {
  data: SpecTableRow[];
}

const SpecTable = ({ data }: SpecTableProps) => {
  return (
    <div className="rounded-xl border border-gray-100 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-[#0A2E5C]">
            <TableRow className="hover:bg-[#0A2E5C]">
              <TableHead className="text-white font-bold whitespace-nowrap">Size</TableHead>
              <TableHead className="text-white font-bold whitespace-nowrap">Airflow (CMH)</TableHead>
              <TableHead className="text-white font-bold whitespace-nowrap">Voltage</TableHead>
              <TableHead className="text-white font-bold whitespace-nowrap">Power (W)</TableHead>
              <TableHead className="text-white font-bold whitespace-nowrap">RPM</TableHead>
              <TableHead className="text-white font-bold whitespace-nowrap">Sound (dBA)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <TableCell className="font-bold text-[#0A2E5C]">{row.size}</TableCell>
                <TableCell>{row.airflow}</TableCell>
                <TableCell>{row.voltage}</TableCell>
                <TableCell>{row.power}</TableCell>
                <TableCell>{row.rpm}</TableCell>
                <TableCell>{row.sound}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default SpecTable;
