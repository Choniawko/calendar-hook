import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { useCalendar, Calendar } from "./common/hooks"

function App() {
  const { state } = useCalendar(new Date())
  console.log(state.weeks)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Calendar date={new Date()} />
      </header>
    </div>
  )
}

export default App
