import React from 'react'
import TodoCreate from './components/TodoCreate'
import Todocontextprovider, { Todocontext } from './context/Todocontext'

function App() {
  return (
    <>
    <Todocontextprovider>
    <div className='bg-gray-800 w-screen h-screen text-white flex flex-col items-center gap-10 pt-20'>
      <h1 className='text-3xl text-center'>Manage Your Todo's</h1>
      <div id='todoContainer'>
      <TodoCreate />
      </div>
    </div>
    </Todocontextprovider>
    </>
  )
}

export default App
