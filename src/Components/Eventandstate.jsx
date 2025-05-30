import React, { useState } from 'react'
import './Eventandstate.css'
function Eventandstate() {

    var [set , getSet] = useState( "Welcome To React" ) 
    var [img , getimg] = useState()

    function pay(){
        getSet("Yes That`s Me")
        getimg(<img src="image/a4de1dd7-c8ed-417f-848d-fc6eabd7713e-removebg-preview.png" alt="" />)
    }
    
  return (
    <div>
      <button onClick={pay} className="button"> Click Me </button>
      <h1 style={{textAlign: "center", marginTop:"50px"}}> {set}  </h1>
      <p>{img}</p>
    </div>
  )
}

export default Eventandstate
