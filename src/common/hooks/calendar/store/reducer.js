import { actions } from "./actions"
import {
  incrementMonth,
  incrementYear,
  decrementMonth,
  decrementYear,
  currMonth,
} from "./utils"
const { increment, decrement } = actions

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
