import React from 'react'


function PopContact({modal}) {
  return (
    <div className='pop-contact'>
      <div className="pop-center-element">
        <div className="pop-content">
          <div className="pop-details"></div>
          <div className="pop-form">
            {modal}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopContact