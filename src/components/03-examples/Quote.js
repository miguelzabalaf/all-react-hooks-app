import React from 'react'

export const Quote = ({ quoteData }) => {

  const { author, quote, series } = quoteData;

  return (
    <div className="card text-dark bg-light mb-3">
      <div className="card-header">{series}</div>
      <div className="card-body">
        <h5 className="card-title">{author}</h5>
        <p className="card-text">{quote}</p>
      </div>
    </div>
  )
}
