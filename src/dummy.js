// Cashbook instance using provided data
export const cashbookDataDummy = {
  receipts: [
    {
      from_whom: "Balance Carried Forward",
      receipt_no: "-",
      cash: "1,500.00", // Changed from number to string to match backend data
      bank: "5,000.00", // Changed from number to string to match backend data
      rmi: "-", // Changed from number to string to match backend data
      other_voteheads: "-",
    },
    {
      from_whom: "Petty Cash",
      receipt_no: "-",
      cash: "500", // Changed from number to string to match backend data
      bank: "-",
      rmi: "-",
      other_voteheads: "-",
      date: "2024-12-01T00:00:00Z", // Date included as in backend
    },
    {
      from_whom: "rmi",
      receipt_no: "-",
      cash: "-",
      bank: "5,000.00", // Changed from number to string to match backend data
      rmi: "-",
      other_voteheads: "-",
      date: "2024-12-16T10:00:00Z", // Date included as in backend
    },
    {
      from_whom: "school_fund",
      receipt_no: "-",
      cash: "50,000.00", // Changed from number to string to match backend data
      bank: "-",
      rmi: "-",
      other_voteheads: "-",
      date: "2024-12-16T00:00:00Z", // Date included as in backend
    },
    {
      from_whom: "school_fund",
      receipt_no: "-",
      cash: "5,000.00", // Changed from number to string to match backend data
      bank: "-",
      rmi: "-",
      other_voteheads: "-",
      date: "2024-12-15T00:00:00Z", // Date included as in backend
    },
    {
      from_whom: "operations_account",
      receipt_no: "-",
      cash: "-",
      bank: "150,000.00", // Changed from number to string to match backend data
      rmi: "-",
      other_voteheads: "-",
      date: "2024-12-01T00:00:00Z", // Date included as in backend
    },
  ],
  payments: [
    {
      type: "bankcharge",
      voucher_no: "",
      cheque_no: "",
      cash: "",
      bank: "",
      bank_charge: "250.50", // Changed from number to string to match backend data
      description: "Monthly account maintenance fee",
      date: "2024-12-20T00:00:00Z",
    },
    {
      type: "paymentvoucher",
      voucher_no: "12345", // Changed to string to match backend
      cheque_no: null,
      cash: "",
      bank: "10,000.00", // Changed from number to string to match backend data
      bank_charge: "",
      description: "Payment for services rendered",
      date: "2024-12-16T12:00:00Z",
    },
    {
      type: "paymentvoucher",
      voucher_no: "12345", // Changed to string to match backend
      cheque_no: null,
      cash: "",
      bank: "150,000.00", // Changed from number to string to match backend data
      bank_charge: "",
      description: "Payment for tuition-related expenses",
      date: "2024-12-16T10:30:00Z",
    },
    {
      type: "pettycash",
      voucher_no: "",
      cheque_no: "12345", // Changed to string to match backend
      cash: "500.00", // Changed from number to string to match backend data
      bank: "",
      bank_charge: "",
      description: "Office Supplies",
      date: "2024-12-15T00:00:00Z",
    },
  ],
  total_receipts: {
    total_cash_received: "55,500.00", // Changed from number to string to match backend data
    total_bank_received: "155,000.00", // Changed from number to string to match backend data
  },
  total_payments: {
    total_cash_payments: "500.00", // Changed from number to string to match backend data
    total_bank_payments: "160,000.00", // Changed from number to string to match backend data
    total_bankcharges: "250.50", // Changed from number to string to match backend data
  },
};

// Dummy data from provided financial data and ledger
export const financialData = {
  debits: {
    RMI: 10000.0,
    "Other Voteheads": 0,
    "School Fund": 0,
    Tuition: 150000.0,
    "Bank Charges": 250.5,
    "Closing Bank Balance": {
      amount: -750.5,
      cashbook: "bank",
    },
    "Closing Cash Balance": {
      amount: 57000.0,
      cashbook: "cash",
    },
  },
  credits: {
    RMI: 0,
    "Other Voteheads": 0,
    "School Fund": 55000.0,
    Tuition: 0,
    "Bank Charges": 0,
    "Opening Bank Balance": {
      amount: 5000.0,
      cashbook: "bank",
    },
    "Opening Cash Balance": {
      amount: 1500.0,
      cashbook: "cash",
    },
  },
  total_debits: 216500.0,
  total_credits: 61500.0,
};

export const ledger = {
  combined_ledger: {
    rmi_ledger: {
      credits: [],
      debits: [
        {
          date: "2024-12-16T12:00:00Z",
          amount: 10000.0,
          type: "debit",
          cashbook: "CashBook-6-2024-2025",
        },
      ],
      total_credits: 0,
      total_debits: 10000.0,
    },
    bankcharge_ledger: {
      debits: [
        {
          date: "2024-12-20T00:00:00Z",
          amount: 250.5,
          cashbook: "CashBook-6-2024-2025",
        },
      ],
      total_debits: 250.5,
    },
    school_fund_ledger: {
      credits: [
        {
          date: "2024-12-16T00:00:00Z",
          amount: 50000.0,
          type: "credit",
          cashbook: "CashBook-6-2024-2025",
        },
        {
          date: "2024-12-15T00:00:00Z",
          amount: 5000.0,
          type: "credit",
          cashbook: "CashBook-6-2024-2025",
        },
      ],
      debits: [],
      total_credits: 55000.0,
      total_debits: 0,
    },
    tuition_ledger: {
      credits: [],
      debits: [
        {
          date: "2024-12-16T10:30:00Z",
          amount: 150000.0,
          type: "debit",
          cashbook: "CashBook-6-2024-2025",
        },
      ],
      total_credits: 0,
      total_debits: 150000.0,
    },
    other_voteheads_ledger: {
      credits: [],
      debits: [],
      total_credits: 0,
      total_debits: 0,
    },
  },
};
