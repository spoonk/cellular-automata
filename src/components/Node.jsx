import React from 'react'

const Node = ({val, row, col, bordered}) => {
  return (
   <div className="container">
       <div className="dummy"></div>
       <div
            className={bordered ? "node node-bordered" : "node"}
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

export default Node