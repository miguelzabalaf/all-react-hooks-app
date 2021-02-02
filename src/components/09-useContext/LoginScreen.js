import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { UserContext } from './UserContext'

export const LoginScreen = () => {

  // Incorporate UserContext
  const userContext = useContext(UserContext);
  
  // Destructuring UserContext
  const {user, setUser} = userContext;
  
  // Incorporate customHook useForm
  const [ formValues, handleInputchange ] = useForm({
    name: "",
    email: ""
  })
  
  // Destructuring formValues
  const { name, email } = formValues;
  
  // Incorporate Hook for React Router
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({...user, id: new Date().getTime(),  name, email})
    history.push("/");
  }

  useEffect(() => {
    if ( Object.entries(user).length !== 0  ) {
      history.push('/home');
    }
  }, [])

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr/>
      <form onSubmit={ handleSubmit }>
        <input 
          type="text"
          name="name"
          className="form-control mb-3"
          value={ name }
          placeholder="Name"
          autoComplete="off"
          onChange={ handleInputchange }
        />
        <input 
          type="email"
          name="email"
          className="form-control  mb-3"
          value={ email }
          placeholder="Email"
          autoComplete="off"
          onChange={ handleInputchange }
        />
        <button type="submit" className="btn btn-primary">SET USER</button>
      </form>
    </div>
  )
}
