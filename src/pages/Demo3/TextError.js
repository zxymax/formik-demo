import React from 'react'

function TextError({children}) {
  return (
    <div className='error' style={{color: 'red'}}>
      {children}
    </div>
  )
}

export default TextError
