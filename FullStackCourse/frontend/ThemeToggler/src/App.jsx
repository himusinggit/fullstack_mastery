import React from 'react'
import Card from './components/Card'
import MyContextProvider from './context/MyContext'
function App() {
  return (
    <>
    <MyContextProvider>
    <Card></Card>
    </MyContextProvider>
    </>
  )
}

export default App
