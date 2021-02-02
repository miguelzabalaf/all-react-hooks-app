import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';

export const MemoHook = () => {

  const [counter, increment, decrement, reset] = useCounter(2000);
  const [show, setShow] = useState(true);

  console.log('Se ha renderizado Memorize Component');
  
  const bigProcess = ( iteractions ) => {
    for (let i = 0; i < iteractions; i++) {
      console.log('Ahí vamos..');
    }
    return `${ iteractions } iteractions finished`;
  }
  
  const memoBigProcess = useMemo(() => bigProcess(counter), [ counter ])
  
  return (
    <div className="m-5">
      <h1>MemoHook: { counter }</h1>
      <hr/>
      <p>{ memoBigProcess }</p>
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
