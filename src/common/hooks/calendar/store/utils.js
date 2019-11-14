const { Calendar } = require("calendar")
const calendar = new Calendar(1)
export const currMonth = (year, month) => calendar.monthDays(year, month)

export const getInitialState = currDate => ({
  year: currDate.getFullYear(),
  month: currDate.getMonth(),
  weeks: currMonth(currDate.getFullYear(), currDate.getMonth()),
})

export const incrementMonth = current => (current === 11 ? 0 : current + 1)
export const decrementMonth = current => (current === 0 ? 11 : current - 1)
export const incrementYear = (incMonth, currentYear) =>
  incMonth === 0 ? currentYear + 1 : currentYear
export const decrementYear = (decMonth, currentYear) =>
  decMonth === 11 ? currentYear - 1 : currentYear
