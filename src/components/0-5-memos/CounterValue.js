import React from 'react'

export const CounterValue = React.memo(({ value }) => {
  // Solo se va a ejecutar este CLG si  las propiedades de este componente cambian
  console.log('Se ha renderizado CounterValue Component');

  return (
    <h3>
      { value }
    </h3>
  )
}
)