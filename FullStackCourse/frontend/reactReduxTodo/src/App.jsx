import React from 'react'
import CreateTodo from './components/createTodo'
import Todos from './components/Todos'

function App() {
  return (
    <>
        <div className='bg-gray-800 w-screen h-screen text-white flex flex-col items-center gap-10 pt-20'>
      <h1 className='text-3xl text-center'>Manage Your Todo's</h1>
      <CreateTodo />
      <Todos/>
      </div>
      
    </>
  )
}

export default App
