import React, { useRef } from 'react'

export const FocusScreen = () => {

  const inputRef = useRef();

  const handleClick = () => {
    // document.querySelector('input').select(); OLD
    inputRef.current.select();
  }

  return (
    <div className="p-5">
      <h1>FocusScreen</h1>
      <hr />
      <input
        ref={inputRef}
        className="form-control"
        placeholder="Name"
      />
      <button
        className="btn btn-primary mt-3"
        onClick={handleClick}
      >
        Focus
      </button>
    </div>
  )
}
