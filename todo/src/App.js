import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './reducers/form'
import {initialState, reducer} from './reducers/reducer'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

const completed = event =>{
  dispatch({type:'COMPLETED'})
}

const toggle = (id) =>{
  dispatch({type:'TOGGLE', payload:id})
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        <TodoForm dispatch = {dispatch}/>
        <div>
          {state.todos.map(item =>{
            return(
              <h2 onClick = {() => toggle(item.id)}>{item.name}</h2>
            )
          })
          }
          <button onClick = {completed}>Clear Completed</button>
        </div>
      </header>
    </div>
  );
}

export default App;
