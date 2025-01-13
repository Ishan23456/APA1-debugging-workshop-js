function calculatePercentageChange(original, newAmount) {
  const difference = (newAmount - original);
  const percentageDifference = (difference == 0) ? 0 : ((difference/original) * 100);
  return parseInt(percentageDifference.toFixed(0));
}

module.exports = { calculatePercentageChange };
