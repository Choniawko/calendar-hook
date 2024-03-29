import { useReducer, useCallback } from "react"
import { reducer, getInitialState, actions } from "./store"

export const useCalendar = date => {
  const [{ weeks, month, year }, dispatch] = useReducer(
    reducer,
    getInitialState(date),
  )

  const increment = useCallback(() => {
    dispatch(actions.increment.create())
  }, [])
  const decrement = useCallback(() => {
    dispatch(actions.decrement.create())
  }, [])

  return { weeks, month, year, increment, decrement }
}
