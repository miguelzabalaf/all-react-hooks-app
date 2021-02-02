import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {

  const [state, incremet, decrement, reset] = useCounter();

  return (
    <div className="p-5">
      <h1>Counter with Hook: {state}</h1>
      <hr />
      <button className="btn btn-primary m-2" onClick={() => incremet()}>+1</button>
      <button className="btn btn-primary m-2" onClick={() => decrement()}>-1</button>
      <button className="btn btn-danger m-2" onClick={() => reset()}>reset</button>
    </div>
  )
}
