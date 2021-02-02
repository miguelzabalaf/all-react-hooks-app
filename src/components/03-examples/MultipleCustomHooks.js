import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import { Quote } from './Quote';

export const MultipleCustomHooks = () => {

  const [counter, increment, decrement] = useCounter(1);

  const baseURL = `https://www.breakingbadapi.com/api/quotes/${counter}`;

  const status = useFetch(baseURL);

  const { data, loading, error } = status;

  const { author, series, quote } = !!data && data[0];

  const quoteOptions = {
    series,
    author,
    quote
  }

  const isFirst = (counter) => {
    if (counter === 1) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className="p-5">
      <h1>Custom Hooks, Quote #{counter}</h1>
      <hr />
      {
        loading
          ?
          (
            <div className="alert alert-info text-center">
              <strong>Loading..</strong>
            </div>
          )
          :
          (
            <>
              <Quote quoteData={quoteOptions} />
              <button disabled={isFirst(counter)} className="btn btn-primary mr-1" onClick={() => decrement()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
              </button>
              <button className="btn btn-primary m-1" onClick={() => increment()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </button>
            </>
          )
      }
    </div>
  )
}
