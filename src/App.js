import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { useCalendar } from "./common/hooks"
import { Calendar } from "./components/Calendar"
import { DoubleCalendar } from "./components/DoubleCalendar"

const currDate = new Date()

function App() {
  const { weeks } = useCalendar(currDate)
  console.log(weeks)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Calendar date={currDate} />
        <DoubleCalendar date={currDate} />
      </header>
    </div>
  )
}

export default App
