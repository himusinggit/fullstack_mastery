import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[]
}
const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push({id:nanoid(),message:action.payload,completed:false});
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter(todo=>(todo.id!==action.payload));
        },
        updateTodo:(state,action)=>{
            state.todos=state.todos.map(todo=>(todo.id==action.payload.id)?{...todo,message:action.payload.message}:todo);
        }
    }
})
export const {addTodo,deleteTodo,updateTodo}=todoSlice.actions;
export default todoSlice.reducer;