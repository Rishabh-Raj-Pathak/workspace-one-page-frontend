import React from 'react'

function FloatingLogos({src, className}) {
  return (
    <div>
      <img src={src} alt="logo" className={`absolute w-12 h-12 shadow-lg rounded-xl ${className}`}/>
    </div>
  )
}

export default FloatingLogos
