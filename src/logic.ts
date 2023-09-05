export const entryBits = (totalRecords: number) => {
  let result: number[] = [];
  const bits = totalRecords / 5;
  for (let i = 1; i <= bits; i++) {
    result.push(5 * i);
  }
  return result;
};

export const formatDate = (parameter: object) => {
  const dateInput = String(parameter);
  const year = new Date(dateInput).getFullYear();
  const month = String(new Date(dateInput).getMonth() + 1).padStart(2, "0");
  const day = String(new Date(dateInput).getDay()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const disableDateFilterButton = (startDate: any, endDate: any) => {
  if (startDate && !endDate) {
    return false
  } else if (!startDate || !endDate) {
    return true;
  }
}