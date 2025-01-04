"use client";

import clsx from "clsx";

export const trialBalanceColumns = [
  {
    accessorKey: "description",
    header: () => (
      <div className="text-left">Account</div> // Align header to the left
    ),
    cell: ({ getValue }) => {
      const accountName = getValue();
      return <div className="text-sm text-left">{accountName}</div>;
    },
  },
  {
    accessorKey: "debits",
    header: () => (
      <div className="text-right">Debits</div> // Align header to the right
    ),
    cell: ({ getValue }) => {
      const value = parseFloat(getValue() || 0);
      return (
        <div
          className={clsx(
            "text-base font-medium text-red-700 text-right" // Red color for Debits, right-aligned
          )}
        >
          {value !== 0 ? value.toLocaleString("en-KE") : "-"}
        </div>
      );
    },
  },
  {
    accessorKey: "credits",
    header: () => (
      <div className="text-right">Credits</div> // Align header to the right
    ),
    cell: ({ getValue }) => {
      const value = parseFloat(getValue() || 0);
      return (
        <div
          className={clsx(
            "text-base font-medium text-green-700 text-right" // Green color for Credits, right-aligned
          )}
        >
          {value !== 0 ? value.toLocaleString("en-KE") : "-"}
        </div>
      );
    },
  },
];
