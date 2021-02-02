import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <div className="list-group">
      {
        todos.map( todo => (
          <TodoListItem key={ todo.id } todo={ todo } handleDelete={ handleDelete } handleToggle={ handleToggle } />
        ))
      }
    </div>
  )
}
