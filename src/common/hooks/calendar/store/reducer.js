import { actions } from "./actions"

const { Calendar } = require("calendar")
const calendar = new Calendar(1)
const currMonth = (year, month) => calendar.monthDays(year, month)

export const getInitialState = currDate => ({
  year: currDate.getFullYear(),
  month: currDate.getMonth(),
  weeks: currMonth(currDate.getFullYear(), currDate.getMonth()),
})

const { increment, decrement } = actions

const incrementMonth = current => (current === 11 ? 0 : current + 1)
const decrementMonth = current => (current === 0 ? 11 : current - 1)
const incrementYear = (incMonth, currentYear) =>
  incMonth === 0 ? currentYear + 1 : currentYear
const decrementYear = (decMonth, currentYear) =>
  decMonth === 11 ? currentYear - 1 : currentYear

export const reducer = (state, { type }) => {
  switch (type) {
    case increment.type:
      return {
        ...state,
        month: incrementMonth(state.month),
        year: incrementYear(incrementMonth(state.month), state.year),
        weeks: currMonth(
          incrementYear(incrementMonth(state.month), state.year),
          incrementMonth(state.month),
        ),
      }
    case decrement.type:
      return {
        ...state,
        month: decrementMonth(state.month),
        year: decrementYear(decrementMonth(state.month), state.year),
        weeks: currMonth(
          decrementYear(decrementMonth(state.month), state.year),
          decrementMonth(state.month),
        ),
      }
    default:
      return state
  }
}
