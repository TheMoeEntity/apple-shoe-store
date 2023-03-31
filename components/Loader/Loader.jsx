import React from 'react'

export const Loader = ({done}) => {
    
  return (
    <div id='loader' style={{display: done ? "none":"block"}}></div>
  )
}