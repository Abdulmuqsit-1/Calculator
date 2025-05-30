import React, { useState } from 'react'
import './Eventtarget.css'

function Eventtarget() {
  var   [tar , Settar] = useState()

  function tap(e){
    Settar(e.target.textContent)
  }
  return (
    <div>
      <ul onClick={tap} >
        <li >Red</li>
        <li>Purple</li>
        <li>Black</li>
        <li>Green</li>
        <li>Blue</li>
      </ul>

      <h2>Select a color : {tar} </h2>
    </div>
  )
}

export default Eventtarget
