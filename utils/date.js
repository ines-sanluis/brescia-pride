const dateFormatter = new Intl.DateTimeFormat("it-IT", {
  // year: "numeric",
  month: "long",
  day: "numeric",
});

export const nextDate = new Date(2023, 8, 2, 15, 0, 0, 0);
export const nextDateAsString = dateFormatter.format(nextDate);
export const nextPrideYear = nextDate.getFullYear();
