import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todo';
function CreateTodo() {
    const dispatch=useDispatch();
    const [todo, setTodo] = useState("");
    const createNewTodo=(e)=>{
        e.preventDefault();
        dispatch(addTodo(todo));
        setTodo("")
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

export default CreateTodo
