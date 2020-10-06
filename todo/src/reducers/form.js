import React, {useReducer, useState} from 'react'

const TodoForm = (props) =>{
    const [data,setData] = useState('');

    const handleC = event =>{
        setData(event.target.value)
    }
    const Submit = event => {
        event.preventDefault()
        props.dispatch({type:'ADD_TODO',payload:data})
        setData('')
    }
    return(
            <form onSubmit = {Submit}>
            <div>
                <input 
                type = 'text'
                name = 'name'
                onChange = {handleC}
                value = {data} 
                />
                <button>Add Task</button>
            </div>
            </form>
         
    )
}
export default TodoForm