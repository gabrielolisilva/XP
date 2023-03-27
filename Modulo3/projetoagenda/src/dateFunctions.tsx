export const MONTHS = [
  "",
  "Janeiro",
  "Feveiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

function formatedNumber(value: number) {
  return value < 10 ? `0${value}` : value;
}

export function getTodayDate() {
  return "2021-06-17";
}

export function formatDate(date: string): string {
  const [year, month] = date.split("-");
  const monthWithout0 = Number(month);
  const mounthName = MONTHS[monthWithout0];
  return `${mounthName} de ${year}`;
}

export function prevMounth(date: string): string {
  const [year, month] = date.split("-");
  const previousMonth = Number(month) - 1;
  let newMonth = formatedNumber(previousMonth);
  if (newMonth < 1) {
    newMonth = 12;
    const newYear = Number(year) - 1;
    return `${newYear}-${newMonth}`;
  }
  return `${year}-${newMonth}`;
}

export function nextMounth(date: string): string {
  const [year, month] = date.split("-");
  const nextMonth = Number(month) + 1;
  let newMonth = formatedNumber(nextMonth);
  if (newMonth > 12) {
    newMonth = formatedNumber(1);
    const newYear = Number(year) + 1;
    return `${newYear}-${newMonth}`;
  }
  return `${year}-${newMonth}`;
}
