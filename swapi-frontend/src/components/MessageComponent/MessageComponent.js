import React from 'react'
import "./messageComponent.css"

const MessageComponent = ({successMessage, errorMessage}) => {

  
  return (
    <div className='container-message'>
      <h4 className='headline-message'>App status</h4>
      {successMessage && <div className='text-success message'>{successMessage}</div>}
      {errorMessage && <div className='text-danger message'>{errorMessage}</div>}
    </div>
  )
}

export default MessageComponent