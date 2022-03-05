import React from 'react'

// popups should be instantiated in App

const Popup = ({component, toggle}) => {
  return (
    <div>
        <div className="popup-container" onClick={toggle}></div>
        <div className="popup">
            {component}
        </div> 
    </div>   
  )
}

export default Popup