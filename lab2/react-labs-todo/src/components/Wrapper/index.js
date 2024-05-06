import { useState } from "react"
import Body from "../Body/index"
import Header from "../Header/index"



export default function Wrapper(){
    const [todos,settodos]=useState([])
    const addTodo = (name)=>{
        settodos([...todos,{name,status:'still'}])
        console.log(todos)
    }
    const deleteToDo = (index)=>{
        const updatedTodo = todos.filter((todo,i)=> {
            return i!=index
    })
        settodos(updatedTodo)
    }
    const updateTodo = (index) => {
        const updatedTodo = todos.map((todo, i) => {
            if (i === index) {
               const  newstatus= todo.status==='done'?'still':'done'
                return { ...todo, status:newstatus};
            }
            return todo;
        });
        settodos(updatedTodo);
    };
    return(
        <div className="container bg-info  rounded-4 mt-5 p-5">
            <h1 className="text-center mb-4">To Do List</h1>
            <Header addTodo={(name)=>addTodo(name)}/>
            {todos.map((todo,index) => {
                console.log(todo)
                return(
                <Body todo={todo} todoIndex={index} deleteToDo={(index)=>deleteToDo(index)} updateTodo={(index)=>updateTodo(index)}/>
                )
            })}
        </div>
    )
}