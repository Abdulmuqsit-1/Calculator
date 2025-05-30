import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import Intro from './Components/Intro'
// import Props1 from './Components/Props1'
// import Eventandstate from './Components/Eventandstate'
// import  Event2 from './Components/Event2'
// import Eventtarget from './Components/Eventtarget'
// import Calculator from './Components/Calculator'
import Todo from './Components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Todo></Todo>
  {/* <Calculator /> */}

{/* <Eventtarget /> */}

{/* <Event2></Event2> */}
{/* <Eventandstate></Eventandstate> */}
    {/* <Intro></Intro> */}
    {/* <Props1  school = "Classic"  course="Web development , Python , UI/UX , Data Analysis , Graphic design e.t.c" roadmap = "HTML , CSS , JS , REACT , DATABASE , PHP"> 
    <h1> ========= Props as Children ========= </h1>
     <h2> Good Day </h2> 
     <h3> React props can be pass through a component as a standard tag or as an Attributes
      however props value cannot be changed </h3 >
    </Props1> */}


      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
