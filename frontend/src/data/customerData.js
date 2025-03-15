export function getTotalAmountByCustomerId(customerId) {
  // Dummy data - Replace with real calculation logic
  const amounts = {
    1: 5000,
    2: 3000,
    3: 7000,
  };
  return amounts[customerId] || 0;
}

export function getTotalDueByCustomerId(customerId) {
  // Dummy data - Replace with real calculation logic
  const dueAmounts = {
    1: 500,
    2: 1000,
    3: 0,
  };
  return dueAmounts[customerId] || 0;
}

export function getTotalWorkHoursByCustomerId(customerId) {
  // Dummy data - Replace with real calculation logic
  const workHours = {
    1: 40,
    2: 30,
    3: 50,
  };
  return workHours[customerId] || 0;
}
