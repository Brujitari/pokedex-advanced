import React from 'react'

function Button({ text, handleClick }) {
  return (
    <section
    className='button'
    onClick={handleClick}>
        <p className='button__text'>{text}</p>
    </section>
  )
}

export default Button