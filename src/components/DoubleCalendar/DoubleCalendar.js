import React from "react"
import { useCalendar } from "../../common/hooks"
import { months } from "../../common/utils"
import { Container, Month, Week, Day } from "./DoubleCalendar.styles"

export default ({ date }) => {
  const leftCalendar = useCalendar(date)
  const rightCalendar = useCalendar(
    new Date(date.setMonth(date.getMonth() + 1)),
  )
  return (
    <Container>
      {[leftCalendar, rightCalendar].map((calendar, i) => (
        <Month key={i}>
          <div>{months[calendar.month]}</div>
          {calendar.weeks.map((week, i) => (
            <Week key={i}>
              {week.map((day, j) => (
                <Day key={j}>{day}</Day>
              ))}
            </Week>
          ))}
        </Month>
      ))}
      <button
        onClick={() => {
          leftCalendar.decrement()
          rightCalendar.decrement()
        }}
        type="button"
      >
        prev
      </button>
      <button
        onClick={() => {
          leftCalendar.increment()
          rightCalendar.increment()
        }}
        type="button"
      >
        next
      </button>
    </Container>
  )
}
