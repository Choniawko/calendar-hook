import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { useCalendar, Calendar } from "./common/hooks"

function App() {
  const { state } = useCalendar()
  console.log(state.weeks)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Calendar />
      </header>
    </div>
  )
}

export default App
