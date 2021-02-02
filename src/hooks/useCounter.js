import { useState } from "react"

export const useCounter = (initialState = 100 /* Default value */) => {

  const [counter, setCounter] = useState(initialState)

  const incremet = (factor = 1) => {
    setCounter(counter + factor);
  }

  const decrement = (factor = 1) => {
    setCounter(counter - factor);
  }

  const reset = () => {
    setCounter(0);
  }

  return [
    counter,
    incremet,
    decrement,
    reset
  ];
}
