import React,{useState} from 'react'

export default function (props) {
  const [name,setName]=useState(props.brand);

  return (
    
    <div>
        <h1>I am a {name}</h1>
        <button onClick={()=>{setName("this is from PropChid")}}>
          Update Name
        </button>
    </div>

  )
}
