import React, { useContext } from 'react'
import NewTodo from './NewTodo'
import { Todocontext } from '../context/Todocontext'
function TodoCreate() {
    let {todos,setTodos}=useContext(Todocontext);
    const createNewTodo=()=>{
        
    }
    return (
        <>
       <div className='flex'>
        <input type="text" className='w-180 bg-gray-600 outline-none rounded-l-xl h-10 text-lg p-3'/>
        <button className='bg-green-600 h-10 rounded-r-xl w-20' onClick={createNewTodo}>Add</button>
       </div> 
       <NewTodo />
       </>
    )
}

export default TodoCreate
