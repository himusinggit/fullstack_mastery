import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { deleteTodo } from '../features/todo/todo'
// import NewTodo from './NewTodo';
function Todos() {
    const todos=useSelector(state=>state.todos);
    const dispatch=useDispatch();
    return (
     <>
     {
        todos.map(todo=><div key={todo.id}><li>{todo.message}</li></div>)
     }
     </>   
    )
}

export default Todos
