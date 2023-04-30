export const calculateEstimateTokens = (currentPrice, investedPrice) => {
  let num = 0;
  const cp = Number(currentPrice);
  const ip = Number(investedPrice);
  if (cp !== null && ip !== null && cp > 0.0 && ip > 0.0) {
    num = (ip / cp).toFixed(7);
  }
  return num;
};

export const convertText = () => {
  return "Ram";
};
