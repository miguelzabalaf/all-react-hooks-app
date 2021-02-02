import React, { useEffect, useState } from 'react'
export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const { name, email } = formState;

  useEffect(() => {
    // console.log('Name input change');
  }, [name]);

  useEffect(() => {
    // console.log('Email input change'); 
  }, [email]);


  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value

    })
  }

  return (
    <div className="p-5">
      <h1>useEffect</h1>
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
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Your email"
          autoComplete="off"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
    </div>
  )
}
