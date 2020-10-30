import React from "react";
import spinner from './spinner.svg'

export const Spinner = React.memo(()=> {
  return (
    <div style={{position: 'absolute',
      zIndex: 2, bottom: '-50px', left: '50%',
      transform: 'translateX(-50%)'}}>
      <img src={spinner} alt="spinner"/>
    </div>
  )
})
