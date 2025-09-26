import React, { useEffect, useState } from 'react'
import TodoCreate from './components/TodoCreate'
import Todocontext from './context/Todocontext'
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo=(todo)=>{
    setTodos(prev=>[...prev,{...todo,id:Date.now()}]);
  }
  const updateTodo=(id,todo)=>{
      setTodos(prev=>prev.map(tod=>((tod.id==id)?todo:tod)));
  }
  const deleteTodo=(id)=>{
      setTodos(prev=>prev.filter(tod=>(tod.id!=id)));
  }
  const toggleComplete=(id)=>{
      setTodos(prev=>prev.map(tod=>((tod.id==id)?{...tod,completed:!tod.completed}:tod)))
  }
  useEffect(()=>{
    const storedTodos=JSON.parse(localStorage.getItem("todos"));
    if(storedTodos && storedTodos.length>0){
      setTodos(storedTodos);
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  return (
    <>
    <Todocontext.Provider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className='bg-gray-800 w-screen h-screen text-white flex flex-col items-center gap-10 pt-20'>
      <h1 className='text-3xl text-center'>Manage Your Todo's</h1>
      <div id='todoContainer'>
      <TodoCreate />
      </div>
      {todos.map(todo=>(<NewTodo todo={todo} key={todo.id}/>))}
    </div>
    
    </Todocontext.Provider>
    </>
  )
}

export default App
