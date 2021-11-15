import './todolist.css'
import { RiCloseCircleLine } from 'react-icons/ri'

function TodoList({list, handleToggle, handleremove}){
    return (

        <div>
            {list.map((e,index)=>(
                <div key={e.id} id="list">

                    <i className="fas fa-trash" id="remove" onClick={()=>
                    handleremove(e.id,index)
                    }></i>


                    <button id="check" onClick={()=>
                    handleToggle(e.id)
                    
                    } > <i className="fas fa-check-circle"></i> </button>

                    
                    <h4 id="listname" className={e.status ? "strike" : ""}>
                        {e.title}
                    </h4>
                    </div>
            ))}
        </div>
    )
}

export {TodoList}