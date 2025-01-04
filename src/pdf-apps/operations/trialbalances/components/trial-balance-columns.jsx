"use client";

import clsx from "clsx";

export const trialBalanceColumns = [
  {
    accessorKey: "description",
    header: () => (
      <div className="text-left w-[180px] sm:w-[140px] md:w-[180px]">
        Account
      </div> // Adjust width further for small screens
    ),
    cell: ({ getValue }) => {
      const accountName = getValue();
      return (
        <div className="text-sm text-left w-[180px] sm:w-[140px] md:w-[180px] truncate">
          {accountName}
        </div>
      );
    },
  },
  {
    accessorKey: "debits",
    header: () => (
      <div className="text-right w-[120px] sm:w-[100px] md:w-[120px]">
        Debits
      </div> // Adjust width for smaller screens
    ),
    cell: ({ getValue }) => {
      const value = parseFloat(getValue() || 0);
      return (
        <div
          className={clsx(
            "text-base font-medium text-red-700 text-right w-[120px] sm:w-[100px] md:w-[120px]"
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
      <div className="text-right w-[120px] sm:w-[100px] md:w-[120px]">
        Credits
      </div> // Adjust width for smaller screens
    ),
    cell: ({ getValue }) => {
      const value = parseFloat(getValue() || 0);
      return (
        <div
          className={clsx(
            "text-base font-medium text-green-700 text-right w-[120px] sm:w-[100px] md:w-[120px]"
          )}
        >
          {value !== 0 ? value.toLocaleString("en-KE") : "-"}
        </div>
      );
    },
  },
];
