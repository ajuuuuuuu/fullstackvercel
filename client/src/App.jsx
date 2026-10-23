import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setmessage] = useState("")

  useEffect(() => {
    fetch("http://localhost:4000/api/message")
      .then((res) => res.json())
      .then((data) => setmessage(data.message))
      .catch((err) => {
        console.error("error", err)
      })
  }, [])

  return (
    <>
      <h1>chai or adarsh </h1>
      <h2>data: {message}</h2>
    </>
  )
}

export default App
