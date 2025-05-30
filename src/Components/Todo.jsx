import React, { useRef, useState } from 'react'
import './Todo.css'
function Todo() {
    var catref = useRef()
    var [chen , setChen] = useState([])
       
            
        
    const add = ()=> {
        if (catref.current.value == ""){
            alert("kindly enter a value")
        }else{

         var newchen = [...chen ,catref.current.value ]
         setChen(newchen);
         catref.current.value= "" ;
         catref.current.focus()
            // console.log(chen)
        }
    
    }


  return (
    <div>
      <div className="cont">

        <div className="header"> 
            <input ref={catref} type="text" />
            <button onClick={add}>Add</button>
        </div>

        <div className="taskcont">

            { chen.length == 0  ?  <h2 className='happy'>No Task Added</h2> :
                chen.map((item)=>
                <div key={item} className="task">
                <div className="taskbar">{item}</div>
                <button>Complete</button>
                <button>Delete</button>
            </div>
                )
            }
            {/* <div  className="task">
                <div className="taskbar"></div>
                <button>Complete</button>
                <button>Delete</button>
            </div> */}
            

        </div>

      </div>



    </div>
  )
}

export default Todo
