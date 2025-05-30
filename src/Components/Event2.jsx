import React, { useState } from 'react'

function Event2() {
    var [Increase ,setIncrease] = useState(0)


    function incfn(){
        if( Increase == 20){
            alert("maximum value reached ")
            setIncrease(20)
        }
        else{
            var In = Increase ++
            setIncrease(In) 

        }
            }

    function decfn(){
        if(Increase == 0){
            alert("minimum value reached")
            setIncrease(0)        
        }else{
            var de = Increase --
        setIncrease(de)
        }
         }

  return (
    <div>

    <div className="cont" style={{backgroundColor: "blue",width:"400px",height:"300px",margin:"40px auto",borderRadius:"5px",display:"flex"}}>
       <div className="ekpa" style={{display:"flex",margin:"50px auto",width:"90%",}}>
       <button onClick={decfn} style={{width:"80px",height:"40px",marginTop:"70px", marginLeft:"27px",background:"red", color:"white" ,borderRadius:"5px"}}>Decrease</button>
        <h1 style={{marginTop:"70px", marginLeft:"70px"}}>{Increase}</h1>
        <button onClick={incfn} style={{width:"80px",height:"40px",marginTop:"70px", marginLeft:"90px",background:"green", borderRadius:"5px"}}>Increase</button>
       </div>
    </div>

    </div>
  )
}

export default Event2
