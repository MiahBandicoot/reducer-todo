
export const initialState = {
    todos:[{
    name:'',
    completed: false,
    id: 1
}]
}
export const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            const newTodo = {
                name:action.payload,
                id:new Date(),
                completed:false,
                
              }
              return{
                  ...state,
                todos:[newTodo, ...state.todos]
              }

        case 'COMPLETED':
            return{...state,
                todos: state.todos.filter(todo => !todo.completed)
                
            }
        case 'TOGGLE':
            return{
            ...state,
                todos:state.todos.map(todo => {
                  if(todo.id === action.payload){
                    return {...todo, completed:!todo.completed}
                  }
                  else{
                    return todo
                  }
                })
            }
        default:
            return state        
    }
}
