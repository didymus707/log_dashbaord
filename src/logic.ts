export const entryBits = (totalRecords: number) => {
  let result: number[] = [];
  const bits = totalRecords / 5;
  for (let i = 1; i <= bits; i++) {
    result.push(5 * i);
  }
  return result;
};
