"use client";

import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export function LedgerDataTable({
  columns,
  data,
  columnWidths,
  onSelectionChange,
}) {
  const [sorting, setSorting] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    initialState: {
      rowSelection: {},
    },
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: (updater) => {
      const newSelection = updater(rowSelection);
      setRowSelection(newSelection);
      if (onSelectionChange) onSelectionChange(newSelection);
    },
    state: {
      sorting,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="overflow-hidden border rounded-md outline outline-red-500 max-w-[500px]">
      {" "}
      {/* Debugging container */}
      <ScrollArea className="w-full outline outline-blue-500">
        <Table className="min-w-full table-auto whitespace-nowrap text-sm border border-green-500 overflow-auto">
          <TableHeader className="outline outline-purple-500">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => {
                  const width = columnWidths?.[index] || "auto";
                  const isLeftAligned =
                    header.column.columnDef.header === "Description";
                  return (
                    <TableHead
                      key={header.id}
                      className={`${
                        isLeftAligned ? "text-left" : "text-center"
                      } border border-yellow-500 truncate`}
                      style={{ width }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="outline outline-orange-500">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell, index) => {
                    const isLeftAligned =
                      cell.column.columnDef.header === "Description";
                    return (
                      <TableCell
                        key={cell.id}
                        className={`${
                          isLeftAligned ? "text-left" : "text-center"
                        } border border-gray-500 truncate`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-gray-500"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
