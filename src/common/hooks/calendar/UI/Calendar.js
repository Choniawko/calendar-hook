import React from "react"
import { useCalendar } from "../useCalendar"
import { Container, Month, Week, Day } from "./Calendar.styles"

export default () => {
  const { state, increment, decrement } = useCalendar()
  return (
    <Container>
      <button onClick={() => decrement()} type="button">
        prev
      </button>
      <Month>
        {state.weeks.map((week, i) => (
          <Week key={i}>
            {week.map((day, j) => (
              <Day key={j}>{day}</Day>
            ))}
          </Week>
        ))}
      </Month>
      <button onClick={() => increment()} type="button">
        next
      </button>
    </Container>
  )
}
