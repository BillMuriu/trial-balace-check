// Dummy data
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

// Dummy data for the ledger
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
