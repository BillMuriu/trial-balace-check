"use client";

import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

export const receiptsColumns = [
  {
    accessorKey: "from_whom",
    header: ({ column }) => <div className="text-left">From Whom</div>,
    cell: ({ row }) => {
      const rawValue = row.original.from_whom;

      // Function to format the value (e.g., "pettycash" → "Petty Cash")
      const formatValue = (str) =>
        str
          .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between camelCase
          .replace(/_/g, " ") // Replace underscores with spaces
          .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word

      const formattedValue = formatValue(rawValue);

      // Define badge colors based on value
      const badgeColors = {
        pettycash: "border-purple-500 bg-purple-100 text-purple-500",
        paymentvoucher: "border-blue-500 bg-blue-100 text-blue-500",
        cheque: "border-green-500 bg-green-100 text-green-500",
        bankcharge: "border-orange-500 bg-orange-100 text-orange-500",
        rmi: "border-yellow-500 bg-yellow-100 text-yellow-500",
        schoolfund: "border-teal-500 bg-teal-100 text-teal-500",
        tuition: "border-pink-500 bg-pink-100 text-pink-500",
      };

      const badgeClass =
        badgeColors[rawValue.toLowerCase()] ||
        "border-gray-500 bg-gray-100 text-gray-500"; // Default color

      return (
        <div className="flex items-center space-x-2">
          <Badge
            variant="outline"
            className={`flex items-center justify-center ${badgeClass}`}
          >
            {formattedValue}
          </Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "receipt_no",
    header: "Receipt No",
  },
  {
    accessorKey: "cash",
    header: "Cash (KES)",
    cell: ({ getValue }) =>
      parseFloat(getValue().replace(/,/g, "")).toLocaleString("en-KE"),
  },
  {
    accessorKey: "bank",
    header: "Bank (KES)",
    cell: ({ getValue }) =>
      parseFloat(getValue().replace(/,/g, "")).toLocaleString("en-KE"),
  },
  {
    accessorKey: "rmi",
    header: "RMI",
    cell: ({ getValue }) => {
      const value = getValue();
      return (
        <span className="text-sm">
          {value === "-" ? "-" : parseFloat(value).toLocaleString("en-KE")}
        </span>
      );
    },
  },
  {
    accessorKey: "other_voteheads",
    header: "Other Voteheads",
    cell: ({ getValue }) => {
      const value = getValue();
      return <span className="text-sm">{value}</span>;
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ getValue }) => {
      const dateValue = getValue();
      const parsedDate = new Date(dateValue);

      // Check if the date is valid
      if (isNaN(parsedDate)) {
        return <span className="text-sm">Invalid Date</span>;
      }

      return format(parsedDate, "MM/dd/yyyy");
    },
  },
];
