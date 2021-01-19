import React, { useState, useEffect } from 'react';
import Expose from "ync-react-expose"
import './index.css'

function App() {
  
  return (
    <>
        <Expose seconds={10} openDebugger={true} expose={() => {
            console.log('符合曝光条件被曝光了, 具体信息打开控制台查看')
        }}>
            <div className="element" style={{background: 'black'}}>被曝光元素</div>
        </Expose>
        <div className="element" style={{background: 'blue'}}>其他元素1</div>
        <div className="element" style={{background: 'red'}}>其他元素2</div>
        <div className="element" style={{background: 'green'}}>其他元素3</div>
    </>
  );
}

export default App;
