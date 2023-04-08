import React from 'react'

const Loader = ({done}) => {
    
  return (
    <div id='loader' style={{display: done ? "none":"block"}}></div>
  )
}
export default Loader