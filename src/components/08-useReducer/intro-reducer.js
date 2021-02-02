const initialState = [{
  id: 1,
  todo: 'Comprar pan',
  done: false
}];

const todoReducer = ( state = initialState , { type, payload} ) => {

  switch (type) {
    // CASE AGREGAR
    case 'agregar':
      return [ 
        ...state, 
        payload 
      ];
      
    // CASE BUSCAR
    case 'buscarTodoId1':
      const todo = initialState.filter(todo => todo.id === 1);
      return todo;
      
    // CASE COUNT
    case 'contarTodos':
      const todosLength = initialState.length;
      return `En total encontramos ${todosLength} TODO(S)`;

    default:
      return state
  }

}


// 
const newTodo = {
  id: 2,
  todo: 'Comprar leche',
  done: false
}
// 
const agregarTodoAction = {
  type: 'agregar',
  payload: newTodo
}
// 
const buscarTodoId1Action = {
  type: 'buscarTodoId1',
  payload: 1
}
// 
const contarTodosAction = {
  type: 'contarTodos',
  payload: null
}
// 

let agregartodo = todoReducer(initialState, agregarTodoAction);

let buscarTodoId1 = todoReducer(initialState, buscarTodoId1Action);

let contarTodos = todoReducer(initialState, contarTodosAction);


console.log('Agregar TODO', agregartodo);

console.log('Buscar TODO : 1', buscarTodoId1);

console.log('Contar TODOS', contarTodos);