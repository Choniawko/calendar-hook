import React from "react"
import { useCalendar } from "../../common/hooks"
import { months } from "../../common/utils"
import { Container, Month, Week, Day } from "./Calendar.styles"

export default ({ date }) => {
  const { weeks, month, increment, decrement } = useCalendar(date)
  return (
    <>
      <Container>
        <button onClick={() => decrement()} type="button">
          prev
        </button>
        <Month>
          <div>{months[month]}</div>
          {weeks.map((week, i) => (
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
    </>
  )
}
