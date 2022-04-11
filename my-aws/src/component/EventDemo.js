import React from 'react'

export default function EventDemo() {

    const shoot =(a)=>
    {
        alert(a);
    }

  return (
    <div>
          <button onClick={() => shoot("Goal")}>take the shoot</button>
          <button onClick={() => shoot("Goal!")}>Take the shot!</button>
          </div>

    
  )
}
