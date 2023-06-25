export const calculatePercentageChange = (
  previous: number,
  current: number
) => {
  const change = current - previous;
  const percentageChange = (change / previous) * 100;
  const isIncrease = change > 0;
  return { isIncrease, percentage: Math.abs(percentageChange).toFixed(2) };
};
