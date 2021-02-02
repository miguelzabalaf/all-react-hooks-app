import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const HomeScreen = () => {

  const userContext = useContext(UserContext);

  const { user } = userContext;

  return (
    <div>
      <h1>HomeScreen</h1>
      <hr/>
      {
        Object.entries(user).length !== 0 ?
        <>
          <p><b>ID:</b> {user.id}</p>
          <p><b>Name:</b> {user.name}</p>
          <p><b>E-mail:</b> {user.email}</p>
          <hr/>
          <pre>
            { JSON.stringify( user, null, 3 ) }
          </pre>
        </>
        : 
        null

      }
    </div>
  )
}
