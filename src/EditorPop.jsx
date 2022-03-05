import React from 'react'
import Editor from './components/Editor'

const EditorPop = () => {
  return (
    <div id="editor-popup">
        <p style={{fontSize: "32px", color:"#add7ff", padding:"30px", paddingBottom: "10px"}}>
            Generation Zero Editor
        </p>
        <Editor 
          seed = {this.state.seed}
        />
        <div id="editor-info">
          <p className="editor-info-text">
          </p>
        </div>
      </div>
  )
}

export default EditorPop