

export default function Body({todo,todoIndex,deleteToDo, updateTodo}){
        return(
        <div className="d-flex justify-content-around mt-4">
            <p className={todo.status === 'done' ? "w-25 text-decoration-line-through" : "w-25"}>{todo.name}</p>
            <button className="btn btn-danger" onClick={()=> deleteToDo(todoIndex)}>Delete</button>
            <div className="w-25 d-flex justify-content-center">
            <button className="btn btn-success " onClick={()=> updateTodo(todoIndex)}>{todo.status!=='done'?'Done':'In progress'}</button>
            </div>
        </div>
    )
}