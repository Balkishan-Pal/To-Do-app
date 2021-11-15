import { useState } from 'react'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'
import './todo.css'

function Todo(){
    const [Todo, setTodoList] = useState([])
    const [showFiltered, setShowFiltered] = useState(false)

    const handleAddTodo = (todo)=>{
            setTodoList([...Todo,todo])
    }

    const handleToggle = (id)=>{
        const updatedList = Todo.map((todo)=>{
            if(todo.id===id){
                todo.status = !todo.status
            }
            return todo
        })
        setTodoList(updatedList)
    }

    const handleremove = (id,index)=>{
        Todo.map((todo)=>{
            if(todo.id===id){
                Todo.splice(index, 1); 
            }
            return todo
        })
        setTodoList([...Todo])
    }

    return(
        <div>
            <TodoInput handleAddTodo={handleAddTodo}/>
            <TodoList list={showFiltered? Todo.filter((e)=>e.status):Todo} handleToggle={handleToggle} handleremove={handleremove}/>
            <button id="show" onClick={()=>{
                setShowFiltered(!showFiltered)
            }}>{showFiltered? "Show All" : "Show Completed"}</button>
        </div>
    )
}

export {Todo}