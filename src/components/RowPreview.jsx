import React from 'react'
import Node from './Node'


const RowPreview = ({seed}) => {
  return (
    <div id="row-preview">
        {seed.map((node, index) => {
            return <Node 
                key = {"preview" + index}
                val={node} 
            />
        })}
    </div>
  )
}

export default RowPreview