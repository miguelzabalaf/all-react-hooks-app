import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

  const { user } = useContext(UserContext);


  return (
    <div>
      <h1>AboutScreen</h1>
      <hr/>
      {
        user.name ?  <h3>Hola, bienvenido { user.name }</h3> : null
      }
    </div>
  )
}
