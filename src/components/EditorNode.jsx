import React from 'react'
import { useState } from 'react';

const EditorNode = ({val, index, changeValCB, handleMouseDown, handleMouseEnter, handleMouseUp, painting, handleOnClick}) => {

    const [localVal, setVal] = useState(val);


    const changeValue = () => {
        var newVal = localVal === 1 ? 0 : 1;
        setVal(newVal);
    }


  return (
    <div className="container" 
        // onClick={changeValue}
        onMouseDown = { () => {
            handleMouseDown(index);
        }}    
        onMouseEnter = { () => {
            handleMouseEnter(index)
            // if (painting) {changeValue()}
        }}
        onMouseUp = { () => handleMouseUp(index)}  
    >
       <div className="dummy"></div>
       <div
            className="node node-bordered"
            style=
                {val === 1? 
                    {backgroundColor: "#88C0D0"} 
                    : {}
                }
        >
       </div>
   </div>
  )
}

export default EditorNode