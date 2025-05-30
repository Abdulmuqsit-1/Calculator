import React from 'react'

function Props1(Props) {
    let myName = " Tayo"
    let age = "20"
    let hobbies = "betting"
  return (
    <div>
       <h1> ========= Props as Attributes ========= </h1>
      <h1>  Welcome to {Props.school} </h1>
      <h2> where we learn different tech pathway {Props.course}</h2>
       <h2> The Roadmap to web development is { Props.roadmap} </h2>


        {Props.children}


        <h1> ========= Props as Javascript ========= </h1>
     <h2>    he is named {myName} </h2>
      <h2> he is  {age} years old </h2>
       <h2> he loves  {hobbies}</h2>
    </div>
  )
}

export default Props1
