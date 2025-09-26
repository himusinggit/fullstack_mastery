import React, { createContext, useState } from "react";
const Todocontext=createContext({
    todos:[{
        id:"1234",
        message:"hello",
        completed:false
    }],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
});
export default Todocontext;