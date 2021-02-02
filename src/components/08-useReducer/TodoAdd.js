import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

  const [ formValues, handleInputChange, reset ] = useForm({
    inputDescription: ''
  });

  const [dangerMessage, setDangerMessage] = useState(false)

  const { inputDescription } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputDescription.length > 0) {
      const newTodo =   {
        id: new Date().getTime(),
        desc: inputDescription,
        done: false
      }
      handleAddTodo( newTodo );
      reset();
      return (dangerMessage ? !setDangerMessage(!dangerMessage) : dangerMessage)
    } else {
      return (dangerMessage ? null : setDangerMessage(!dangerMessage))
    }
  }

  return (
    <>
      <h5>Add Todo:</h5>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          autoComplete="off"
          name="inputDescription"
          value={ inputDescription }
          onChange={ handleInputChange }
          placeholder="Study at home.."
          className="form-control"
        />
        {
          dangerMessage && <small className="text-danger">This field is required</small>
        }
        <br/>
        <button type="submit" className="btn btn-primary mt-2">Add Todo</button>
      </form>
    </>
  )
}
