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
import { Button } from "../ui/button";

export function ReceiptsDataTable({ columns, data, onSelectionChange }) {
  const [sorting, setSorting] = useState([]);
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    initialState: {
      rowSelection: {},
    },
    onSortingChange: setSorting,
    onRowSelectionChange: (updater) => {
      const newSelection = updater(rowSelection);
      setRowSelection(newSelection);
      if (onSelectionChange) onSelectionChange(newSelection);
    },
    state: {
      sorting,
      rowSelection,
    },
  });

  // Check for small screen size
  const isSmallScreen = window.innerWidth < 640;

  return (
    <div>
      {/* Conditionally render ScrollArea width based on screen size */}
      {isSmallScreen ? (
        <ScrollArea className="w-full rounded-md border overflow-x-auto">
          <Table className="text-xs sm:text-sm">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const isLeftAligned =
                      header.column.columnDef.header === "Received From";
                    return (
                      <TableHead
                        key={header.id}
                        className={`${
                          isLeftAligned ? "text-left" : "text-center"
                        } px-2 border-r`}
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
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => {
                      const isLeftAligned =
                        cell.column.columnDef.header === "Received From";
                      return (
                        <TableCell
                          key={cell.id}
                          className={`${
                            isLeftAligned ? "text-left" : "text-center"
                          } px-2 border-r`}
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
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      ) : (
        <ScrollArea className="w-full rounded-md border overflow-x-auto">
          <Table className="text-xs sm:text-sm">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const isLeftAligned =
                      header.column.columnDef.header === "Received From";
                    return (
                      <TableHead
                        key={header.id}
                        className={`${
                          isLeftAligned ? "text-left" : "text-center"
                        } px-2 border-r`}
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
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => {
                      const isLeftAligned =
                        cell.column.columnDef.header === "Received From";
                      return (
                        <TableCell
                          key={cell.id}
                          className={`${
                            isLeftAligned ? "text-left" : "text-center"
                          } px-2 border-r`}
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
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      )}
    </div>
  );
}
