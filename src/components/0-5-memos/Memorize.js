import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { CounterValue } from './CounterValue'

export const Memorize = () => {

  const [counter, increment, decrement, reset] = useCounter(1);
  const [show, setShow] = useState(true);

  console.log('Se ha renderizado Memorize Component');

  return (
    <div className="m-5">
      <h1>Memorize</h1>
      <hr/>
      <CounterValue value={counter} />
      <button className="btn btn-primary m-1" onClick={() => increment()}>increment</button>
      <button className="btn btn-primary m-1" onClick={() => decrement()}>decrement</button>
      <button className="btn btn-danger m-1" onClick={() => reset()}>reset</button>
      <hr/>
      <button 
      className="btn btn-warning m-1"
      onClick={() => setShow(!show)}
      >
        { show ? 'Hide' : 'Show' }
      </button>
    </div>
  )
}
