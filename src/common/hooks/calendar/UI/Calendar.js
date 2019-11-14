import React from "react"
import { useCalendar } from "../useCalendar"
import { Container, Month, Week, Day } from "./Calendar.styles"

export default () => {
  const { state } = useCalendar()
  return (
    <Container>
      <Month>
        {state.weeks.map((week, i) => (
          <Week key={i}>
            {week.map((day, j) => (
              <Day key={j}>{day}</Day>
            ))}
          </Week>
        ))}
      </Month>
    </Container>
  )
}
