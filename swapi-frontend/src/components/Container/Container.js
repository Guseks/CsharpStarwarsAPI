import React from 'react'
import "./container.css"

const Container = ({type, children} ) => {

  const containerClass = `container-${type}`;

  return (
    <div className={containerClass}>
      {children}
    </div>
  )
}

export default Container