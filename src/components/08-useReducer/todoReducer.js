export const todoReducer = ( state = [], action ) => {

  switch (action.type) {
    case 'add':
      const newTodo = action.payload
      return [...state, newTodo];
  
    case 'delete':
      return state.filter( todo => todo.id !== action.payload )
    
    case 'toggle-long':
      return state.map( todo => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done }
        } else {
          return todo;
        }
      })
    
    case 'toggle':
      return state.map( todo => 
        // Return implícito
        ( todo.id === action.payload ) 
          ? { ...todo, done: !todo.done } 
          : todo
      )
    
    default:
      return state;
  }
  
}