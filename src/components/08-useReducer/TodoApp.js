import React, { useEffect, useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ))
  }, [todos])

  const handleDelete = (todoId) => {
    dispatch({
      type: 'delete',
      payload: todoId
    });
  }

  const handleToggle = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId
    });
  }

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo
    });
  }


  return (
    <div className="m-5">
      <h1>TodoApp ( {todos.length} )</h1>
      <hr/>
      <TodoAdd 
        handleAddTodo={ handleAddTodo }
      />
      <hr/>
      <h3>Resent Todos</h3>
      <TodoList 
        todos={ todos } 
        handleDelete={ handleDelete } 
        handleToggle={ handleToggle } 
      />
    </div>
  )
}
