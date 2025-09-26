import React from 'react'

function NewTodo({todo}) {
    return (
         <div className={`${(todo.completed)?"bg-green-300":"bg-gray-300"} h-10 w-200 rounded-xl flex items-center gap-2 text-black p-2`}>
                <input type="checkbox" id="" value={todo.completed} onChange={()=>{toggleComplete(todo.id)}} />
                <input type='text' value={todoMessage} onChange={(e)=>setTodoMeassage(e.target.value)} readOnly={!isEditable} className={`${(todo.completed)?"line-through":""}`} />
                < i className={`${(isEditable)?"ri-save-line":"ri-edit-line"}`} onClick={()=>{
                    if(todo.completed){return;}
                    if(isEditable){editTodo()}
                    else{setIsEditable(true)}
                    }}></i>
                <i className="ri-delete-bin-line" onClick={()=>{deleteTodo(todo.id)}}></i>
            </div>
    )
}

export default NewTodo
