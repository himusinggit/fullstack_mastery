import React, { useContext, useState } from 'react'
import NewTodo from './NewTodo'
import Todocontext from '../context/Todocontext'
function TodoCreate() {
    const {addTodo}=useContext(Todocontext);
    const [todo,setTodo]=useState("");
    let {todos,setTodos}=useContext(Todocontext);
    const createNewTodo=(e)=>{
        e.preventDefault();
        if(todo){
            addTodo({message:todo,completed:false});
            setTodo("");
        }
    }
    return (
        <>
       <div className='flex'>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} className='w-180 bg-gray-600 outline-none rounded-l-xl h-10 text-lg p-3'/>
        <button className='bg-green-600 h-10 rounded-r-xl w-20' onClick={createNewTodo}>Add</button>
       </div> 
       </>
    )
}

export default TodoCreate
