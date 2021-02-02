import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log('El email cambió');
  }, [email]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    }
    console.log(user);
  }

  return (
    <form className="p-5" onSubmit={handleSubmit}>
      <h1>Form With Custom Hook</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Your name"
          autoComplete="off"
          className="form-control mb-3"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Your email"
          autoComplete="off"
          className="form-control mb-3"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Your password"
          autoComplete="off"
          className="form-control mb-3"
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Giuardar
      </button>
    </form>
  )
}
