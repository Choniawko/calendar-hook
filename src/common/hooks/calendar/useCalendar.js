import { useReducer, useCallback } from "react"
import { reducer, initialState, actions } from "./store"

export const useCalendar = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const increment = useCallback(() => {
    dispatch(actions.increment.create())
  }, [])
  const decrement = useCallback(() => {
    dispatch(actions.decrement.create())
  }, [])

  return { state, increment, decrement }
}
