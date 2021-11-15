import { nanoid } from "nanoid"
import { useState } from "react"
import './todoinput.css'

function TodoInput({handleAddTodo}){
    const [text, setText] = useState("")

    const handlechange = ({target}) =>{
        setText(target.value)
    }    
    const handlesubmit = () =>{
        const data ={
            id: nanoid(5),
            title: text,
            status: false
        }
        handleAddTodo(data)
        setText("")
    }
    return(
        <div>
            <h2 id="title">My Todos</h2>
            <input onChange={handlechange} type="text" placeholder="Add a Todo" value={text} id="values"/>
            <button id="btn" onClick={handlesubmit}>+</button>
        </div>
    )
}

export {TodoInput}