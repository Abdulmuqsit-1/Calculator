import React, { useRef } from 'react'
import'./Calculator.css'
function Calculator() {
    const seerefs = useRef(null)

    function btnfn(x){
        seerefs.current.value += x
    }

    function clearfn(){
        seerefs.current.value = ""

    }
    function takefn(){
      let see =  seerefs.current.value.slice(0 , -1)
      seerefs.current.value = see
    }
    function eqfn(){
      let q =  seerefs.current.value
      let rest = eval(q)
      seerefs.current.value = rest
    }
  return (
    <div>
      <div className="container">
        <input ref={seerefs} type="text" />
        <button onClick={function(){clearfn()}} className='row'>Clear</button>
        <button onClick={function(){takefn()}} className='row1'>C</button>
        <button onClick={function(){btnfn("+")}} className='row1'>+</button>

        <button onClick={function(){btnfn(7)}} className='row2'>7</button>
        <button onClick={function(){btnfn(8)}} className='row2'>8</button>
        <button onClick={function(){btnfn(9)}} className='row2'>9</button>
        <button onClick={function(){btnfn("*")}} className='row2' style={{backgroundColor:"lightseagreen"}}>*</button>

        <button onClick={function(){btnfn(4)}} className='row3'>4</button>
        <button onClick={function(){btnfn(5)}} className='row3'>5</button>
        <button onClick={function(){btnfn(6)}} className='row3'>6</button>
        <button onClick={function(){btnfn("-")}} className='row3' style={{backgroundColor:"lightseagreen"}}>-</button>

        <button onClick={ function(){btnfn(1)}} className='row4'>1</button>
        <button onClick={ function(){btnfn(2)}} className='row4'>2</button>
        <button onClick={ function(){btnfn(3)}} className='row4'>3</button>
        <button onClick={ function(){btnfn("/")}} className='row4' style={{backgroundColor:"lightseagreen"}}>/</button>

        <button onClick={function(){btnfn(0)}} className='row5'>0</button>
        <button onClick={function(){btnfn(".")}} className='row5'>.</button>
        <button onClick={function(){eqfn()}} className='equal'>=</button>
      </div>
    </div>
  )
}

export default Calculator
