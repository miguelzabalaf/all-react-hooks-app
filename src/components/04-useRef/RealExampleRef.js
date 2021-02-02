import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {

  const [show, setShow] = useState(false);

  return (
    <div className="p-5">
      <h1>RealExampleRef</h1>
      <hr />
      <button
        className={`btn ${show ? "btn-danger" : "btn-primary"}`}
        onClick={() => setShow(!show)}
      >
        {show ? "Hide" : "Show"}
      </button>
      { show && <MultipleCustomHooks />}
    </div>
  )
}
