import { useState } from "react"



export default function Header({addTodo}){
    const [inputText,setInputText]= useState('');
    const getInputValue = (event)=>{
        setInputText(event.target.value)
    }
    const handleAddToDo = ()=>{
        addTodo(inputText)
        setInputText('')
    }
    return(
        <div className="container-fluid d-flex flex-column gap-4  align-items-center">
        <input type="text" className="form-control" placeholder="Enter your todo" value={inputText} onChange={getInputValue}/>
        <button className="btn - btn-success ps-3 pe-3 ms-auto me-5" onClick={handleAddToDo}>Add</button>
        </div>
            
    )
}